/** MEDIUM
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * 
 * Approach: 
 * - Sort the input array to easily identify dups. 
 * - Make a map of elements and their indices
 * - Iterate the array and for each element perform TwoSum algorithm starting from the next elem of the array
 */

var threeSum = function (nums) {
    if (nums.length < 2) return [];
    let finalRes = [];
    let match = [];
    let map = new Map();
    nums.sort((a, b) => a - b);
    nums.map((e, idx) => {
        let arr = [];
        if (map.has(e)) arr = map.get(e);
        arr.push(idx);
        map.set(e, arr);
    });
    //   console.log(map);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i == 0 || nums[i] != nums[i - 1]) {  //to avoid dups, if consecutive numbers are the same then we can skip
            let k = 0 - nums[i];
            for (let j = i + 1; j < nums.length - 1; j++) {
                if (j == i + 1 || nums[j] != nums[j - 1]) { //to avoid dups, if consecutive numbers are the same then we can skip
                    let n = k - nums[j];
                    if (map.has(n)) {
                        let idx = map.get(n);
                        for (let m = 0; m < idx.length; m++) {
                            if (idx[m] > j) {
                                match.push(nums[i], nums[j], n);
                                finalRes.push(match);
                                match = [];
                                break;
                            }
                        }
                    }
                }
            }
        }

    }
    return finalRes;


};
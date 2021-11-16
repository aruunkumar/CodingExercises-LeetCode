/**EASY
 *Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    A subarray is a contiguous part of an array. 

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Approach: Iterate the array and for every element we need to decide if we should include it in the current subarray or start a new subarray from current position
This can be done as -
num = Max(curr, prevsum+curr) i.e. if prevsum + curr is higher then we continue with the subarray or else start a new subarray from current position. 
 *
 */

var maxSubArray = function (nums) {
    let curr;
    let res = nums[0];
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(nums[i], prev + nums[i]);
        res = Math.max(res, curr);
        prev = curr;
    }
    return res;
};

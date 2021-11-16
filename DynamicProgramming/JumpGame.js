/**MEDIUM
 You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise. 
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: nums = [3,2,1,0,4]
Output: false
 

Approach: As we traverse, get the maximum index we can jump to. If at any point we reached an index that is greater than the max index we found that means 
we cannot get to the end.

Approach 2: Work backward. If we encounter a 0, see if we can jump past it
 */

var canJump = function (nums) {
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxIndex) return false;
        maxIndex = Math.max(maxIndex, nums[i] + i);
    }
    return true;

};
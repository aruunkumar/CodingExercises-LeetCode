/** EASY
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from 
 * robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken 
 * into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

NOTES: You might assume that we can just return the max of summing odd number and even number houses. But that wont work in the scenario where we want to ignore
2 houses at a stretch to maximize profit. Ex: [2,7,9,1,1,3] 

DP approach: rob(i) = Max(rob(i-2)+val, rob(i-1)). i.e. decide if we should rob a house or not and maintain each in an array. The last element of the array will be 
the max value.
* 
 */

var rob = function (nums) {
    if (nums.length <= 2) return Math.max(...nums);
    let prf = [];
    prf[0] = nums[0];
    prf[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        prf[i] = Math.max(prf[i - 2] + nums[i], prf[i - 1]);
    }
    return prf[prf.length - 1];

};
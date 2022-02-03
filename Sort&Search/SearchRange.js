/**MEDIUM
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
 * 
Approach: Perform binary search to find the number. Then expand left and right to find the range.

 */

var searchRange = function (nums, target) {
    if (nums.length == 0) return [-1, -1];
    let left = 0;
    let right = nums.length - 1;
    let mid;
    let found = false;
    while (left <= right) {
        mid = left + parseInt((right - left) / 2);
        if (nums[mid] == target) {
            found = true;
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else right = mid - 1;
    }
    //    console.log(left, right, mid);
    if (found) {
        let i = mid;
        while (nums[i] == target && i >= 0) {
            i--;
        }
        i++;
        while (nums[mid] == target && mid < nums.length) {
            mid++;
        }
        mid--;
        return [i, mid];
    } else return [-1, -1];
};
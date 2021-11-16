/**EASY**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in 
 * nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, 
where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Approach - Starting from the smallest (i.e. index 0) compare each element of the 2 arrays one by one. If array 1 element is greater then swap them. After swapping
sort the 2nd array so that the smallest is still at front. 
 */

var merge = function (nums1, m, nums2, n) {
    const insertToArr = (e) => {
        nums2[0] = e;
        nums2.sort((a, b) => a - b);
        //    console.log('Sorted Array2:', nums2);
    }

    if (n == 0) return;
    if (m == 0) {
        for (let j = 0; j < n; j++) {
            nums1[j] = nums2[j];
        }
        return;
    };
    let i = 0, j = 0, temp;
    while (i < m) {
        if (nums1[i] <= nums2[j]) {
            i++;
        } else {
            temp = nums1[i];
            nums1[i] = nums2[j];
            insertToArr(temp);
            i++;
            //           console.log('Arr1 after swap:', nums1);
        }
    }
    while (j < n) {
        nums1[i] = nums2[j];
        j++;
        i++;
    }
}

/**
 * Approach 2 - start from the back - where our "empty" spaces are. We are basically keeping two pointers, but starting at the back and looking for the bigger 
 * of the two numbers instead of the smaller.
 */
var merge = function (nums1, m, nums2, n) {
    //we don't want the length, we want the start position of the final elements
    m--;
    n--;

    while (m + n >= -1) {
        //If bigger, or nothing left in nums2, copy it over
        if ((nums1[m] > nums2[n]) || n < 0) {
            nums1[m + n + 1] = nums1[m];
            m--;
        } else {
            nums1[m + n + 1] = nums2[n];
            n--;
        }
    }
}
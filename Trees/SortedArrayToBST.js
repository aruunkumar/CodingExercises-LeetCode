/**EASY
 * 
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
            0
          /   \
        -3     9
        /     /
      -10    5        


Explanation: [0,-10,5,null,-3,null,9] is also accepted

Appraoch: Middle value will be the root and the elements on each side would be the left and right elements. Use recurision to go down the tree until we get 
the smallest tree which has only 2 or 3 elements.
[x,y,z]
    y
  x     z
[x,y]  
  y
x  

 */

var sortedArrayToBST = function (nums) {
  let root;
  //    console.log('Input:', nums);
  if (nums.length == 1) return new TreeNode(nums[0]);
  if (nums.length <= 3) {
    let leftLeaf, rightLeaf;
    leftLeaf = new TreeNode(nums[0]);
    if (nums.length == 3) {
      rightLeaf = new TreeNode(nums[2]);
    }
    root = new TreeNode(nums[1], leftLeaf, rightLeaf);
    return root;
  }
  let mid = parseInt(nums.length / 2);
  let leftRoot = sortedArrayToBST(nums.slice(0, mid));
  let rightRoot = sortedArrayToBST(nums.slice(mid + 1, nums.length));
  root = new TreeNode(nums[mid], leftRoot, rightRoot);
  return root;


};
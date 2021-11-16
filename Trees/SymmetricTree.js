//EASY
//[2,3,3,4,null,null,4,null,5,5,null,null,6,6,null,7,8,8,7,9,0,0,1,1,0,0,9]
/* Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

Example:

[1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3

The question is when are two trees a mirror reflection of each other? Three conditions:
- Their two roots have the same value.
- The right subtree t1.right of each tree t1 is a mirror reflection of the left subtree t2.left of the other tree t2.
- The left subtree t1.left of each tree t1 is a mirror reflection of the right subtree t2.right of the other tree t2.

Recursive solution:
-------------------
public boolean isSymmetric(TreeNode root) {
  return isMirror(root, root);
}

private boolean isMirror(TreeNode t1, TreeNode t2) {
  // base case
  if (t1 == null && t2 == null) return true;
  if (t1 == null || t2 == null) return false;
  // check values
  if (t1.val != t2.val) return false;
  // check left subtree and right subtree
  return isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
}

*/

//My solution using multiple stacks :( 

var isSymmetric = function (root) {
    let stk1 = [], stk2 = [], arr = [], i = 0, cnt = 2;
    if (root === null) return true;
    stk1.push(root);

    while (stk1.length > 0) {
        let elem = stk1.pop();
        arr.push(elem ? elem.val : null);
        if (elem) {
            stk2.push(elem.left);
            stk2.push(elem.right);
        }

        if (stk1.length == 0) {
            if (!isMirror(arr)) return false;
            stk1 = stk2;
            stk2 = [];
            arr = [];
        }
    }
    return true;

};

const isMirror = (arr) => {
    let i = 0; j = arr.length - 1;
    while (i < j) {
        if (arr[i] != arr[j]) return false;
        i++;
        j--;
    }
    return true;
}

/** MEDIUM
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 * 
 * EX:
 *              5
 *            /  \       
 *          3     6    
 *        /   \
 *      2      4
 *    /
 *  1
 * 
 *  Input: root = [5,3,6,2,4,null,null,1], k = 3  
 *  Output: 3
 * 
 */

var kthSmallest = function (root, k) {
    let arr = [];
    const traverseBST = (root) => {
        let left, right;
        if (root.left) {
            left = traverseBST(root.left);
            if (left) return left;
        }
        arr.push(root.val);
        if (arr.length >= k) return arr[k - 1];
        if (root.right) {
            right = traverseBST(root.right);
            if (right) return right;
        }
    }

    if (root) return traverseBST(root);

};
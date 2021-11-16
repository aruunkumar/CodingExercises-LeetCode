/**MEDIUM
 *  Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and 
 * inorder is the inorder traversal of the same tree, construct and return the binary tree.
 * 
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] 
 * Output: [3,9,20,null,null,15,7]
 * 
 * Approach: set the first element of preorder as the root, and then construct the entire tree. To find the left and right subtrees, 
 * it will look for the root in inorder, so that everything on the left should be the left subtree, and everything on the right should be the right subtree. 
 * Both subtrees can be constructed by making another recursion call.
 */

var buildTree = function (preorder, inorder) {
    let leftNode, rightNode;
    let root = preorder.shift();
    //  let map = new Map();
    //  inorder.map((e,i) => map.set(e,i));
    if (inorder.length <= 1) return new TreeNode(root);
    let pos = inorder.indexOf(root);
    let leftInArr = inorder.slice(0, pos);
    let rightInArr = inorder.slice(pos + 1);
    let leftPreArr = preorder.slice(0, leftInArr.length);
    let rightPreArr = preorder.slice(leftInArr.length);
    if (leftPreArr.length > 0) {
        leftNode = buildTree(leftPreArr, leftInArr);
    }
    if (rightPreArr.length > 0) {
        rightNode = buildTree(rightPreArr, rightInArr);
    }
    let rootNode = new TreeNode(root, leftNode ? leftNode : null, rightNode ? rightNode : null);
    return rootNode;

};

//This solution can be improved further by changing indexOf to a Map based lookup.

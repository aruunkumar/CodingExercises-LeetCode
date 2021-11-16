/**MEDIUM
 * Binary Tree Zigzag Level Order Traversal
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
 * (i.e., from left to right, then right to left for the next level and alternate between).
 * 
 * Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
 */

var zigzagLevelOrder = function (root) {
    let out = [];
    let stk = [];
    let right = true;
    if (!root) return stk;
    stk.push(root);
    while (stk.length > 0) {
        let len = stk.length;
        let level = [];
        for (let i = 0; i < len; i++) {
            let node = stk.shift();
            level.push(node.val);
            if (node.left) stk.push(node.left);
            if (node.right) stk.push(node.right);
        }
        right ? out.push(level) : out.push(level.reverse());
        right = !right;
    }
    return out;

};

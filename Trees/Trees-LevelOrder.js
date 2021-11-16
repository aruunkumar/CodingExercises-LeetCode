/* EASY
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

*/

var levelOrder = function (root) {
    let stk1 = [], stk2 = [], res = [], temp = [];
    if (root === null) return [];
    stk1.push(root);
    while (stk1.length > 0) {
        let elem = stk1.pop();
        if (elem) {
            temp.push(elem.val);
            if (elem.left) stk2.push(elem.left);
            if (elem.right) stk2.push(elem.right);
        }
        //        console.log('temp:', temp);
        if (stk1.length === 0) {
            stk1 = stk2.reverse();
            stk2 = [];
            if (temp.length > 0) res.push(temp);
            temp = [];
        }
    }
    return res;
};


//Above uses 4 arrays. Instead we can do with only 3 using below approach which is better

var levelOrder = function (root) {
    let result = [];
    currentLevelNodes = [];
    if (root)
        currentLevelNodes.push(root);
    while (currentLevelNodes.length > 0) {
        current = [];
        let len = currentLevelNodes.length;
        for (let i = 0; i < len; i++) {
            let node = currentLevelNodes.shift();
            current.push(node.val);
            if (node.left) {
                currentLevelNodes.push(node.left);
            }
            if (node.right) {
                currentLevelNodes.push(node.right);
            }
        }
        result.push(current);
    }
    return result;
};


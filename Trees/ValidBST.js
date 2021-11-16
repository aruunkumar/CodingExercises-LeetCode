//EASY
//Check if the Binary search tree is valid. A BST is said to be valid if the left element < root and right element > root. In addition every element 
//on the left side of the tree should also be < root and every element on right side should be greater than root. Ex:
//                           120
//                         /     \
//                      70       140
//                      / \      / \
//                     20  75   119 150
//This is invalid since 119 < 120 but is on the right side

var isValidBST = function (root) {
    if (root === null) return true;
    // return ((root.left ? root.val > rightVal(root.left) : true) 
    //         && (root.right ? root.val < leftVal(root.right) : true) 
    //         && isValidBST(root.left) && isValidBST(root.right));
    const { isValid, } = subTreeValid(root);
    return isValid;
};

const subTreeValid = (root) => {
    let isLeftValid = true, isRightValid = true, leftMin, leftMax, rightMin, rightMax;
    if (root.left) {
        const res = subTreeValid(root.left);
        isLeftValid = res.isValid;
        leftMin = res.minValue;
        leftMax = res.maxValue;
    }
    if (root.right) {
        const res2 = subTreeValid(root.right);
        isRightValid = res2.isValid;
        rightMin = res2.minValue;
        rightMax = res2.maxValue;
    }

    let isValid = isLeftValid && isRightValid &&
        (root.left ? root.val > leftMax : true) && (root.right ? root.val < rightMin : true);
    let minValue = root.left ? leftMin : root.val;
    let maxValue = root.right ? rightMax : root.val;
    //   console.log(root.val, " isValid:", isValid, "MinVal:", minValue, "MaxVal:", maxValue );
    return { isValid, minValue, maxValue };

}

//Better approach using in order traversal. Traverse the tree in order and if any element encountered is greater than prev element then the tree is invalid

var isValidBST = function (root) {
    let prev = null;

    const inOrder = (root) => {
        if (root == null) return true;

        if (!inOrder(root.left)) return false;

        if (prev != null && root.val <= prev) return false;
        prev = root.val;

        return inOrder(root.right);
    }

    return inOrder(root);

};




// let stk = [];

// const checkStack = (val) => {
//     if (stk.length == 0 || stk[stk.length-1] < val) {
//         stk.push(val);
//         return true;
//     } else return false;
// }

// var isValidBST = function(root) {
//     let leftStatus, rightStatus, status;
//     if (root == null) return true;

//     leftStatus = isValidBST(root.left);

//     status = checkStack(root.val);

//     rightStatus = isValidBST(root.right);
// //    console.log(leftStatus, status, rightStatus);
//     return status && leftStatus && rightStatus;
// };
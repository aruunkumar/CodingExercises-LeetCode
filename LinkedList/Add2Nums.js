/** MEDIUM
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains 
 * a single digit. Add the two numbers and return the sum as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *  
 */
var addTwoNumbers = function (l1, l2) {
    let out;
    let carry = 0;
    let prev = null;
    while (l1 != null || l2 != null) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        if (sum > 9) {
            carry = 1;
            sum = sum - 10;
        } else carry = 0;
        let curr = new ListNode(sum);
        if (prev) {
            prev.next = curr;
        } else out = curr;
        prev = curr;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry > 0) {
        let curr = new ListNode(carry);
        prev.next = curr;
    }
    return out;
};
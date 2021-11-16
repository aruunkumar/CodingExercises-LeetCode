/** MEDIUM
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists 
 * have no intersection at all, return null. 
 * 
 * For example, intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
 *          4 -> 1 -> 
 *                   8 -> 4 -> 5
 *     5 -> 6 -> 1 ->
 * Note: intersection is based on pointer node and not value. So in above example intersection is at node 8 and not node with value 1.
 * 
 * Approach:
 * We can use two iterations to do that. In the first iteration, we will reset the pointer of one linkedlist to the head of another linkedlist after it reaches 
 * the tail node. In the second iteration, we will move two pointers until they points to the same node. Our operations in first iteration will help us counteract 
 * the difference. So if two linkedlist intersects, the meeting point in second iteration must be the intersection point. If the two linked lists have no 
 * intersection at all, then the meeting pointer in second iteration must be the tail node of both lists, which is null
 * 
 * It works because pointer A walks through List A and List B (since once it hits null, it goes to List B's head).
 * Pointer B also walks through List B and List A. Regardless of the length of the two lists, the sum of the lengths are the same (i.e. a+b = b+a), 
 * which means that the pointers sync up at the point of intersection. If the lists never intersected, it's fine too, because they'll sync up at the 
 * end of each list, both of which are null.
 * 
 */

var getIntersectionNode = function (headA, headB) {
    let a = headA;
    let b = headB;
    while (a != b) {
        a = (a ? a.next : headB);
        b = (b ? b.next : headA);
    }
    return a;

};

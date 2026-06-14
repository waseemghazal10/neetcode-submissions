/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let dummy = new ListNode(-1);
        let tail = dummy;

        let c1 = list1;
        let c2 = list2;

        while (c1 !== null && c2 != null) {
            if (c1.val <= c2.val) {
                tail.next = c1;
                c1 = c1.next;
            }else{
                tail.next = c2;
                c2 = c2.next;
            }
            tail = tail.next;
        }
         if (c1 == null) tail.next = c2;
         if(c2 == null) tail.next = c1;
        
        return dummy.next;

    }
}

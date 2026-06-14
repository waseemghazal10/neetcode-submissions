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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        
        if (head === null){
            return null;
        }

        let current = head;
        let prev = null;

        while(current !== null){
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        return prev;
        
    }
}

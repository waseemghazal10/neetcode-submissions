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
     * @return {boolean}
     */
    hasCycle(head) {
        let pointer = head;
        const visited = new Set();

        while(pointer !== null){
            if(visited.has(pointer)){
                return true;
            }
            visited.add(pointer);
            pointer = pointer.next;
        }
        return false;
    }
}

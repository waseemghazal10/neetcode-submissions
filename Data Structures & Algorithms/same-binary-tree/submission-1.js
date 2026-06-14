/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        

        const queue1 = [p];
        const queue2 = [q];

        while (queue1.length && queue2.length) {
            const node1 = queue1.shift();
            const node2 = queue2.shift();

            if (node1.val !== node2.val) return false;

            if (node1.left && node2.left) {
                queue1.push(node1.left);
                queue2.push(node2.left);
            } else if (node1.left || node2.left) {
                return false;
            }

            if (node1.right && node2.right) {
                queue1.push(node1.right);
                queue2.push(node2.right);
            } else if (node1.right || node2.right) {
                return false;
            }

        }
        return queue1.length === queue2.length;
    }
}

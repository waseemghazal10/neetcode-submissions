# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        self.num = None
        self.counts = k

        def bst(root):
            if not root:
                return
            
            bst(root.left)
            self.counts -= 1
            if self.counts == 0:
                self.num = root.val
            bst(root.right)

        bst(root)
        return self.num
            
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        self.target = None
        
        def dfs(root, p, q):
            if not root:
                return

            if (p < root.val < q) or (q < root.val < p) or (root.val == q) or (root.val == p):
                self.target = root
                return
            
            dfs(root.left, p, q)
            dfs(root.right, p, q)

        dfs(root, p.val, q.val)
        return self.target
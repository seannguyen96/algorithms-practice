#!/usr/bin/env python3
#  Given the root of a binary tree, return its maximum depth.

#  A binary tree's maximum depth is the number of nodes along the longest 
#  path from the root node down to the farthest leaf node.

#  Example 1: 
#       3
#      / \
#     9  20
#       /  \
#     15    7

# Input: root = [3,9,20,null,null,15,7]
# Output: 3

# Example 2:
# Input: root = [1,null,2]
# Output: 2

# Definition for a binary tree node.
class TreeNode(object):
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

class Solution(object):
  def maxDepth(self, root):
    if root is None: return 0
    else:
      left_depth = self.maxDepth(root.left)
      right_depth = self.maxDepth(root.right)
      return max(left_depth, right_depth) + 1
    
root1 = TreeNode(3)
root1.left = TreeNode(9)
root1.right = TreeNode(20, TreeNode(15), TreeNode(7))

root2 = TreeNode(1, None, TreeNode(2))

solution = Solution()
print(solution.maxDepth(root1))
print(solution.maxDepth(root2))
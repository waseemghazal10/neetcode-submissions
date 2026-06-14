class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        num = set(nums)
        return len(num) != len(nums)
         
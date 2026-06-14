class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        
        xorAll = 0 
        xorNum = 0

        for i in range(len(nums)):
            xorNum ^= nums[i]

        for i in range(len(nums) + 1):
            xorAll ^= i

        return xorAll ^ xorNum        
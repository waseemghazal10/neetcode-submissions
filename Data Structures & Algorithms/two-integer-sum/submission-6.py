class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        nums_list = {}

        for i in range (len(nums)):
            complement =  target - nums[i]
            if complement in nums_list:
                return [nums_list[complement], i] if nums_list[complement] < i else [i , nums_list[complement]]     
            nums_list[nums[i]] = i    
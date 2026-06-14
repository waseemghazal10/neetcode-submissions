class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        const myArray = new Set(nums);
        
        return (nums.length != myArray.size);
    }
}

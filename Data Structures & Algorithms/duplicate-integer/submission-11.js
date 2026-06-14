class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myMap = {};

        for (let i = 0; i < nums.length; i++) {
            if (myMap[nums[i]]) {
                return true;
            }
            myMap[nums[i]] = true;

        }
        return false;
    }
}

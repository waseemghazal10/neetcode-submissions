class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      
      const myMap = {};

      for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if (myMap[complement] !== undefined){
          return ([i , myMap[complement]]);
        }
        myMap[nums[i]] = i;
      }

    }
}

class Solution {
  twoSum(nums, target) {
    const myMap = {};

    for (let i = 0; i < nums.length; i++) {
      myMap[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
      let answer = target - nums[i];

      if (myMap[answer] !== undefined && myMap[answer] !== i) {
        return [i, myMap[answer]]; 
      }
    }
  }
}

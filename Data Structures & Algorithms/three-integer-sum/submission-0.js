class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        let mySet = new Set();
        for(let i = 0 ; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                for(let k = j + 1; k < nums.length; k++){
                    if((nums[i] + nums[j] + nums[k]) === 0){
                        let pairs = [nums[i],nums[j],nums[k]].sort((a,b) => a - b);
                        let key = pairs.join(',');
                        if(!mySet.has(key)){
                            result.push(pairs);
                            mySet.add(key);
                        }
                    }

                }
            }
        }
        return result;
    }
}

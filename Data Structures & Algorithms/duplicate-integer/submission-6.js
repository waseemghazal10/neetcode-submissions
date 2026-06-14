class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {


        // O(n^2)
        // for (let i = 0; i < nums.length; i++){
        //     for (let j = i+1; j < nums.length; j++){
        //         if (nums[i] == nums[j]){
        //             return true;
        //         }
        //     }
        // }
        // return false;

        // O(nlogn)
        // nums.sort();
        // for(let i = 0; i < nums.length; i++){
        //     if(nums[i] == nums[i+1]){
        //         return true;
        //     }
        // }
        // return false;

        // O(1)
        const numsSet = new Set(nums);

        return nums.length !== numsSet.size;
    }
}

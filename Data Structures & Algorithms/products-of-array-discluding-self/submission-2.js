class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let array = [];
        let postfix = 1;

        for(let i = 0 ; i < nums.length; i++){
            array[i] = prefix;
            prefix *= nums[i];
        }
        
        for (let i = nums.length - 1; i >= 0; i--){
            
            array[i] = postfix * array[i];
            postfix *= nums[i];
        }
        return array;
    }
}

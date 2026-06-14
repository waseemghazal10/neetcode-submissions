class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
            let prefix = 1;
            let myArray = [];
            let postfix = 1;

            for(let i = 0; i < nums.length; i++){
                myArray[i] = prefix;
                prefix = prefix * nums[i];
            }

            for(let i = nums.length-1; i >= 0; i--){
                myArray[i] = myArray[i] * postfix;
                postfix =  postfix * nums[i];
            }
            return myArray;
    }
}

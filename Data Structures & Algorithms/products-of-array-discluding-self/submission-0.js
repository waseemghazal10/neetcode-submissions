class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let myArray = [];
        let prod = 1;
        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < nums.length; j++){
                if(j !== i){
                    prod = prod * nums[j];
                }
            }
            myArray.push(prod);
            prod = 1;
        }
        return myArray;
    }
}

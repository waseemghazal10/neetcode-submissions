class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = nums[0];
        let L = 0, R = nums.length - 1;

        while(L <= R){

            if(nums[L] < nums[R]){
                res = Math.min(res, nums[L]);
                break;
            }
            let M = Math.floor((L + R)/2);
            res = Math.min(res, nums[M]);
            
            if(nums[M] >= nums[L]){
                L = M + 1;
            }else{
                R = M - 1;
            }
        }
        return res;
    }
}

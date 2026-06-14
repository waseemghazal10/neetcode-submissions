class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let xorAll = 0;
        let xorNum = 0;

        for (let i = 0; i <= n; i++){
            xorAll ^= i;
        }

        for (let num of nums){
            xorNum ^= num;
        }

        return xorAll ^ xorNum;
    }
}

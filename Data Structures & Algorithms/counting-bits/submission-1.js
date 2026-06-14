class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = 0;
        let array = [];

        for(let i = 0; i <= n; i++){
            let j = i;

            while(j){
                res += j & 1;
                j = j >> 1;
            }
            array.push(res);
            res = 0;
        }
        return array;
    }
}

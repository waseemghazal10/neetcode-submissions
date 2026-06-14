class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = 0;
        let array = [];

        for (let i = 0; i <= n; i++) {
            let j = i;
            
            while (j) {
                res += j % 2;
                j = Math.floor(j / 2);
            }
            array.push(res);
            res = 0;
        }
        return array;
    }
}

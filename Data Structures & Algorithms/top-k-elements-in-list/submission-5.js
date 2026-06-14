class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const myMap = {};

        for (let num of nums) {
            myMap[num] = (myMap[num] || 0) + 1;
        }

        const data = Object.entries(myMap);

        data.sort((a,b) => b[1] - a[1]);

        return data.slice(0,k).map(entry => Number(entry[0]));
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const myMap = {};

        for (let i = 0; i < nums.length; i++) {
            myMap[nums[i]] = (myMap[nums[i]] || 0) + 1;
        }

        const entries = Object.entries(myMap);
        entries.sort((a,b) => b[1] - a[1]);

        return entries.slice(0,k).map(entry => Number(entry[0]));


    }
}
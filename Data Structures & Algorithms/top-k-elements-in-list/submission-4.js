class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        let answer = [];
        for (let i = 0; i < nums.length; i++){
            if(map[nums[i]]){
                map[nums[i]] += 1;
            }else{
                map[nums[i]] = 1;
            }
        }

        const data = Object.entries(map);
        data.sort((a,b) => b[1] - a[1]);

        return data.slice(0,k).map(entry => Number(entry[0]));
    }
}

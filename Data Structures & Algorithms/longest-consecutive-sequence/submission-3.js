class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for(let num of nums){
            if(!numSet.has(num - 1)){
                let length = 0;
                while (numSet.has(length + num)){
                    length += 1;
                }
                longest = Math.max(longest,length);
            }
        }
        return longest;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        //brutforce O(n^2)

        // for(let i = 0 ; i < nums.length; i++){
        //     for(let j = i+1; j < nums.length; j++){
        //         if(nums[i] == nums[j]){
        //             return true;
        //         }  
        //     }
        // }
        // return false;



        // using sort O(nlogn)


        // nums.sort();

        // for(let i = 0 ; i < nums.length; i++){
        //     if(nums[i] == nums[i+1])
        //         return true;
        // }
        // return false;


        //set 

        let nums2 = new Set(nums);

        return nums2.size !== nums.length

    }
}

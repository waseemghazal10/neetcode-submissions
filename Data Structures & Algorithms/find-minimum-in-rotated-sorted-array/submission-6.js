class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        
        if(nums.length == 1){
            return nums[0];
        }

        let left = 0, right = nums.length - 1;


        while (left <= right){
            let mid = Math.floor((left + right) / 2);

            if(nums[0] > nums[mid]){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        if(left == nums.length)
            return nums[0]
        return nums[left];
       


    }
}

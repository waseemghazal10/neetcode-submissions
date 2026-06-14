class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let pointer1 = 0; 
        let pointer2 = heights.length - 1; //7
        let maximum = 0;

        while(pointer1 < pointer2){
            let height = Math.min(heights[pointer1], heights[pointer2]);
            let width = pointer2 - pointer1;
            let area = height * width;
            maximum = Math.max(maximum , area);
        
            if(heights[pointer1] < heights[pointer2]){
                pointer1++;
            }else pointer2--;
        
        }

        return maximum;
    }
}

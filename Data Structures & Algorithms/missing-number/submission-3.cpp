class Solution {
public:
    int missingNumber(vector<int>& nums) {
        
        int n = nums.size() + 1;
        int xorAll = 0;
        int xorNum = 0;

        for(int i = 0 ; i < n; i++){
            xorAll = xorAll ^ i;
        }

        for(int num : nums){
            xorNum = xorNum ^ num;
        }

        return xorAll ^ xorNum;
    }
};

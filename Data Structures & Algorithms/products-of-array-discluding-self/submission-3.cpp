class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {

        int prefix = 1 ;
        vector<int> result;
        int postfix = 1;

        for (int i = 0; i < nums.size(); i++){
            result.push_back(prefix);
            prefix *= nums[i];
        }

        for (int i = nums.size() - 1; i >= 0; i--){
            result[i] *= postfix;
            postfix *= nums[i];
        }

        return result;

    }
};

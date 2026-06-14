class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        
        std::unordered_set<int> numbers;

        for( int num : nums){
            if(numbers.count(num))
                return true;
            else 
                numbers.insert(num);        
        }
        return false;
    }
};

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> mySet(nums.begin() , nums.end());
        int longest = 0;
        
        for(int n : nums){
            if(mySet.find(n-1) == mySet.end()){
                int length = 0;
                while(mySet.find(n + length) != mySet.end()){
                    length++;
                }
                longest = max(length , longest);
            }
        }
        return longest;

    }
};

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> myMap;

        for(int i = 0; i < nums.size(); i++){
            int comp = target - nums[i];
            
            if(myMap.find(comp) != myMap.end()){
                return {myMap[comp] ,i};
            }

            myMap[nums[i]] = i;
        }
    }
};

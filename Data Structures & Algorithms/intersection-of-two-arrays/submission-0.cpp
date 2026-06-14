class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> s(nums1.begin() , nums1.end());
        unordered_set<int> seen;
        vector<int> result;

        for(int num : nums2){
            if(s.count(num) && !seen.count(num)){
                result.push_back(num);
                seen.insert(num);
            }
        }
        return result;
    }
};
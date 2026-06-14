class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        std::unordered_map<string,vector<string>> myMap;

        for(string& str  : strs){
            string key = str;
            sort(key.begin(),key.end());
            myMap[key].push_back(str);
        }

        vector<vector<string>> result;

        for(auto& pair : myMap){
            result.push_back(pair.second);
        }

        return result;
    }
};

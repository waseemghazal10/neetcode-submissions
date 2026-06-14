class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.size() != t.size()){
            return false;
        }

        unordered_map<char,int> myMap;

        for(char c : s){
            myMap[c]++;
        }

        for(char c : t){
            myMap[c]--;
            if(myMap[c] < 0) 
                return false;
        }

        for(const auto& pair : myMap){
            if(pair.second != 0)
                return false;
        }
        return true;
    }
};

class Solution {
public:
    bool isAnagram(string s, string t) {

        std:: unordered_map <char,int> myHashMap;

        for( char c : s){
            myHashMap[c]++;
        }

        for(char c : t){
            myHashMap[c]--;
            if(myHashMap[c] < 0)   
                return false;
        }

        for(const auto& pair : myHashMap){
            if(pair.second != 0)
                return false;
        }

        return true;
    }
};

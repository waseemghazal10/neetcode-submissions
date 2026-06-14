class Solution {
public:
    int characterReplacement(string s, int k) {
        unordered_map<char,int> myMap;

        int left = 0 , maxFreq = 0, result= 0;

        for(int right = 0; right < s.size(); right++){
            myMap[s[right]]++;
            maxFreq = max(maxFreq , myMap[s[right]]);

            while((right - left + 1) - maxFreq > k ){
                myMap[s[left]]--;
                left++;
            }
            result = max(result , (right - left + 1));
        }
        return result;
    }
};

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int left = 0;
        int maxSeq = 0;

        unordered_set<char> mySet;

        for(int right = 0; right < s.size(); right++){
            while(mySet.count(s[right])){
                mySet.erase(s[left]);
                left++;
            }
            mySet.insert(s[right]);
            maxSeq = max(maxSeq , (right - left) + 1);
        }

        return maxSeq;
    }
};

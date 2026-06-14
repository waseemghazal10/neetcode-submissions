class Solution {
public:
    bool isPalindrome(string s) {
        regex nonAlpha("[^A-Za-z0-9]");
        string result = regex_replace(s , nonAlpha , "");
        transform(result.begin(), result.end(), result.begin(),
                   [](unsigned char c){ return std::tolower(c); });

        int left = 0;
        int right = result.size() - 1;

        while (left < right){
            if(result[left] != result[right]){
                return false;
            }

            left++;
            right--;
        }
        return true;


}

};

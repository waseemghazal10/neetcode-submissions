class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        let pointer1 = 0;
        let pointer2 = s.length - 1;

        while(pointer1 < pointer2){
            if(s[pointer1] !== s[pointer2]){
                return false;
            }
            pointer1++;
            pointer2--;
        }
        return true;     
    }
}

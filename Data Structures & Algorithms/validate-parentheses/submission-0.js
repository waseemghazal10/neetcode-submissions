class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let map = {"]":"[" , "}":"{" , ")":"("};

        for(let char of s){
            if(char in map){
                if(stack && stack[stack.length - 1] == map[char]){
                    stack.pop();
                }else return false;
            }else stack.push(char);
        }
        if(stack.length == 0){
            return true;
        }else return false;
    }
}

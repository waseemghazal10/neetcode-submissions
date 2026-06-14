class Solution {
public:
    bool isValid(string s) {

       unordered_map<char,char> myMap = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };

       stack<char> myStack;

       for(char c : s){
            if(myMap.count(c)){
                if(myStack.empty()){
                    return false;
                } else{
                    char tmp = myStack.top();
                    if(tmp == myMap[c]){
                        myStack.pop();
                    }else {
                        return false;
                    }
                }
            }else{
                    myStack.push(c);
                }
        }

        if(myStack.empty()){
            return true;
        }
        else return false;
    }
};

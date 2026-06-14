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
                if(myStack.empty() || myStack.top() != myMap[c]){
                    return false;
                } 
                myStack.pop();
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

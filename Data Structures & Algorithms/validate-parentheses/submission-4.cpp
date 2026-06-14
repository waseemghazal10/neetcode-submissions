class Solution {
public:
    bool isValid(string s) {

        stack<char> myStack;

        unordered_map<char,char> myMap = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };

        for (char c : s){
            if(myMap.count(c)){
                if(myStack.empty() || myStack.top() !=myMap[c]){
                    return false;
                }
                myStack.pop();

            }else{
                myStack.push(c);
            }
        }
        return myStack.empty();
    }
};

class Solution:
    def isValid(self, s: str) -> bool:

        if len(s) % 2:
            return False

        my_map = {
            ']' : '[',
            '}' : '{',        
            ')' : '('            
        }

        my_stack = []

        for word in s:
            if word not in my_map:
                my_stack.append(word)
            else:
                if not my_stack or my_stack[-1] != my_map[word]:
                    return False
                my_stack.pop()

        return not my_stack             
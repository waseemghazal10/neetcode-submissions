class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        str_list = {}

        for word in strs:
            str_sorted = "".join(sorted(word))

            if str_sorted not in str_list:
                str_list[str_sorted] = []
            
            str_list[str_sorted].append(word)

        return list(str_list.values())
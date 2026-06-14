class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const myMap = {};

        for (let str of strs){
            let key = str.split("").sort().join("");

            if(!myMap[key]){
                myMap[key] = [];
            }
            myMap[key].push(str);
        }
        return Object.values(myMap);
    }
}

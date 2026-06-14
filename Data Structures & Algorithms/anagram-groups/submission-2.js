class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

    if (strs.length === 0 || strs.length === 1) {
        return [strs];
    }

    const map = {};

    for(let word of strs){
        let key = word.split('').sort().join('');

        if(!map[key]){
            map[key] = [];
        }
        map[key].push(word);
    }
        return Object.values(map);
}
}
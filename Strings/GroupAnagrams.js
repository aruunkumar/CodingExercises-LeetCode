/** MEDIUM
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Approach: Sort the string and store it as they key of the Map. If a word is an anagram the sorted string will be the same. 
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    let out = [];
    strs.forEach(e => {
        let sorted = e.split('').sort().join('');
        if (map.has(sorted)) {
            let val = map.get(sorted);
            val.push(e);
            map.set(sorted, val);
        } else {
            let val = [];
            val.push(e);
            map.set(sorted, val)
        }
    });
    out.push(...map.values());
    return out;

};

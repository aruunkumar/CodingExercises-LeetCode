/**
 * MEDIUM
 * Given a string s, find the length of the longest substring without repeating characters.
 * Sliding window technique
 * 
 
 */


var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    let substrArr = [];
    let res = 0;
    for ( let i = 0; i < s.length; i++) {
            let pos = substrArr.indexOf(s[i])
            if (pos == -1) {
                substrArr.push(s[i])
            } else {
                res = substrArr.length > res ? substrArr.length : res;
                substrArr = substrArr.slice(pos+1);
                substrArr.push(s[i]);
            }  
    }
    return (substrArr.length > res ? substrArr.length : res);
    
};
//Approach 2: Sliding window

var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    let map = new Map();
    let res = 0, i=0, j=0;
    while (i < s.length) {
            res = Math.max(res, i-j);
            if (map.has(s[i])) {
                j = Math.max(map.get(s[i])+1, j);
            } 
            map.set(s[i],i);
            i++;
    }
    return Math.max(res, i-j); //this is needed for small inputs that produce smaller substrings
    
};

console.log(lengthOfLongestSubstring('abcadcbb'));
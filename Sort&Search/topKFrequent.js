// Given a non-empty list of words, return the k most frequent elements.
// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, 
//then the word with the lower alphabetical order comes first.

var topKFrequent = function(words, k) {
    let res =[];
    let map = new Map();
    for (let word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1)
        } else {
            map.set(word, 1);
        };
    };
    let arr = [...map.keys()];
 //   console.log('b4 sort', arr);
    arr.sort((a,b) => map.get(b)==map.get(a) ?  (a<b ? -1 : 1) : map.get(b)-map.get(a));
//    console.log('after sort', arr);
    return arr.slice(0,k);
}
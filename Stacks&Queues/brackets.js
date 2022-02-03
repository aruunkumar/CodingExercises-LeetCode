function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maptbl = { '(':')', '{':'}', '[':']' };
    let arr =[];
    for (let i=0; i < S.length; i++) {
        if (maptbl[S[i]]) {
           arr.push(S[i]) 
        } else {
            itm = arr.pop();
            if (S[i] != maptbl[itm]) return 0 
        }
    }
    return (arr.length == 0 ? 1 : 0);
}
// Given a binary string s (a string consisting only of '0' and '1's).
// Return the number of substrings with all characters 1's.
// Since the answer may be too large, return it modulo 10^9 + 7.


var numSub = function(s) {
    let res = 0, j=0;
    let mod = 10**9+7;
    for (let i=0; i< s.length; i++) {
        if (s[i] == 0 && j > 0 ) {
            res = res + (((j+1)*j)/2);
            j = 0;
        } else if (s[i] == 1) {
            j++;
        }
    }
    if (j > 0) {
        res = res + (((j+1)*j)/2); 
    }
    return res%mod;
};


console.log(numSub("1010111001"));


// A better way to do this instead of (n+1 * n) /2

// int res = 0, length = 0;
// for (int i = 0; i < A.length; ++i) {
// 	length = (A[i] == 0 ? 0 : length + 1);
// 	res += length;
// }
// return res;
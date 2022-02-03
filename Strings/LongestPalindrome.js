
/** MEDIUM
 * Given a string s, return the longest palindromic substring in s.
 * Input: s = "babad"   Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * Approach: For each char, expand around its center to see if its a palindrome. Since we cud have odd & even numbered palindromes (ex: abba & abcba) we need to
 * try with both the center as a single char as well as center between 2 chars. 
 */


var longestPalindrome = function (s) {
    const expandFromCenter = (L, R) => {
        while (L >= 0 && R < s.length && s[L] == s[R]) {
            L--;
            R++;
        }
        return s.substring(L + 1, R);
    }

    if (s.length < 1) return "";
    let maxPal = s[0];
    for (let i = 0; i < s.length - 1; i++) {
        let pal1 = expandFromCenter(i, i);
        let pal2 = expandFromCenter(i, i + 1);
        let pal = pal1.length > pal2.length ? pal1 : pal2;
        if (maxPal.length < pal.length) maxPal = pal;
    }
    return maxPal;

};

// This doesnt work for certain scenarios
var longestPalindrome = function (s) {
    if (s.split('').reverse().join('') == s) return s;
    let maxPal = s[0];
    let j, k, pal;
    let isPal;
    for (let i = 0; i < s.length - 1; i++) {
        j = i;
        k = i + 1;
        isPal = true;
        while (isPal) {
            //          console.log('j:', j, ' k:', k);
            if (s[j] == s[k]) {
                pal = s.substring(j, k + 1);
                //             console.log('Pal:', pal);
                if (maxPal.length < pal.length) maxPal = pal;
                if (j > 0 && k < s.length - 1) {
                    j--;
                    k++;
                } else isPal = false;
            } else if (k - j == 1) {
                if (k < s.length - 1) k++;
                else isPal = false;
            } else if (s[j] == s[k - 1]) {
                pal = s.substring(j, k);
                if (maxPal.length < pal.length) maxPal = pal;
                isPal = false;
            } else {
                isPal = false;
            }
        }
    }
    return maxPal;

};
/**EASY
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. 
You should minimize the number of calls to the API.

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

 * 
 */

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (n == 1) return 1;
        let min = 1, max = n;
        while (max > min) {
            let mid = min + Math.floor((max - min) / 2);
            if (isBadVersion(mid)) {
                //              console.log(mid, 'is bad');
                max = mid;
            } else min = mid + 1;
        }
        return max;
    };
};
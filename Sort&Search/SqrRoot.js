/**EASY
 * Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 */

var mySqrt = function (x) {
    if (x <= 1) return x;
    let min = 0, max = x;
    while (min < max) {
        let mid = min + Math.floor((max - min) / 2);
        let sqr = mid * mid;
        if (sqr == x) {
            return mid;
        } else if (sqr < x) {
            min = mid + 1;
        } else max = mid;
    }
    return (x > max * max ? max : max - 1);
};
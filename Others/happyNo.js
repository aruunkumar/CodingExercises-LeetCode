// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the
//  squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which 
//  does not include 1. Those numbers for which this process ends in 1 are happy numbers.

var isHappy = function(n) {
    if (n <= 1) {
        return n ? true : false
    }
    let arr = [];
    while (n > 1) {
        let res=0;
        while (n > 0) {
            res = res + (n < 10 ? n**2 : (n % 10)**2);
            n = Math.floor(n/10);
        }   
        if (res == 1) {
            return true;
        } else if (arr.includes(res)) {
            return false;
        } else {
          n = res;
          arr.push(res);
        }
    } 
    
};

console.log(isHappy(23433));

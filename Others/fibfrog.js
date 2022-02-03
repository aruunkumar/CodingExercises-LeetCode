function isFib(n) {
    let no1 = 0, no2=1, fib = 0; 
    
    while ( fib < n) {
        fib = no1 + no2;
        no1 = no2;
        no2 = fib;
     //   console.log(no1, no2, fib);
    }
    return fib == n ? fib : no1 ;
}


function getFib(n) {
    let no1 = 0, no2=1, fib = 0; 
    let fibArr = [];
    fibArr.push(1);
    while ( fib < n) {
        fib = no1 + no2;
        fibArr.push(fib);
        no1 = no2;
        no2 = fib;
    }
    //return fib == n ? fib : no1 ;
    if (fib !=n) fibArr.pop();
    return fibArr;
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let cnt = 0;
    let dest = A.length+1;
    let fibArr =[];
    
    while (dest > 0) {
        fibArr = getFib(dest);
        console.log('fibArr', fibArr);
        if (fibArr[fibArr.length-1] == dest) {
            cnt++;
            console.log('end reached', cnt);
            break;
        } 
        for (let i = fibArr.length-1; i >=0; i--) {
            console.log('Fib Array:', i, fibArr[i]);
            if (A[fibArr[i]-1]) {
                cnt++;
                dest = A.length+1 - fibArr[i];
                A.splice(0,fibArr[i]-1);
                console.log('dest:', dest);
                break;
            } else if (i==0) return -1;
        }


    }
    
    return cnt;
    
}
console.log(solution([0, 0, 0]));
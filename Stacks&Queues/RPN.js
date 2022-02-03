// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, /. Each operand may be an integer or another expression.
// Note:
// Division between two integers should truncate toward zero.
// The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

var evalRPN = function(tokens) {
    console.log(tokens);
    if (tokens == []) return 0;
    if (tokens.length==1) return tokens[0];
    let stk =[], sum, n1, n2;
    
    for (let i of tokens) {
        if (i=="*" || i=="/" || i=="+" || i=="-") {
            n1 = stk.pop();
            console.log('Strt of loop n1:', n1, '. sum:', sum);
         //   if (sum == null) sum = stk.pop();
            console.log('n1:', n1, '. sum:', sum);
           
           n2 = stk.pop();
   
           sum = Math.trunc(eval('('+n2+')'+i+'('+n1+')'));
            stk.push(sum);
       //     console.log('After eval sum=', sum);
        } else stk.push(i);
        console.log('stack:', stk);
    }
   return sum; 
    
}

//console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
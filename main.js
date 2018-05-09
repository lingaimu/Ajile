const fibonacci = require('./lib/fibonacci')

//for(var i =1;i<20;i++)
var len =20
for(;len--;)
{
    console.log(fibonacci(len));
}
// console.log("hello world")
// var x, y, z;
// x = 5;
// y = 6;
// z = (x + y) * 10;
// console.log(z)
// prompt();

// function isLeapYear(n){
//     if(n%400 === 0){
//         return true;
//     }

//     if(n%100 === 0){
//         return false;
//     }

//     if(n%4 === 0){
//         return true;
//     }
//     return false;
// }
//     console.log("2000:"+isLeapYear(2000));
//     console.log("1900:"+isLeapYear(1900));
//     console.log("2008:"+isLeapYear(2008));
//     console.log("2009:"+isLeapYear(2009));

// function Fibonacci(n){
//     if(n === 0) return 0;
//     if(n === 1) return 1;
//     return Fibonacci(n-1) + Fibonacci(n-2);
// }
// console.log("5:"+Fibonacci(5));
// console.log("10:"+Fibonacci(10));
// console.log("3:"+Fibonacci(3));
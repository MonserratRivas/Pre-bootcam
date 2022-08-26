function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

// console.log imprimira [hello,Dojo]


function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

// console.log imprimira [hello] [
// console.log imprimira [result is 15 ]

//    Variables       Values
//     result           15


function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

// console.log imprimira [num is 3, result is 18]

//    Variables    Values
//     result        18


var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

// console.log imprimira [15,10,10,15]

//    Variable     Values
//     result      10 >20

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

// console.log imprimira [15,10,20,15]

// Variable    Values 
// num           15
// result        10 > 20

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

//console.log imprimira [num is 3,5,16]
// Variable           Values
//    y                 8 

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))

//console. log imprimira [5,8]

function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))

//console.log imprimira [2.3, 5.8]

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

//console.log imprimira (sum is 13) 
// console.log imprimira (result is 5,8)

// variable              values
// sum                    5,8 = 13
// result                (2,3) (3,5) 


function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}

var result = sumNums(2,3)


var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

// console.log imprimira (sum is 5)
// console.log imprimira (result is 19)

// variable         values
//  sum               5
//  result            19
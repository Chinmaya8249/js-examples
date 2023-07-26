// //print a stmt
// console.log("hello world");

// //print an undefined value

// let a;
// console.log(a);

// //change the value of variable

// let b = 3;
// console.log(b);
// b = 4;

// console.log(b);

// //invalid
// // Let 1a = 'hello';

// // JavaScript is case-sensitive

// let m = "hi";
// let n = 5;

// console.log(y);
// console.log(Y);

// //invalid keyword
// //let new = 5; // Error! new is a keyword.

// //Once a constant is initialized, we cannot change its value.

// const w = 5;
// w = 10;  // Error! constant cannot be changed.
// console.log(w);

// //consolelog syntax

// // console.log(message);

// // passing string
// console.log("i love js");

// // program to print variables values

// const greet = "hello";
// const name = "rahul";

// console.log(greet + ' ' + name);

// //javascript data types
// //string example

// let v = 'gopal';
// let c = 'yadav';
// let result = `the results are ${v} and ${c}`;

// //number data types

// const num1 = 3;
// console.log(num1);

// //infinity

// const num2 = 3 / 0;
// console.log(num1); //infinity

// //nan
// const num3 = 'abc' / 8;
// console.log(num3); //its showing error when we debugging in our console.

// //big int data types

// const value1 = 15468768121n;

// const result1 = value1 + 1n;
// console.log(result1);
// const value2 = 900719925124740998n;

// // Error! BigInt and number cannot be added

// const result2 = value2 + 1;
// console.log(result2);

// //javascript boolean

// const dataChecked = true;
// const valueCounted = false;

// //undefined data types

// let shoee;
// console.log(shoee); // undefined

// //also it is possible in javascript

// let f = undefined;
// console.log('f'); //undefined

// // two symbols with the same value

// const value3 = Symbol('hello');
// const value4 = Symbol('hello');

// //javascript object

// let chiku = {
//     age: 24,
//     name: 'chinmaya'

// };

// //javascript type

// // data is of undefined type
// let data;

// // data is of integer type
// data = 5;

// // data is of string type
// data = "JavaScript Programming";

// //type of 

// const name5 = 'ram';
// typeof (name5);

// const number = 4;
// typeof (number); //returns "number"

// const valueChecked = true;
// typeof (valueChecked); //returns "boolean"

// const g = null;
// typeof (a); // returns "object"

// // Arithmetic operators in JavaScript

// let x = 5;
// let y = 3;

// // addition
// console.log('x + y = ', x + y);  // 8

// // subtraction
// console.log('x - y = ', x - y);  // 2

// // multiplication
// console.log('x * y = ', x * y);  // 15

// // division
// console.log('x / y = ', x / y);  // 1.6666666666666667

// // remainder
// console.log('x % y = ', x % y);   // 2

// // increment
// console.log('++x = ', ++x); // x is now 6
// console.log('x++ = ', x++); // prints 6 and then increased to 7
// console.log('x = ', x);     // 7

// // decrement
// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // prints 6 and then decreased to 5
// console.log('x = ', x);     // 5

// //exponentiation
// console.log('x ** y =', x ** y);

// // Comparison operators in JavaScript

// // equal operator
// console.log(2 == 2); // true
// console.log(2 == '2'); // true

// // not equal operator
// console.log(3 != 2); // true
// console.log('hello' != 'Hello'); // true

// // strict equal operator
// console.log(2 === 2); // true
// console.log(2 === '2'); // false

// // strict not equal operator
// console.log(2 !== '2'); // true
// console.log(2 !== 2); // false

// //Logical Operators in JavaScript
// // logical AND
// console.log(true && true); // true
// console.log(true && false); // false

// // logical OR
// console.log(true || false); // true

// // logical NOT
// console.log(!true); // false

// //string operator in javascript

// console.log('hello' + 'world');

// let z = 'javascript';
// z += 'tutorial';
// console.log(z);

// //, operator

// //let d={6,7,7};//7 --->actually its print in the last operand
// //22-06-2023
//javascript comments
//--this is single line comment.
// var name = 'chinu';
// //printing name in the console
// console.log('hello' + name);

// /*this is multiline comments*/

// //numeric type concatinate with string

// let result;

// result = '3' + 2;
// console.log(result);

// result = '3' + true;
// console.log(result);

// result = '3' + undefined;
// console.log(result);

// result = '3' + null;
// console.log(result);

// //implicit conversion to number

// let sum;

// sum = '4' - '2';
// console.log(sum);

// sum = '4' - 2;
// console.log(sum);

// sum = '4' * 2;
// console.log(sum);

// sum = '4' / 2;
// console.log(result);

// //non numeric strings used with -,/,* results to nan

// let res = 'hello' - 'world';
// console.log(res);

// res = '4' - 'hello';
// console.log(res);

// //implicit boolean conversion to number

// // if boolean is used, true is 1, false is 0

// let resul;

// result = '4' - true;
// console.log(resul); // 3

// result = 4 + true;
// console.log(resul); // 5

// result = 4 + false;
// console.log(resul); // 4

// // null is 0 when used with number
// let resu;

// result = 4 + null;
// console.log(resu);  // 4

// result = 4 - null;
// console.log(resu);  // 4

// // Arithmetic operation of undefined with number, boolean or null gives NaN

// let rain;

// result = 4 + undefined;
// console.log(rain);  // NaN

// result = 4 - undefined;
// console.log(rain);  // NaN

// result = true + undefined;
// console.log(rain);  // NaN

// result = null + undefined;
// console.log(rain);  // NaN

// let num;

// num = number('324');
// console.log(num);

// num = number('324e-1')
// console.log(num);

// num = number(true);
// console.log(num);

// num = number(false);
// console.log(num);

// //In JavaScript, empty strings and null values return 0.
// let chinu;
// chinu = Number(null);
// console.log(chinu);  // 0

// let chiku = Number(' ')
// console.log(result);  // 0

// //If a string is an invalid number, the result will be NaN

// let sam;
// sam = Number('hello');
// console.log(result); // NaN

// sam = Number(undefined);
// console.log(result); // NaN

// sam = Number(NaN);

// //convert numeric using parseint() method

// let hari;
// hari = parseInt('20.01');
// console.log(hari);

// hari = parseFloat('23');
// console.log(hari);

// hari = +'20.01';
// console.log(hari);

// hari = Math.floor('20.01');
// console.log(hari);

// // Convert to String Explicitly

// let num2;
// num2 = String(324);
// console.log(num2);

// num2 = String(2 + 4);
// console.log(num2);

// //other data types to string
// num2 = String(null);
// console.log(num2);

// num2 = String(undefined);
// console.log(num2);

// num2 = String(NaN);
// console.log(num2); // "NaN"

// num2 = String(true);
// console.log(num2); // "true"

// num2 = String(false);
// console.log(num2); // "false"

// // using toString()
// num2 = (324).toString();
// console.log(num2); // "324"

// num2 = true.toString();
// console.log(num2); // "true"

// // Convert to Boolean Explicitly

// let nan;
// nan = Boolean('');
// console.log(nan); // false

// nan = Boolean(0);
// console.log(nan); // false

// nan = Boolean(undefined);
// console.log(nan); // false

// nan = Boolean(null);
// console.log(nan); // false

// nan = Boolean(NaN);
// console.log(nan); // false


// 23/06/2023

//comparison operator
//equal to operator

// const a = 5, b = 2, c = 'hello';

// console.log(a == 5);
// console.log(b == '2');
// console.log(c == 'hello');

// //not equal to operator

// const d = 3, e = 'hello';
// console.log(d != 2);//true
// console.log(e != 'hello');//false

// //strict equal to operator

// const f = 2;

// console.log(f === 2);//true
// console.log(f === 3);//false

// //strict not equal to operator

// let g = 2, h = 'hello';

// console.log(g !== 2);//false
// console.log(g !== '2');//true
// console.log(h !== 'hello');//true

// //greater than operator
// const i = 3;

// console.log(i > 2);//true

// //greater than or equal to operator

// const j = 3;

// console.log(j >= 3);//true

// //less than operator

// const k = 3, l = 2;

// console.log(k < 2);//true
// console.log(l > 3);//false

// //less than or equal to operator

// const m = 2;

// console.log(m >= 4);//false
// console.log(m <= 3);//true

// //logical AND operator

// const n = true, o = false;
// const p = 4;

// console.log(n && n);//true
// console.log(n && o);//false
// console.log((p > 7) && (p < 1));//false

// //logical OR operator

// console.log(n || o);//true
// console.log(o || o);//false
// console.log((p < 4) || (p > 3));//false

// //logical not operaor

// console.log(!n);//false
// console.log(!o);//true

// //if stmt

// const number = prompt('enter a number:');
// //here if no is positive then inside of if block is executed 
// if (number > 0) {
//     console.log("the number is positive");
// }

// console.log('the if stmt is easy');

// //if and else stmt

// const number1 = prompt('enter a number:');

// if (number > 0) {
//     console.log('the num is positive');
// }
// else {
//     console.log('the num is negative');
// }
// console.log("the if stmt is easy");


// //if else if stmt

// const number2 = prompt("Enter a number: ");


// // check if number is greater than 0
// if (number > 0) {
//     console.log("The number is positive");
// }
// // check if number is 0
// else if (number == 0) {
//     console.log("The number is 0");
// }
// // if number is neither greater than 0, nor zero
// else {
//     console.log("The number is negative");
// }

// console.log("The if...else if...else statement is easy");

// //nested if else stmt

// const number3 = prompt("Enter a number: ");

// if (number >= 0) {
//     if (number == 0) {
//         console.log("You entered number 0");
//     } else {
//         console.log("You entered a positive number");
//     }
// } else {
//     console.log("You entered a negative number");
// }

// //js for loop

// //display a text 5 times

// let r = 6;

// for (const s = 1; s <= r; s++) {
//     console.log('js is better than java');
// }

// //sum of n natural numbers

// let sum = 0;
// const t = 100;

// for (let u = 1; u <= t; u++) {
//     sum += u;
// }

// console.log('sum:', sum);

//26/06/2023

//Display Numbers from 1 to 5

let i = 1;
let n = 5;

while (i <= n) {
    console.log(i);
    i += 1;
}

//Sum of Positive Numbers Only

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while (number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);

// Display Numbers from 1 to 5

// program to display numbers
let j = 1;
const m = 5;

// do...while loop from 1 to 5
do {
    console.log(j);
    j++;
} while (j <= m);


// Sum of Positive Numbers


do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while (number >= 0)

console.log(`The sum is ${sum}.`);

//Infinite while Loop

const count = 1;
do {
    // body of loop
} while (count == 1)

// break with for Loop

for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}


//break with while Loop
// program to find the sum of positive numbers


while (true) {

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));

    // break condition
    if (number < 0) {
        break;
    }

    // add all positive numbers
    sum += number;

}

// display the sum
console.log(`The sum is ${sum}.`);


//break with nested

for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

//continue keyword working

//print the value of i

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
// Calculate Positive Number

while (number >= 0) {

    // add all positive numbers
    sum += number;

    // take input from the user
    number = parseInt(prompt('Enter a number: '));

    // continue condition
    if (isNaN(number)) {
        console.log('You entered a string.');
        number = 0; // the value of number is made 0 again
        continue;
    }

}

// display the sum
console.log(`The sum is ${sum}.`);

// continue with Nested Loop

for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
            continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

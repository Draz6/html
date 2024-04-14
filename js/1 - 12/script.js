
/* variables */

/* 2 . ex1 type id */
const num = 10;
const str = "Hello"
const bool = true;

console.log(typeof (num));
console.log(typeof (str));
console.log(typeof (bool));

/* 2 . ex2 compairing */
const firstVar = 42;
const secondVar = "42";
console.log(typeof (firstVar)); /*number*/
console.log(typeof (secondVar)); /*string*/

/* 2 . ex3 undefined & null */
const noValue = undefined;
const emptyValue = null;
console.log(typeof (noValue)); /*undefined*/
console.log(typeof (emptyValue)); /*object*/

/* 2 . ex4 debug */
const firstName = "Jan" /*string */
const age = 21 /*number*/
const isStudent = true  /*boolean*/

/*------------------------------------------------------------------------------------------*/


/*  3 primitive data types */


/*1*/
const myName = "draz";
/*2*/
const num1 = 5;
const num2 = 2;
console.log(num1 + num2);
/*3*/
const boolean1 = true;
/*4*/
const undefinedVar = '';
console.log(undefinedVar);
/*5*/
const nullVar = null;

/*---------------------------------------------------------------------------------------------*/

/* 4 var naming */
const parisTemperature = 12;
const isLogged = true;
const customerEmail = "cust@gmail.com"
const isFromeForm = false;
const currentScore = 32;

/*----------------------------------------------------------------------------------------*/

/* 5 string concatenation */
const studentName = "John"
const studentAge = 25;
console.log("student name :" + studentName + " age: " + studentAge);

/*2*/
const myColor = "green"
const move = "Inception"
const food = "pizza"
console.log("my fav color is: " + myColor + " I love the move: " + move + " my fav food:  " + food)

/*3*/
const a = 10;
const b = 5;
console.log("the sum of a and b is " + (a + b));

/*4*/
const currentDay = "sunday"
console.log("today is " + [currentDay]);

/*------------------------------------------------------------------------------------*/

/* 6 template literals */

const fName = "alen";
const myAge = "26";
console.log(`my name is ${fName} and my age is ${myAge}`);

/*2*/
const leng = 5;
const width = 3;
const area = leng * width;
console.log(`result is ${area}`);

/*3*/
const day = "sunday";
const task2 = "task 2"
const task3 = "task 3"
console.log(`in day ${day} I will ${task2} and ${task3} `)

/*4*/
const myPets = 2;
console.log(`I have ${myPets} pets`);

/*5*/
const base = 20;
const height = 40;
const area2 = (base * height) / 2;
console.log(`the area of triangle with base ${base} and height ${height} is ${area2}`);

/*--------------------------------------------------------------------------------------------*/

/* 7 let const var */

var numbers = 8;

/*2*/
let psdl = "pdde"

/*3*/
const cheacked = true;

/*4*/
var myNum = 1;
console.log(myNum);

myNum = 4;
console.log(myNum);

/*5*/
let myNum2 = 1;
console.log(myNum2);

myNum2 = 7;
console.log(myNum2);

/*6*/
const myNum3 = 1;
console.log(myNum3);

/*myNum3 = 7;*/
console.log(myNum3); /*error we cant reassign const */

/*--------------------------------------------------------------------------------------------------*/

/* 8 arithmetic */

const num4 = 8;
const num5 = 15;
const numResult = num4 + num5;
console.log(numResult);

/*2*/
const d = 30;
const g = 12;
const subResult = d - g;
console.log(subResult);

/*3*/
const x = 7;
const y = 3;
const multResult = x * y;
console.log(multResult);

/*4*/
const dividend = 20;
const divisor = 4;
const divResult = dividend / divisor;
console.log(divResult);

/*5*/
const number1 = 15;
const number2 = 25;
const number3 = 10;
const averageResult = (number1 + number2 + number3) / 3;
console.log(averageResult);

/*6*/
console.log(13 % 5); //result 3

/*7*/


/*--------------------------------------------------------------------------*/

/* 9 boolean expressions */

const isSunny = true;
const isWeekend = false;
console.log(isSunny && isWeekend);

/*2*/
const hisAge = 20;
const license = true;
console.log(`age is ${hisAge} has driving license ${license}`);

/*3*/
const knowsJavascript = false;
const knowsPython = true;
console.log(`he know javascript ${knowsJavascript} python ${knowsPython}`);

/*------------------------------------------------------------------------------------*/

/*10*/

//1  - 19
//2  -  9
//3  - 6
//4  - 20
//5  - 16
//6  - 14 - 20
//7  - 12.5
//8  - 8
//9  - 14
//10  - 3030  301020
//14  - 3

/*----------------------------------------------------------------------------*/

/* 11 dates times */


const theDate = new Date()
const currentYear = theDate.getFullYear()
console.log(currentYear);

/*------------------------------------------------------------------*/

// 12 conversion 
var tString = 123
tString = tString.toString()
tString = Number(tString)
Boolean(tString);




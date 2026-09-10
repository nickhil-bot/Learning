//Number --> this data represents numeric values in JavaScript
//All the numeric value in js are numbers (interger, decimal/floating)

//Examples of numbers in JavaScript
let num1 = 10;
let floatNum = 10.5;

console.log(typeof num1); // Output: "number"
console.log(typeof floatNum); // Output: "number"

//why do we use numbers in js or day
//We use number in js to perform arithmetic operations and logical operation

//in  Js --> any datatype that we have will have 2 things
//Methords  --> methord are the commands used to perform various operations on the data type
//Property  --> inhereted values or some key things

//Humans --> 
//Methord --> Operations (Walk, Run, Eat, Sleep)
//Property --> Inhereted values (Height, Weight, Age, Gender)

//CAR-->
//Methord--> Operations (Drive, Started, Speed Ratio)
//Property--> Inhereted values (Color, Model, Brand, Price)

//Note for Number Datatype-- Every operation/methord perform on number wll have a prefix attached .math. --> this is called as Math Object in JS

/*
Math.floor() -->it round down the floating number to its nearest integer (will convert floating into lowearst integer

//Example of Math.floor() in JS
let num2 = 10.5;
console.log(Math.floor(num2)); // Output: 10
*/
let num3 = 10.9;
console.log(Math.floor(num3)); // Output: 10

/*Math.ceil() --> it round up the floating number to its nearest higher integer (will convert floating into highest integer)
//Example of Math.ceil() in JS
let num4 = 10.1;
console.log(Math.ceil(num4)); // Output: 11
*/
let num5 = 10.9;
console.log(Math.ceil(num5)); // Output: 11

/*Math.round() --> it round the floating number to its nearest integer (will convert floating into nearest integer)
Condition if it is 
0.5 or above it will round up to the nearest integer
if it is below 0.5 it will round down to the nearest integer

Example of Math.round() in JS
let num6 = 10.4;
console.log(Math.round(num6)); // Output: 10
*/  
let num7 = 10.5;
console.log(Math.round(num7)); // Output: 11


/*
.toFixed() --> this formats the number to given decimal point
Example of .toFixed() in JS
let num8 = 10.12345;
console.log(num8.toFixed(2)); // Output: 10.12
*/
let num9 = 10.98765;
console.log(num9.toFixed(3)); // Output: 10.988


/*---------------------------------------------------
Importnat methords of Number Data Type in JS

.math.random() --> this generates a random number between 0 and 0.9999999999999999 (0.0 to 1.0)
Example of Math.random() in JS
let randomNum = Math.random();
console.log(randomNum); // Output: a random number between 0 and 1
*/
let randomNum1 = Math.random();
console.log(randomNum1); // Output: a random number between 0 and 1

//Why is used ? 
//why is this methord asked in interviews ?

/* 
---> its used to generate random Testdatsa for testing purpose
---> its used to generate the edge cases or non-predictable data for testing purpose
---> its used to generate random numbers for gaming purpose
---> its used to generate random numbers for security purpose
---> its used to generate random numbers for cryptography purpose
*/

//example to generate random number between 1 to 100
let randomNum2 = Math.floor(Math.random() * 100) + 1;
console.log(randomNum2); // Output: a random number between 1 and 100

//OR

console.log(Math.floor(Math.random() * 100) + 1); // Output: a random number between 1 and 100  



/*------------------------------------------------------------------------------------------------------------------------------------*/
//Q1 create a random mobile number

//Data that we get from the question -->
//assuming the phone number is indian --> digits
//indian number gets started with 6 7 8 9
//now we will split the phone numner in 2 parts
//First digits = 6, 7, 8, 9
//Remeaning =

let firstDigit = Math.floor(Math.random()*4)+6
//0-0.9999
//0-4.999
//0.4
console.log(firstDigit)
//now i have starting number
let Remaining_Numbers = Math.floor(Math.random()*1000000000)
//math.random --> 0-0.9
//if multiple by 10 --> 0-9.999
//100 - > 0-99.99
//1000-> 999.999
console.log(firstDigit,Remaining_Numbers)
//6 775510257
//6 964722464
/*----------------------------------*/


//2 Problem -genrate a program to simulate the throe of dice

//genrate a random number between 1 and 6


let dice_1 = Math.floor(Math.random()*6)+1

//0 -0.9999

//0-5.99999  -
//after round 
// 0-6 

// lowest - > 0*6 =>0
// highest -> 0.9 *6 => 5.4

// 0 -5

//1 -6

console.log(dice_1)

/*----------------------------------*/


// 3general formula to tackel math.random problem 
// genearte min between  max 
//Math.floor(Math.random()*(max-min+1)+min)
//example-->
// genrate a number between 50 - 175 
let Partical_number = Math.floor(Math.random()*(175-50+1)+50)
console.log(Partical_number)

/*----------------------------------*/


//generate random number between 2.3 and 7.5
let min = 2.3;
let max = 7.5;
let randomNum3 = Math.random() * (max - min) + min;
console.log(randomNum3); // Output: a random number between 2.3 and 7.5

//another way to generate random number between 2.3 and 7.5
let randomNum4 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum4.toFixed(1)); // Output: a random number between 2.3 and 7.5 (rounded to 1 decimal place)


//gentate a number between 0 - 100 but it should be in a progessive
let progressiveNum = Math.floor(Math.random() * 21)*5; // output: a random number between 0 and 100 in progressive (0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)
console.log(progressiveNum); // Output: a random number between 0 and 100 in progressive (0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)



//6 genrate a random adhar number (12 digit) in js
let randomAadhar = Math.floor(Math.random() * 900000000000) + 100000000000; // output: a random 12 digit number
console.log(randomAadhar); // Output: a random 12 digit number

//another way to generate a random 12 digit number
let randomAadhar2 = Math.floor(Math.random() * 900000000000) + 100000000000;
console.log(randomAadhar2); 


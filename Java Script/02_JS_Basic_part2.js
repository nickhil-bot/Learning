//Quality code improve

//Rules for writing quality code
//Rule 1 --> variable name should not start with a numner or syombol

//Example
//Valid -> let num_1 = 1
//invalid -> let 1num = 1
//invalid -> let %num = 1

//Rule 2 --> variable name should not contain letters, number, underscore and dollar sign
//Example
//Valid -> let num1 = 1
//invalid -> let ~_num = 1
//invalid -> let num one = 1

//Rule 3 --> Variables are case sensitive
//note --> JS is case sensitive language so variable name should be written in camelCase

let myVariable = 1;
let myvariable = 2; //this is invalid because variable name is case sensitive

console.log(myVariable); //print the value of myVariable variable
console.log(myvariable); //print the value of myvariable variable

//Rule 4 --> variable name cannot be a reserved keyword of JS
//Example
//let var = 1; //this is invalid because var is a reserved keyword of JS

//Bonus Rule --> 
/* 
1.always your variable name shouuld give a hint / should ne related to the variable value and always declare in it
2.camelCase --> firstLetterLowercaseThenUpperCase
*/



//how to declare multiple variables in single line
let a = 1, b = 2, c = 3;
console.log(a, b, c);
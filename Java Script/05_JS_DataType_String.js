//STRING --> String is a sequence of charasters wrapped in either (" "), (' '), (* *)

//Example

let ex_sre_1 = "123456789" //String
let ex_sre_2 = "          " //String
let ex_sre_3 = 'true' //String
let ex_sre_4 = '1234@#$%2342390(4234@#$@)cgfgfdg' //String

console.log(typeof ex_sre_1)
console.log(typeof ex_sre_2)
console.log(typeof ex_sre_3)
console.log(typeof ex_sre_4)


//every data type has 

/* 
*Methord--> to perform opration/action
*Property --> length(size string)

syntax to check length

*strigname.lenth 

*/

console.log(ex_sre_1.length)
console.log(ex_sre_2.length)
console.log(ex_sre_3.length)
console.log(ex_sre_4.length)

// In string the charcters are stored in indexes 

/*
 *              0123 
 * let string = name 
 * 
 */

let str_1 = "name"

console.log(str_1.length) //4

// HOW TO GET/PRINT  ANY SINGLE  CHARACTER  IN STRING

console.log(str_1[0])  // n
console.log(str_1[3]) // e

// string last index +1 == length 

//NOTE :-> IN JS WHEREVER THE CHARCATER STORE BY INDEX WE CAN USE THIS EQUATION 

// LASTELEMENT IS ALWAYS LENGTH -1

let str_2 = "qwertyuiolkjhgfdsxcvbnm,74126985ertyuiokjhgvf"

console.log(str_2.length)

console.log(str_2[str_2.length-1])


// STRING CONCATENETION -> (JOINING OF 2 or more STRING) 
// combiming or adding two or more string together to create a new string  it is called string CONCATENETION

let firstName = "siddhant"
let middleName = "Arjun"
let lastName = "Gadakh"

// there are 2 way 

// first way use (+) operator--> old way 


let fullName = firstName+middleName+lastName
let fullName_1 = firstName+" "+middleName+" "+lastName
console.log(fullName)
console.log(fullName_1)

// ES6 template literal 

// THIS METHOD IS ONLY POSSIBLE IF YOU DELACRE A STRING WITH BACKTICKS

let fullName_backtick = `my fullname is ' ${firstName} ${middleName} ${lastName} '`
console.log(fullName_backtick)

//------------------------------------------------------------------------------


//**** Note *******
//String are immutable in JS

/* 
* It means once a string is created, the character in it cannot be changes or modified
* it any methord that seems to modify a tring actually, returms a new string of chainhing the orignal 
*/

//Example--> 1 toUpperCase90 --> this methord will convert your string to uppercase (latters/Alphabates)

let Meth_str_1 = "Hello i am BAtman"
console.log (Meth_str_1.toUpperCase())
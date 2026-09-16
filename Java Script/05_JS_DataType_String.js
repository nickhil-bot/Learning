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
console.log (Meth_str_1.toUpperCase()) //output-->HELLO I AM BATMAN
console.log (Meth_str_1) // because the orignal string is not changes 
//So it is called as immutable

//Example 2--> toLowerCase --> this methord will convert your string in to lower case
let Meth_str_2 = "HELLO I AM BATMAN"
console.log(Meth_str_2.toLowerCase()) //output-->hello i am batman




// String contaction --> joining two string

//Example

let methord_concat = "HELLO I AM LEARNING STRING METHORD IN JS"

// NOTE : - 
// THIS WILL ONLY WORK WHEN THE OUTPUT OF FIRST METHOD IS A VALID INPUT TO SECOND METHOD 

// EXAMPLE 
// console.log(method_concat.toUpperCase().length.toLowerCase().toUpperCase().toLowerCase())

// here error occures beacuse the output of  method_concat.toUpperCase().length is a number  
// which is not a valid input toLowerCase()


// 3. trim() --> this is used to remove the blank space form start and end of string 
let method_Trim = " HELLO I AM LEARNING STRING METHOD IN JS "
console.log(method_Trim)
console.log(method_Trim.length)

console.log(method_Trim.trim())
console.log(method_Trim.trim().length)

// 4 trimStart() -> this is used to remove the blank space form start 

let method_TrimSTART = " HELLO I AM LEARNING STRING METHOD IN JS"
console.log(method_TrimSTART)
console.log(method_TrimSTART.length)

console.log(method_TrimSTART.trimStart())
console.log(method_TrimSTART.trimStart().length)

// 5 trimEnd() ->this is used to remove the blank space form the end of string 

let method_TrimEnd = "HELLO I AM LEARNING STRING METHOD IN JS "
console.log(method_TrimEnd)
console.log(method_TrimEnd.length)

console.log(method_TrimEnd.trimEnd())
console.log(method_TrimEnd.trimEnd().length)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//Note -->
/*
*Every methord that we use has 
1.Action      ---> the action expected to perform
2.Return type ---> the datatype of that output
*/

//Substr()   -> this method is used to get a part of the given string
// substr syntax -> 
// str.Substr("starting index", number of character)

// example 

let dummy_str_1 = "hello this string is used to show substr and substring"

// substr example 

let hello_str = dummy_str_1.substr(0,5)
console.log(hello_str)



//Substring()-> this method is used to get a part of the given string  ( this pefered )
//substring sytanx 
// str.subString("starting index","ending index") // this will not show the ending index in the output 

// example 

let hello_dummy = dummy_str_1.substring(0,4) 
console.log(hello_dummy) //hell // beacuse this doesnt include ending index 


//split() -> the method is used to convert a string into array 
//        -> this is used to convert a single string into multiple string 

//syntax -> in this 
//(the value at which you need seprate)
let single_char_string = dummy_str_1.split("")
let sapce_char_string = dummy_str_1.split(' ')
let is_char_sep = dummy_str_1.split('and')


console.log(single_char_string)

console.log(sapce_char_string)
console.log(is_char_sep)
/**
 * [
  'h', 'e', 'l', 'l', 'o', ' ', 't', 'h',
  'i', 's', ' ', 's', 't', 'r', 'i', 'n',
  'g', ' ', 'i', 's', ' ', 'u', 's', 'e',
  'd', ' ', 't', 'o', ' ', 's', 'h', 'o',
  'w', ' ', 's', 'u', 'b', 's', 't', 'r',
  ' ', 'a', 'n', 'd', ' ', 's', 'u', 'b',
  's', 't', 'r', 'i', 'n', 'g'
]



[
  'hello',  'this',
  'string', 'is',
  'used',   'to',
  'show',   'substr',
  'and',    'substring'
]

[ 'hello th', ' string ', ' used to show substr and substring' ]

[ 'hello this string is used to show substr ', ' substring' ]
 */


//inculdes() -> this method is used to check wehater a string contains a particular substring or not  // this case sentive method 
// the output/ retrun type -> boolean 


let into_str = "hello is my name is siddhant"

console.log(into_str.includes("siddhant")) //true
console.log(into_str.includes("sidddhant"))  //false
console.log(into_str.includes("Siddhant")) //false 


// replace() -> this method is used to replace character in string
//syntax
// stringname.replace("charctcer to be replaced","word to replace with")

//example

let basic_str = " hello i am leanrning javascript and javascript is a very intersting lang"

let py_str = basic_str.replace("javascript","python") //hello i am leanrning python and javascript is a very intersting lang

console.log(py_str)

// replaceAll() --> this method is used to replace all the instances of the character in string
//syntax
// stringname.replace("charctcer to be replaced","word to replace with")

let py_str2 = basic_str.replaceAll("javascript","java")

console.log(py_str2) // hello i am leanrning java and java is a very intersting lang




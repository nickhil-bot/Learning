//Data Types in JavaScript

/*
in JS there are 2 types of data types
1. Primitive data types -> data types which are simple in nature and are non changeable(immutable)
2. Non-primitive data types -> data types which are complex in nature and are changeable(mutable)
*/

//Primitive data types
/* 
1. Number -> represents numeric values
2. String -> represents a sequence of characters
3. Boolean -> represents a logical value (true or false)
4. Undefined -> represents a variable that has been declared but not assigned a value
5. Null -> represents the intentional absence of any object value
*/

//Non-primitive data types
/*
1. Object -> represents a collection of key-value pairs
2. Array -> represents a collection of values
*/

//how to check the data type of a variable in JS
let num = 10;
console.log(typeof num); // Output: "number"

let str = "Hello, World!";
console.log(typeof str); // Output: "string"

let isTrue = true;
console.log(typeof isTrue); // Output: "boolean"

let unde;
console.log(typeof unde); // Output: "undefined"

let n = null;
console.log(typeof n); // Output: "object"  

//you will use a operator called "typeof" to check the data type of a variable in JS

let token
console.log(typeof token); // Output: "undefined" because token is not assigned any value


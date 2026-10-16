//Array--> Array is a non-primitive data which is to store multiple values in a single variable. It is a collection of elements which can be of any data type.
//1.how to determine if the data type of a variable is an array or not
/*
1.How to deteminr if the data type of a variable is an array or not?
-->an array is always define by using square brackets [] 

2.How to know the value are separated or not?
-->the elements of an array are separated by commas.

3.what are the data types stored in an array? 
-->An array can store any data type like numbers, strings, booleans, objects, and even other arrays.
 */

let arr1 = [1, 2, 3];
let arr2 = ["apple", "banana", "cherry"];
let arr3 = [];
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray(arr2)); // true
console.log(Array.isArray(arr3)); // true

console.log(arr1); // Output: [1, 2, 3]
console.log(arr2); // Output: ["apple", "banana", "cherry"]
console.log(arr3); // Output: []

//another example of array
let variable_a = 10
let variable_b = 10

let array1 = [10]
let array2 = [10]
console.log(variable_a == variable_b); // Output: true because both variables have the same value
console.log(variable_a === variable_b); // Output: true because both variables have the same value and data type
console.log(array1 == array2); // Output: false because both arrays are different objects in memory, even though they have the same value
console.log(array1 === array2); // Output: false because both arrays are different objects in memory, even though they have the same value and data type

//Note- the two non-primitive data types are equal .
/*
why this happens?
-->because in JS, when you compare two non-primitive data types (like arrays or objects), 
it checks for reference equality, not value equality. 
This means that even if two arrays have the same elements, .
they are considered different if they are stored in different memory locations.
*/

// in js == is used to compare the values of two variables, while === is used to compare both the values and the data types of two variables.



//Array --> every data will have properties and methods.
/*
1.Array has property called as length (which is used to get the number of elements in an array.)
2.array has vast number of methods (which are used to perform various operations on an array like adding, removing, sorting, filtering, and transforming elements in an array.)
3.the value in array are stored in index (based manner, which means the first element of an array is stored at index 0, the second element is stored at index 1, and so on.)
index-->            1    2    3        4        5    6       7
let Exam_array= [ "max", 2, 654654, "hello", true, null, undefined ]
*/

//Basic operations on arrays
let Exam_array= [ "max", 2, 654654, "hello", true, null, undefined ]
//1. Retrieving elements from an array
console.log(Exam_array[0]); // Output: "max"
console.log(Exam_array[3]); // Output: "hello"

//2. Modifying or updating elements in an array
Exam_array[0] = "John";
console.log(Exam_array[0]); // Output: "John"   

//3. Adding elements to an array
//this will cover in methords
Exam_array.push("new element");
console.log(Exam_array); // Output: ["John", 2, 654654, "hello", true, null, undefined, "new element"]

//4. Deleting elements from an array
delete Exam_array[1];
console.log(Exam_array); // Output: ["John", empty, 654654, "hello", true, null, undefined, "new element"]




//------------------------------------------------------------------------------------//

//Methods of array

//when we use any methord we get 2 things
//1. output --> result of action performed by the method (if the method performs an action)
//2. Return type --> the data type of recieved output (if the method returns a value)

let fruits = ["apple", "banana", "cherry", "date", "elderberry"]

// Addation of array elements

//1. push() method --> adds one or more elements to the end of an array and returns the new length of the array.
//syntax--> array.push(element1, element2, ..., elementN)
let newLength = fruits.push("fig", "grape")// Output: 7
console.log(fruits);// Output: ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"]

//or

fruits.push("kiwi", "lemon")
console.log(fruits) //o
// Output: ["apple", "banana", "cherry", "date", "elderberry", "kiwi", "lemon"]
//retutrn type --> array 


//2. unshift() method -->  this methord will add a element ar the start of an array and returns the new length of the array.
//syntax--> array.unshift(element1, element2, ..., elementN)
let newLength2 = fruits.unshift("mango", "nectarine")
console.log(fruits)
// Output: ["mango", "nectarine", "apple", "banana", "cherry", "date", "elderberry", "kiwi", "lemon"]
//retutrn type --> array , why array because it will return the new length of the array which is a number in this case.

//or

fruits.unshift("orange", "papaya")
console.log(fruits)
// Output: ["orange", "papaya", "mango", "nectarine", "apple", "banana", "cherry", "date", "elderberry", "kiwi", "lemon"]
//retutrn type --> array, why array because it will return the new length of the array which is a number in this case.

//3. pop() method --> removes the last element from an array and returns that element. This method changes the length of the array.
//syntax--> array.pop()
let lastElement = fruits.pop()
console.log(lastElement) // Output: "lemon"
console.log(fruits) // Output: ["mango", "nectarine", "apple", "banana", "cherry", "date", "elderberry", "kiwi"]
//retutrn type --> string

//OR

fruits.pop()
console.log(fruits)
// Output: ["orange", "papaya", "mango", "nectarine", "apple", "banana", "cherry", "date", "elderberry", "kiwi"]
//retutrn type --> string, why string because it will return the last element of the array which is a string in this case.

//4 METHOD -> shift() ->  this removes the element form the start.

//syntax ->arrayName.shift()

Method_array_1.shift()

console.log(Method_array_1)
//output -> [ 'siddhant', 'arjun', 'gadakh', 27 ]
//return type -> array 

const fruits1 = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Kiwi", "Papaya"];

//slice(starting index , ending index) -> but it will not consider ending index  

let arr_slice = fruits_1.slice(0, 3) //[ 'Apple', 'Banana', 'Mango' ]

console.log(arr_slice)

// splice(starting index , number character)


const fruits_1 = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Kiwi", "Papaya"];


let splice_arr = fruits_1.splice(0, 5)

console.log(splice_arr) //[ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ]



// sort -> this method will sort the array alphabatically 

const mixedArray = [10, "Hello", 25, "Apple", 42, "World"];

console.log(mixedArray.sort())


// if we want numbers 

const numbers = [
    123456789,
    987654321,
    1234567890,
    0,
    9876543210,
    1234567890123,
    999999999999999];

// to sort numbers use this 

let small_large =numbers.sort((a,b)=>{return a-b}) // small to large


console.log(small_large)

// reverse() - this is used to revserse your array
console.log(small_large.reverse()) 

// resverse is an array method 


// question - > revsere the given string 

let str_q = " hello my name is ....."

console.log(str_q.split("").reverse().join("")) //..... si eman ym olleh 


// join() -> this method is used to convert your array into string 


console.log(fruits.join(" --> "))

console.log(fruits.join(" "))


// inculdes() -> this will check if the element is present in the array or not 

console.log(fruits.includes("Mango"))
console.log(fruits.includes("mango"))


// concat -> this method is used to join two or more arrays 

let a = [ 1,2,3]
let b = [4,5,6]
let c = [7,8,9]

let combine_array = a.concat(b,c)
console.log(combine_array) 

let rev_combine= c.concat(b,a)
console.log(rev_combine)


//flat() -->this is used to fallten the array 
// if in a single there are mutiple array you want to combine them in a single array use flat

const arr = [1, 2, [3, 4], [5, 6]];

console.log(arr.flat()) //[ 1, 2, 3, 4, 5, 6 ]


// how to find the max and min value od array 

const number_a = [
  42, 17, 89, 3, 56,
  91, 24, 68, 12, 75,
  34, 100, 7, 63, 48
];


let sorted_array1 = number_a.sort((a,b)=>{return a-b})
console.log(number_a)

console.log(sorted_array1[0]) // smallest
console.log(sorted_array1[sorted_array1.length-1]) // largest element 
console.log(sorted_array1[sorted_array1.length-2]) // second largest  element


// max
console.log(Math.max(...number_a)) //100


// min 

console.log(Math.min(...number_a)) //3


/// WAY 1 -> sort and pick the first / last element
// NOTE -> sort() modifies number_a itself, so after sorting BOTH variables are the SAME array

let sorted_array = number_a.sort((a, b) => { return a - b })
console.log(sorted_array === number_a)   // true -> same array ( sorted in place )
console.log(number_a)                    // also sorted -> the original array is changed

console.log(sorted_array[0])                             // 3   -> smallest
console.log(sorted_array[sorted_array.length - 1])       // 100 -> largest
console.log(sorted_array[sorted_array.length - 2])       // 91  -> second largest

// if you do NOT want to change the original array -> first make a COPY with slice()
// let sorted_copy = number_a.slice().sort((a, b) => a - b)

// WAY 2 -> Math.max() / Math.min() with the SPREAD operator ( ... )
// spread ( ... ) expands the array into individual values -> Math.max(42, 17, 89, 3 ... )

console.log(Math.max(...number_a))   // 100
console.log(Math.min(...number_a))   // 3

// ============================================================
// SECTION 14 -> LOOPS ON AN ARRAY
// ============================================================

// example 1 -> for the given array add 2 in every element and make a new array named added_2

const array_add = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const added_2 = []

for (let i = 0; i < array_add.length; i++) {
  added_2.push(array_add[i] + 2)
}

console.log(added_2)
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// example 2 -> make every element uppercase and store it in a new array

const str_array = ["apple", "banana", "hello", "cat", "orange", "js", "mango", "dog"];
const Upper_ar = []

for (let i = 0; i < str_array.length; i++) {
  Upper_ar.push(str_array[i].toUpperCase())
}

console.log(Upper_ar)
// [ 'APPLE', 'BANANA', 'HELLO', 'CAT', 'ORANGE', 'JS', 'MANGO', 'DOG' ]

// example 3 -> for...of loop -> gives only the VALUE of every element ( simpler syntax )
//              use the normal for loop when you also need the INDEX

for (const el of str_array) {
  console.log(el.toUpperCase())
}

// NOTE -> both the above tasks can be done in ONE LINE with map() -> next section


// ============================================================
// SECTION 15 -> HIGHER ORDER ARRAY METHODS
// ============================================================

/**
 * HIGHER ORDER METHOD -> a method which ACCEPTS a function ( callback ) as an argument
 *
 * CALLBACK FUNCTION -> the function we pass INTO another function,
 *                      which that method calls for every element
 *
 * almost every array method gives the callback 3 values
 *      el    -> the current element
 *      index -> the index of the current element
 *      arr   -> the array itself
 *
 * ( we do not need to use all 3 -> write only the parameters you need )
 *
 * map() / filter() / reduce() / forEach() / every() / some()
 */

// --------------------------------------------------------------
// 1 map() -> perform an action on EVERY element and RETURN A NEW ARRAY ( same length )
// -------------------------------------------------------------- //

/**
 * syntax -> const newArray = name_array.map((el, index, arr) => { return code })
 */

const added_by_2 = array_add.map((el, index, arr) => { return el + 2 })

console.log(added_by_2)
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
// ORIGINAL array_add is unchanged

const new_str_ar = str_array.map((el, index, arr) => { return el.toUpperCase() })

console.log(new_str_ar)
// [ 'APPLE', 'BANANA', 'HELLO', 'CAT', 'ORANGE', 'JS', 'MANGO', 'DOG' ]

// --------------------------------------------------------------
// 2 filter() -> keep only the elements that satisfy the condition -> returns a NEW ARRAY
// -------------------------------------------------------------- //

/**
 * syntax -> const newArray = name_array.filter((el, index, arr) => { return condition })
 *
 * the condition must return true / false -> only the elements where it is true are kept
 * the length of the new array can be smaller ( or even 0 ) -> unlike map()
 */

const array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// WITHOUT filter ( the long way )
// question -> filter the elements above 5 and add them in a new array called above_5

let above_5 = []
for (let i = 0; i < array_num.length; i++) {
  if (array_num[i] > 5) {
    above_5.push(array_num[i])
  }
}
console.log(above_5)   // [ 6, 7, 8, 9, 10 ]

// split the even and odd numbers with a loop

let even_arr = []
let odd_arr = []

for (let i = 0; i < array_num.length; i++) {
  if (array_num[i] % 2 == 0) {
    even_arr.push(array_num[i])
  }
  else {
    odd_arr.push(array_num[i])
  }
}
console.log(even_arr)  // [ 2, 4, 6, 8, 10 ]
console.log(odd_arr)   // [ 1, 3, 5, 7, 9 ]

// WITH filter ( the short way )

let above_5_ar = array_num.filter((el, index, arr) => { return el > 5 })
console.log(above_5_ar)   // [ 6, 7, 8, 9, 10 ]

let even_only = array_num.filter((el) => { return el % 2 == 0 })
console.log(even_only)    // [ 2, 4, 6, 8, 10 ]

// --------------------------------------------------------------
// 3 forEach() -> iterate over every element to PERFORM AN ACTION -> returns undefined
// -------------------------------------------------------------- //

/**
 * syntax -> name_array.forEach((el, index, arr) => { code })
 *
 * -> like a loop, it runs the function for every element
 * -> it does NOT return a new array -> use map() / filter() when you need a NEW ARRAY
 */

// loop example ( the long way ) -> print every string in uppercase

for (let i = 0; i < str_array.length; i++) {
  console.log(str_array[i].toUpperCase())
}

/*
APPLE
BANANA
HELLO
CAT
ORANGE
JS
MANGO
DOG
*/

// forEach example ( the short way )

str_array.forEach((el, index, arr) => { console.log(el.toUpperCase()) })

/* the same output as above is printed */

// --------------------------------------------------------------
// 4 every() & some() -> CHECKING methods -> both return a BOOLEAN ( true / false )
// -------------------------------------------------------------- //

// every() -> like AND ( && ) -> true only when ALL elements pass the condition

let every_5 = array_num.every((el, index, arr) => {
  return el > 5
})

console.log(every_5)   // false -> because 1, 2, 3, 4, 5 are NOT above 5

console.log(array_num.every((el) => el > 0))   // true -> ALL elements are greater than 0

// some() -> like OR ( || ) -> true when AT LEAST ONE element passes the condition

let some_5 = array_num.some((el, index, arr) => {
  return el > 5
})

console.log(some_5)    // true -> 6, 7, 8, 9, 10 are above 5

console.log(array_num.some((el) => el > 100))  // false -> NO element is above 100

// --------------------------------------------------------------
// 5 reduce() -> REDUCE the whole array into ONE single value
// -------------------------------------------------------------- //

// example -> get the sum of all the elements ( without reduce -> the long way )

let sum = 0    // accumulator -> it keeps the running total
for (let i = 0; i < array_num.length; i++) {
  sum = sum + array_num[i]
  // sum += array_num[i]
}

console.log(sum)   // 55

/*
 * SYNTAX OF reduce()
 *
 * let result = array.reduce((accumulator, el, index, arr) => {
 *     return code
 * }, initialValue)
 *
 * accumulator ( acc ) -> carries the result from the previous turn
 * initialValue        -> the starting value of the accumulator ( 0 for a sum )
 * the callback runs once for every element and finally reduce() returns the accumulator
 */

let sum_10 = array_num.reduce((acc, el, index, arr) => { return acc + el }, 0)

console.log(sum_10)   // 55

// reduce() is NOT only for sum -> the return type can be ANY datatype
// the value depends on what we build inside the accumulator

// example -> find the largest number with reduce()

let max_reduce = array_num.reduce((acc, el) => { return acc > el ? acc : el }, -Infinity)

console.log(max_reduce)   // 10

// ============================================================
// SECTION 16 -> WHEN TO USE WHICH METHOD ? ( QUICK REVISION )
// ============================================================

/**
 * I NEED ...                                             USE ...
 * -----------------------------------------------------------------------------
 * a new array where every element is CHANGED            map()
 * a new array where only SOME elements are kept         filter()
 * to just do an action ( print / update )               forEach()  ( or a normal loop )
 * one single value from the whole array                 reduce()   ( sum / max / count ... )
 * a yes / no answer about ALL elements                  every()
 * a yes / no answer about ANY element                   some()
 * to find ONE element / its index by a condition        find() / findIndex()
 * to check the presence of a value                      includes() / indexOf()
 * to add / remove from the ends                         push / pop / shift / unshift
 * to copy a part of an array                            slice()   ( safe )
 * to remove / insert in the middle                      splice()  ( modifies )
 * to join arrays / flatten nested arrays                concat() / flat()
 * array -> string / string -> array                     join() / split()
 *
 * METHOD                          RETURNS                    MODIFIES ORIGINAL ?
 * -----------------------------------------------------------------------------
 * push / unshift                  NEW LENGTH ( number )      YES
 * pop / shift                     REMOVED ELEMENT ( value )  YES
 * sort / reverse                  THE SAME array             YES
 * splice                          ARRAY of removed elements  YES
 * slice / concat / map / filter   NEW ARRAY                  NO
 * join / includes / indexOf / at  value ( string / number )  NO
 * forEach                         undefined                  NO
 * reduce                          accumulator ( any type )   NO
 * every / some                    boolean                    NO
 */
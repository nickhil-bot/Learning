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

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Kiwi", "Papaya"];

//slice(starting index , ending index) -> but it will not consider ending index  

let arr_slice = fruits.slice(0, 3) //[ 'Apple', 'Banana', 'Mango' ]

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


let sorted_array = number_a.sort((a,b)=>{return a-b})
console.log(number_a)

console.log(sorted_array[0]) // smallest
console.log(sorted_array[sorted_array.length-1]) // largest element 
console.log(sorted_array[sorted_array.length-2]) // second largest  element


// max
console.log(Math.max(...number_a)) //100


// min 

console.log(Math.min(...number_a)) //3


//---------------------------------------------ADVANCE METHODS -------------------------------------
// LOOPS IN ARRAY 

/**
 * map()
 * filter()
 * reduce()
 * forEach()
 * every()
 * some()
 */
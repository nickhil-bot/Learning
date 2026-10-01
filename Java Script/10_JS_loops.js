//loops --> this arw thw syntax or program used to perform repatative action
//note--> in interview the logically this will be asked to you that how many types of loops are there in js

// there are 2 types of loops in js

// 1. for loop
// 2. while loop

// 1. for loop

//syntax of for loop
// for(initialization; condition; increment/decrement){ 
//     //code to be executed
// }

//example of for loop increment
for(let i=1; i<=10; i++){
    console.log(i)
}

//example of for loop decrement
for(let i=10; i>=1; i--){
    console.log(i)
}

//Print each character on new line
let name_str = "hello i am in space"
for(let i=0; i<name_str.length; i++){
    console.log(name_str[i])
}


//solve the following problem using for loop
/*
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
*/
let num = 2
for(let i=1; i<=10; i++){
    console.log(`${num} x ${i} = ${num*i}`)
}


//another example of for loop find the number of words in a string
let str = "hello i am in space"//here we are using for loop to iterate through each character of the string and check if it is a space or not. If it is a space, we increment the count variable by 1. Finally, we print the total number of words in the string.
let count = 1 //here we are initializing the count variable to 1 because there is at least one word in the string.
for(let i=0; i<str.length; i++){ //here we are using for loop to iterate through each character of the string and check if it is a space or not. If it is a space, we increment the count variable by 1. Finally, we print the total number of words in the string.
    if(str[i] == " "){ //here we are checking if the character is a space or not
        count++ //here we are incrementing the count variable by 1 if the character is a space
    }  
} console.log(`Number of words in the string is: ${count}`) //here we are printing the total number of words in the string
 

//another find the number of vowels in a string
let str1 = "hello i am in space" //here we are using for loop to iterate through each character of the string and check if it is a vowel or not. If it is a vowel, we increment the count variable by 1. Finally, we print the total number of vowels in the string.
let count1 = 0 //here we are initializing the count variable to 0 because there are no vowels in the string initially.
for(let i=0; i<str1.length; i++){ //here we are using for loop to iterate through each character of the string and check if it is a vowel or not. If it is a vowel, we increment the count variable by 1. Finally, we print the total number of vowels in the string.
    if(str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u"){ //here we are checking if the character is a vowel or not
        count1++ //here we are incrementing the count variable by 1 if the character is a vowel
    }
}
console.log(`Number of vowels in the string is: ${count1}`) //here we are printing the total number of vowels in the string
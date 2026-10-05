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
console.log('string length is: ', str1.length) //here we are printing the length of the string
console.log(`Number of vowels in the string is: ${count1}`) //here we are printing the total number of vowels in the string
console.log(`Number of consonants in the string is: ${str1.length - count1}`) //here we are printing the total number of consonants in the string by subtracting the number of vowels from the length of the string


//complex problem using for loop
//pritnt this patten
//444
//333
//22
//1
let n = 4
for(let i=n; i>=1; i--){ //here we are using for loop to iterate through each number from n to 1 and print the number of times it is repeated
    let str2 = "" //here we are initializing the str variable to an empty string because we want to print the number of times it is repeated    
    for(let j=1; j<=i; j++){ //here we are using for loop to iterate through each number from 1 to i and print the number of times it is repeated
        str2 += i //here we are concatenating the number to the str variable
    }
    console.log(str2) //here we are printing the str variable
}

//same using method
let n1 = 4
for(let i=n1; i>=1; i--){ //here we are using for loop to iterate through each number from n to 1 and print the number of times it is repeated
    console.log(String(i).repeat(i)) //here we are using the repeat method to print the number of times it is repeated
}

//LET REPEAT THE ABOVE PATTERN 
//1111
//222
//33
//2

let n2 = 4
for(let i=1; i<=n2; i++){ //here we are using for loop to iterate through each number from 1 to n and print the number of times it is repeated
    console.log(String(i).repeat(n2-i+1)) //here we are using the repeat method to print the number of times it is repeated
}

//same using without method
let n3 = 4
for(let i=1; i<=n3; i++){ //here we are using for loop to iterate through each number from 1 to n and print the number of times it is repeated
    let str3 = "" //here we are initializing the str variable to an empty string because we want to print the number of times it is repeated    
    for(let j=1; j<=n3-i+1; j++){ //here we are using for loop to iterate through each number from 1 to n-i+1 and print the number of times it is repeated
        str3 += i //here we are concatenating the number to the str variable
    }
    console.log(str3) //here we are printing the str variable
}

//---------------------------------------------------------------------------------


//While loop-->
//syntax of while loop
// while(condition){
//     //code to be executed
// }

let i = 0
while(i<=10){ //here we are using while loop to iterate through each number from 0 to 9 and print the number
    console.log(i) //here we are printing the number
    i++ //here we are incrementing the number by 1
}

//keywords --> there are some keywords which are used in loops to control the flow of the loop
// 1. break --> it is used to exit the loop
// 2. continue --> it is used to skip the current iteration and move to the next iteration

//break example-->
for(let i=0; i<=10; i++){ //here we are using for loop to iterate through each number from 0 to 10 and print the number
    console.log(i) //if the number is equal to 5, we will exit the loop using break keyword
    if(i==5){ //here we are checking if the number is equal to 5 or not
        break //here we are using break to exit the loop if the number is equal to 5
    }
    console.log(i) //if the number is not equal to 5, we will print the number
}

//continue example-->
for(let i=0; i<=10; i++){ //here we are using for loop to iterate through each number from 0 to 10 and print the number
    if(i==5){ //here we are checking if the number is equal to 5 or not
        continue //here we are using continue to skip the current iteration and move to the next iteration if the number is equal to 5
    }
    console.log(i) //if the number is not equal to 5, we will print the number
}

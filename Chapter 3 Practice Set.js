// Q1. Write a program to print the marks of a student in an object using for loop.

let mark = {
    Vipul : 99,
    Vishal : 100,
    shiva : 83,
    Rashi : 66,
    Khushboo : 78
}

for(let i = 0; i < Object.keys(mark).length; i++){
    console.log("The Marks Of " + Object.keys(mark)[i] + " are " + mark[Object.keys(mark)[i]])
}

// Q2. Write the program in Q1 using for in loop.
console.log("===============================================================================")

for(let i in mark){
    console.log("The marks of " + i + " are " + mark[i])
}

// Q3. WAP to print "Try Again" untill the user enter the correct number.
console.log("===============================================================================")

// const prompt = require('prompt-sync')();

// let cn = 332
// let i
// while(i != cn){
//     i = prompt("Enter 3 digit number to guess correct number... : ")
//     console.log("Try Again!!")
// }
// console.log("You Have Entered A Correct Number.......")


// Q4. Write a fuction to find mean of 5 numbers.
console.log("===============================================================================")

const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}
console.log(mean(3,5,2,6,10))
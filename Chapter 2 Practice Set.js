// Q1 - Use logical operators to find whether the age of a person lies between 10 to 20.

const prompt = require('prompt-sync')(); // terminal input ke liye
let a = prompt("Enter Your Age : ");
console.log("You Entered = ", a);

if (a > 0 && a <= 100){
    if (a >= 10 && a <= 20){
        console.log("You Are Lies Between 10 To 20");
    }
    else{
        console.log("You Are Not Lies Between 10 To 20");
    }
}
else{
    console.log("Invalid Age!!!");
}
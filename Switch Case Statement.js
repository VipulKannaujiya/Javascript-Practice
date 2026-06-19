const prompt = require('prompt-sync')();
let age = Number(prompt("What is your age: "));

switch(age){
    case 11:
        console.log("You are 11 year old.");
        console.log("You are not eligible for vote");
        break;
    case 12:
        console.log("You are 12 year old.");
        console.log("You are not eligible for vote");
        break;
    case 13:
        console.log("You are 13 year old.");
        console.log("You are not eligible for vote");
        break;
    case 14:
        console.log("You are 14 year old.");
        console.log("You are not eligible for vote");
        break;
    case 15:
        console.log("You are 15 year old.");
        console.log("You are not eligible for vote");
        break;
    case 16:
        console.log("You are 16 year old.");
        console.log("You are not eligible for vote");
        break;
    case 17:
        console.log("You are 17 year old.");
        console.log("You are not eligible for vote");
        break;
    case 18:
        console.log("You are 18 year old.");
        console.log("You are eligible for vote");
        break;
    case 19:
        console.log("You are 19 year old.");
        console.log("You are eligible for vote");
        break;
    case 20:
        console.log("You are 20 year old.");
        console.log("You are eligible for vote");
        break;
    default:
        console.log("your age is not special..");
}
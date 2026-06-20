const prompt = require('prompt-sync')()
let age =  prompt("Enter Your Age : ")

if (age > 0 && age < 18){
    console.log("You Are Not Eligible For Driving!!!")
}
else if (age >= 18 && age <= 100){
    console.log("You Are Eligible For Driving......")
}
else{
    console.log("You Enter Invalid Age......")
}
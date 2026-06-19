function div(n){
    if((n % 2 == 0) && (n % 3 == 0)){
        console.log("Your Number Is Divisible By 2 Or 3")
    }
    else{
        console.log("Your Number Is Not Divisible By 2 Or 3")
    }
}

const prompt = require('prompt-sync')()
let n = prompt("Enter A Number To Check Divisible By 2 or 3 : ")
div(n)



// ----------------------------------- FOLLOW MY GITHUB PROFILE TO STAY UPDATED---------------------------------------------
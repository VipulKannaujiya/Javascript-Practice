// NORMAL FOR LOOP SYNTAX
for(i=1; i<=21; i++){
    console.log(i, "Thank you, Universe")
    console.log("Money Is Coming....")
}
// FOR IN LOOP SYNTAX
let obj = {
    Vipul : 90,
    Vishal : 83,
    Rahul : 38,
    Roshan : 88,
    Shiva : 72
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}
// FOR OF LOOP SYNTAX

for(let a of "Vipul"){
    console.log(a)
}

//WHILE LOOP IN JS
const prompt = require('prompt-sync')()
let n = Number(prompt("Enter a Number : "))
i = 0
while(n > i){
    console.log(i)
    i++
}
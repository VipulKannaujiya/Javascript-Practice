// =================================================== LOOPS IN JAVASCRIPT ===================================================

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
let n = 5
i = 0
while(n > i){
    console.log(i)
    i++
}

// DO WHILE LOOP IN JS

i = 0
n = 5
do{
    console.log("Vipul Kannaujiya")
    i++
}
while(i < n)


// =================================================== FUNCTIONS IN JAVASCRIPT ===================================================

// FUNCTION DECLARATION SYNTAX
function greet() {
    console.log("Hello, Universe!")
}

// FUNCTION EXPRESSION SYNTAX
let greet2 = function() {
    console.log("Hello, Universe!")
}

// ARROW FUNCTION SYNTAX
let greet3 = () => {
    console.log("Hello, Universe!")
}
// Q1 : Create a variable of type string and try to add a number to it.

// var a = "vipul";
// var b = 786;
// console.log(a)
// console.log(b)
// console.log(a+b)


let a = "vipul";
let b = 573;
console.log(a)
console.log(b)
console.log(a+b)

// Q2 : use typeof operators to finds thr datatype of the string in last question.

console.log(typeof(a+b))

// Q3 : Create a const object in javascript can you change it to hold a number later?

const x = {
    name : "Vipul Kannaujya",
    Section : 1,
    isPrincipal : false
}
// x = "Rahul" - this is not valid because x is const variable.
console.log(x)

// Q4 : Try to add a new key to the const object in problem 3 were you able to do it?

const y = {
    name : "Vipul Kannaujya",
    Section : 1,
    isPrincipal : false
}
y['Age'] = 20; // we can add new key in any const reference like const y
console.log(y)

// Q5 : Write a js program to create a word-meaning dictionary of 5 words.

const dictionary = {
    instance : "an occurrence of something",
    coast : "the shore of a sea or ocean",
    earnest : "characterized by a firm, sincere belief in one's opinions",
    wander : "move or cause to move in a sinuous or circular course",
    insist : "be emphatic or resolute and refuse to budge"
}
console.log(dictionary)
console.log(dictionary.insist)

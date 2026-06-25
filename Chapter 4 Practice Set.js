// Q1. what will the following print in js.

console.log("her\"".length)

// Q2. WAP to conver a given string to lowercase.

let name = "VIPUL"
console.log(name.toLowerCase(name))

// Q3. Extract the amount out of this string.
//      Please give Rs. 1000

let sen = "Please give Rs. 1000"
console.log("Amount is", sen.slice(16))

// Q4. Try to change 4th character of a given string, were you able to do it?

let l = "Deepika"
l[3] = "r"
console.log(l) // l is not changed, because string is immutable.
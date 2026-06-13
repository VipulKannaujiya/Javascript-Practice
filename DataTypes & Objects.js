// nn bb ss u
// n - null
// n - number
// b- boolean
// b - BigInt
// s - String
// s - Symbol
// u - Undefined

let a = null;
let b = 345;
let c = true; // or false
let d = BigInt("567") + BigInt("3");
let e = "Vipul";
let f = Symbol("I am a nice symbol..");
let g = undefined;

console.log(a,b,c,d,e,f,g);

console.log(typeof c); // kisi bhi variable ka dayatype pata karne liye.

// Objects in JS

const item = {
    "Vipul" : true,
    "Vishal" : 23,
    "Roshan" : false,
    "Varsha" : undefined
}
console.log(item);
console.log(item["Varsha"]);
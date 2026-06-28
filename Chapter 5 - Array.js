// Array are variavles which can hold more than one value..

const fruit = ["banana", "apple", "grapes"]
const a1 = [7, "Vipul", "false"]

// Accessing values

console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])

console.log(a1[1])

// finding the length

console.log(fruit.length) // 3

// changing the values

console.log(fruit)
fruit[2] = "orange"
console.log(fruit)

// check the type of variable 

console.log(typeof(fruit))
console.log(typeof(a1))

// Array Methods
// 1.
let n = [1, 7, 9]
console.log(n)
console.log(typeof(n))
let a = n.toString()
console.log(a)
console.log(typeof(a))

// 2.

let b = n.join("-")
console.log(b)

// 3.

console.log(n)
let c = n.pop()
console.log(c, "popped")
console.log(n)

// 4.
console.log("--------------------")
console.log(n)
let d = n.push(8,9)
console.log(n)

// 5. 

console.log("shift") // removes first element and returns it.
let e = n.shift()
console.log(e)
console.log(n)

// 6.

console.log("unshift") // adds element to the beginning returns new array length.
let f = n.unshift(4)
console.log(f)
console.log(n)

// 7. 

console.log("delete") // array element can be deleted using the delete operator.
console.log(n)
let g = delete n[1]
console.log(n)

// 8.

console.log("concatnate")
let a0 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
let a4 = a0.concat(a2,a3)
console.log(a4)

// print the value of array using loop

let array = [1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<array.length; i++){
    console.log(array[i])
}
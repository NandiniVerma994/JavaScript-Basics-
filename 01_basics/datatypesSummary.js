// Primitive(call by value-> changes are done in the copy)

// 7 types: String, Number, Boolean, null, undefined, Symbol(kisi v value ko unique bnane ke liye), BigInt



//Javascript is a dynamically typed language. This means that variable types are determined at runtime and you do not need to explicitly 
// declare the type of a variable before using it.
// const score = 33
// const score = "nan"
// both are right

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)


const bigNumber = 3385039450701205n

//non primitive me original value me change hoti
//Reference(Non primitive)   -> the type is object mostly

// Array, objects, functions


// Array
const heroes = ["shaktiman", "nagraj", "doga"];
//objects
let myObj = {
    name: "nandini",
    age: 19
}
//functions
const myFunction = function() {
    console.log("Hello");
}
console.log(typeof myFunction)
console.log(typeof bigNumber)
console.log(typeof heroes)
console.log(typeof id)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshChoudhary"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nandini@google.com"

console.log(userOne.email)
console.log(userTwo.email)

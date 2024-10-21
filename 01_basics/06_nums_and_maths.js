// const score = 400
// console.log(score)
// //defining object Number
// const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// //after decimal
// console.log(balance.toFixed(2))

// const otherNumber = 23.8966
// //number of figures given (returns string)
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))


// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
//returns value between 0 to 1
console.log(Math.random())
console.log((Math.random()*10) + 1)//+1 to avoid cases like 0.011324  bexause hme values chahiye 
//jo 1 se upr ho

const min = 10;
const max = 20
//(max - min + 1) -> iss range me 
//+ min means 10 se upr hi 
console.log(Math.floor(Math.random() * (max - min + 1) + min))

/*(max - min + 1):

max - min + 1 is the range of numbers you want to generate. Here, max = 20 and min = 10, so:
max - min + 1 = 20 - 10 + 1 = 11.
This means the range of possible values is 11 (i.e., from 10 to 20).
Math.random() * (max - min + 1):

This multiplies the random number (between 0 and 1) by the range (11), giving a random number
 between 0 and 11 (exclusive).
Adding min (+ min):

Adding min (10) shifts the random number up, ensuring that it falls between 10 and 21 (exclusive). But because Math.random() can 
never be 1, it ensures the result is between 10 and 20 (inclusive).
Math.floor():

This function rounds the number down to the nearest whole integer. So the final result will be an integer between 10 and 20 (inclusive).
Example flow:
Let's assume Math.random() returns 0.45.
Multiply 0.45 * (max - min + 1) = 0.45 * 11 = 4.95.
Add min: 4.95 + 10 = 14.95*/

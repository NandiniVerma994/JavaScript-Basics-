let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let score2 = null

console.log(typeof score2)//object
console.log(typeof(score2))

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)//number
console.log(valueInNumber2)//0

let score3= undefined

console.log(typeof score3)//undefined
console.log(typeof(score3))

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)//NaN

let score4 = true

console.log(typeof score4)
console.log(typeof(score4))

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=> true; 0=>false
// "" => false
// "hitesh" => true

// ****************************** Operations  ******************************

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " nandini"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "3")

console.log(true)
console.log(+true)
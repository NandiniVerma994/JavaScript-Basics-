function sayMyName() {
    console.log("N")
    console.log("A")
    console.log("N")
    console.log("D")
    console.log("I")
    console.log("N")
    console.log("I")
}

sayMyName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

const result = addTwoNumbers(3, 5)

console.log("Result:", result)//this will give undefined


function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
}

const result2 = addTwoNumbers(3, 5)

console.log("Result:", result2)


function loginUserMessage(username = "sam") {
    if(username === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("nandini"))
console.log(loginUserMessage())

//... is rest operator here not spread
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 600))

const user = {
    username: "nandini",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

handleObject({
    username: "sam",
    price: 399
})
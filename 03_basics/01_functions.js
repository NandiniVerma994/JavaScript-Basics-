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

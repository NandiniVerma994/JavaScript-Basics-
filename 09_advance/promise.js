// Promises and async/await are ways to handle asynchronous operations,

// 1. Promises
// A Promise represents an operation that hasn't completed yet but is expected to in the future. It can be in one of three states:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// Handling Promises
// You can handle the result of a Promise using .then() and .catch():

// .then() is called when the promise is fulfilled.
// .catch() is called when the promise is rejected.

// Async/Await
// async/await is syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain.

// async: Declares a function as asynchronous. The function returns a Promise implicitly.
// await: Pauses the execution of the function until the Promise is resolved or rejected.


//handler type h not function like object type h jo arguements leta
//The executor function inside the Promise (the one with resolve and reject) is called immediately when you create the Promise object.
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete')
        resolve()//resolve and then is connected
    },1000)
})
// Calls resolve(), which marks the promise as fulfilled.
// After the Promise is Resolved:
// The .then() block is executed
promiseOne.then(function() {
    console.log("Promise consumed")
}) 


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function() {
    console.log("Async 2 resolved")
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
//the username is the value which is returned by the prvioous then 
//the finally block will be executed in all cases
.then((username) => {
    console.log(username);
}). catch(function(error) {
    console.log(error);
}). finally(() => console.log("The promise is either resolved or rejected"))


// Line 1: The Promise promiseFive is created, and the setTimeout starts (with a 1-second delay).
// Line 13: consumePromiseFive() is called.
// Line 7: Inside consumePromiseFive(), the code pauses at await promiseFive while waiting for the promise to resolve or reject.
// 1 second later: The setTimeout finishes, and reject('Error: JS went wrong') is called (since error is true).
// Line 10: The rejected promise throws an error, and the control jumps to the catch block.
// Line 11: The error is logged: Error: JS went wrong.
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch(error) {
        console.log(error)
    } 
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

//read promise.all



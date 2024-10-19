// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function() {
//         console.log("Got user details from database")
//         console.log(`Username: ${this.username}`)
//         console.log(this)
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails())




// function User(username, loginCount, isLoggedIn) {
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// // Calling User without new: When you call User("hitesh", 12, true), the function is invoked normally, without creating a new object. 
// //Instead of returning a new instance of User, the function just executes and returns this. In non-strict mode, this inside a normal function refers to the global object (window in browsers, or global in Node.js). As a result:
// // userOne and userTwo are both referencing the global object.
// // When you modify this.username, this.loginCount, and this.isLoggedIn, you're modifying the global object's properties.
// const userOne = User("hitesh", 12, true)
// //the below function will overwrite everything so this is a demerit
// const userTwo = User("Chai aur Code", 11, false)
// console.log(userOne.constructor)



function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}
//new keyword creates a new instance of the object 
const userOne = new User("hitesh", 12, true)
const userTwo = new User("Chai aur code", 11, false)
console.log(userOne)
console.log(userTwo)




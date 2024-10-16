// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Nandini",
    age : 20,
    [mySym] : "mykey1",
    "full name" : "Nandini Verma",
    location : "bbsr",
    email : "dev.nand@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
// //cant access full name using dot
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//but like this the data type changes from symbol to string, for using
// //it as a symbol use within square brackets above

// JsUser.email = "nandin@chatgpt.com"
// Object.freeze(JsUser)//now  no changes will be done bcz it has been freezed
// JsUser.email = "nandini@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS User")
}

JsUser.greetingtwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())



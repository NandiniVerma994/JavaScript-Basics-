const user = {
    username: "nandini",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)//gives current context
    }
}

user.welcomeMessage()
user.username = "sam"//here context changes so with this the current context is taken into account
user.welcomeMessage()
console.log(this)//nthing outside prints empty because its in the node environment

//this cannot be used in a function
function chai() {
    let username = "nandini"
    console.log(this.username)//gives {}
}

chai()

//+++++++++++++++++Arrow+++++++++++++
//with curly braces use return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => ({username: "nand"})
console.log(addTwo(3, 4))


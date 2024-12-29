const user = {
    username: "nandini",
    price: 999,
    console.log(username)
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)//gives current context
    }
}
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//The Object.create() method in JavaScript creates a new object, using an existing object
// (in this case, User)
const tea = Object.create(User)
console.log(tea.email);
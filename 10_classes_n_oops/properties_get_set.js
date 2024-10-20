function User(email, password){
    this._email = email;
    this._password = password

    // Object.defineProperty() is used to define or modify a property on an object.
    //  This method gives you control over how a property behaves, allowing you to set 
    //  specific characteristics like whether it's writable, enumerable, or configurable.
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);
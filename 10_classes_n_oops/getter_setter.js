class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // getter rhega toh setter v den pdega
    // uske baad getter setter me aur constructor me race lg jaati  so underscore lgate h to differentiate
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
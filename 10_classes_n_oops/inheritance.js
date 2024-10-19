class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{//extends keyword allows teacher to inherit all properties of user
    constructor(username, email, password) {
        super(username)//call ho jayega constructor
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("Chai", "chai@teacher.come", "123")

chai.addCourse()

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);
function SetUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    //this call ka current execution context kisi dusri function ko pass kr deta
    SetUsername.call(this, username)//call hoga without using call keyword v pr usko context nhi pta kis
    // username me so this pass krte

    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@fb.com", "123")
console.log(chai)
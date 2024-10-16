const accountId = 144453
let accountEmail = "nandi@google.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed
accountEmail = "dev@gmail.com"
accountPassword = "123445"
accountCity = "Bangalore"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
if(2 == '2') {
    console.log("Executed")
}//so we use ===

//############################  Switch   ############################

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    default:
        console.log("Default case")
        break;
}


const userEmail = ""

if(userEmail) {
    console.log("Got user email")
}
else {
    console.log("Dont have user email")
}
const userEmail2 = []

if(userEmail2) {
    console.log("Got user email")
}
else {
    console.log("Dont have user email")
}


//Falsy values 

//false , 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values

// "0", 'false', " ", [], {}, functino(){}

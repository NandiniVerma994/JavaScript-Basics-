
let a = 300
//{curly braces when used with object its called object declaration but when used with if
// else or function its called scope}
if(true) {
    let a = 10
    const b = 20
    var c = 30//so we need to avoid var as it can be accessed outside the scope
    console.log(a)
}

console.log(a)
// console.log(b)
console.log(c)


function one() {
    const username = "nandini"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)

    two()
}

one()

//other ways of declaring function

const addTwo = function(num) {
    return num + 2
}
//In the case of function expressions (like const addTwo = function() {...}), only the
// variable name (addTwo) is hoisted to the top, but it is initialized to undefined until the assignment occurs. The function itself is not hoisted.
addTwo(5)//but if this is given before the declaration it will give error

//Function declarations are fully hoisted. This means that the entire function is available
// throughout the scope, regardless of where it is defined.
console.log(addone(5))

function addone(num) {
    return num + 1
}
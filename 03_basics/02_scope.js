
let a = 300
//{curly braces when used with object its called object declaration but when used with if else or function its called scope}
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

addTwo(5)//but if this is given before the declaration it will give error

console.log(addone(5))

function addone(num) {
    return num + 1
}
// let myHeroes = ["thor", "spiderman"]



// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function() {
//         console.log(`Spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.hitesh = function() {
//     console.log(`hitesh is present in all objects`)
// }


// heroPower.hitesh()//sv chize object se hoti hui jaati h jaise functions, arrays, strings so agr object ka prototype me koi v property add 
// //hui toh wo array, strings aur functions sb me hoga qki wo object se hote hue jayega but agr array me koi property add hua toh wo object
// //me nhi jayega
// myHeroes.hitesh()//array ke v paas access h object ki




let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`)
}


Array.prototype.heyhitesh = function() {
    console.log(`Hitesh says hello`)
}


heroPower.hitesh()
myHeroes.hitesh()
myHeroes.heyhitesh()
//the below line gives error
//heroPower.heyhitesh()


// const User = {
//     name: "chai", 
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: True
// }

// const TeachingSupport = {
//     isAvailable: false
// }
// //do objects ko link krne ke liye phle prototype use krte the
// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     //TASupport will have all properties of teaching support
//     __proto__: TeachingSupport
// }
// //teacher v user ki saari propety access kr skta h
// Teacher.__proto__ = User

// //modern syntax
// //teachingsupport ko de do saari property teacher ki
// Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "
//string ke andr ek property define kro trulength phir wo acess kr payega
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()//here anotherusername is calling
"hitesh".trueLength()//hitesh is caaling trulenthg
"iceTea".trueLength()//here ice tea is calling
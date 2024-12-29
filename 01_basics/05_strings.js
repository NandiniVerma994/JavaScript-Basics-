const name = "nandini"
const repoCount = 10

//console.log(name + repoCount + " Value")

//String Interpolation
console.log(`Hello my name is ${name} and  my repo count is ${repoCount}`)

const gameName = new String('hitesh-hc')
//Strings are key value pairs
console.log(gameName[0])
console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// //to know  characters at a given position
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));

// //startIndex and endIndex (excluding the last one)
const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

// const newStringOne = "    hitesh   "
// console.log(newStringOne)
// console.log(newStringOne.trim())


// const url = "https://hitesh.com/hitesh%20choundhary"
// //first argument takes what needs to be replaced second one takes with what
// console.log(url.replace('%20', '-'))
// //is it present
// console.log(url.includes('hites'))
// //first argument takes seperator and second one takes limit
// console.log(gameName.split('-'))//returns array





/* Prototype as a Blueprint:
a prototype is often described as a blueprint because it serves as the foundational template 
from which new objects can inherit properties and methods.

A prototype is essentially a blueprint for objects. When you create an object or a function, it 
automatically gets a prototype, which allows the object to access shared properties or methods.
This means objects can share functionality, rather than each object having its own copy of methods,
 which saves memory.
Prototype Chain:

In JavaScript, objects are linked together through a prototype chain.
If you try to access a property or method on an object and it doesn't exist on that object, 
JavaScript will look for it in the object's prototype. If it's not there, it will check the 
prototype's prototype, and so on, all the way up the chain until it reaches Object.prototype
(the base prototype for all objects).
If the property or method isn't found anywhere in the chain, JavaScript returns undefined.
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

let john = new Person('John');
john.sayHello(); // "Hello, my name is John"
john is an object that inherits the sayHello method from Person.prototype. */
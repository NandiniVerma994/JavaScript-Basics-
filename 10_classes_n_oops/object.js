function multipleBy5(num) {
    return num*5
}

// In JavaScript, functions are "first-class citizens," meaning they are treated like objects. This allows you to 
// assign properties
//  directly to functions, just like you would with objects.
// You are adding a custom property power to the multipleBy5 function and assigning it the value 2. Now, 
//multipleBy5 is a function that
//  also has an additional property power.
multipleBy5.power = 2

console.log(multipleBy5(5))
//This accesses the power property of the multipleBy5 function, which was set to 2. So the output is:
console.log(multipleBy5.power)
// The prototype object is useful when you want to add methods or properties to instances created by the function.
console.log(multipleBy5.prototype)
// Prototype Property of Functions: Every function (except arrow functions) has a prototype property. This property is an object
//  that is used to set the __proto__ of the objects created when the function is used as a constructor (i.e., when you do new 
// multipleBy5()).
// The Default Value of prototype: If you haven't added anything to multipleBy5.prototype, it will just be a plain object with a
//  constructor property. By default, it looks like this:
// {
//   constructor: multipleBy5
// }


function createUser(username, score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function() {
    this.score++
}


createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("Chai", 25)
const tea = createUser("tea", 250)

// chai was created using the new keyword, so it became an instance of createUser and inherited the methods from createUser.prototype.
// tea was not created with new, so it doesn't reference an object, and it doesn't have access to the prototype methods.
chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
 This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created
 object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object,
  to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value
 (object, array, function, etc.), the newly created object is returned.

*/
Non Primitive like arrays, objects, and functions me original values me change aata

slice and splice->after splicing the original array get spliced and the last range is also inclusive

push krne se wo pura array ek entity ke tarah push ho jaata aur concat ya phir spread krne se array 
ka elements alag alag hokr jaata

accessing keys of objects
object.keys(objectName)

whenever functions are initialised to any variable name then it cant be called before its declaration 
but when functions are just used using function name(parameter) then it can be called before its declaration


this keyword is not used in a function, only used in objects

Ways of declaring function
function function_name(parameter)
using initialisers
const func = function(parameter) {

}
using arrow
const funct = (parameter) => {
    operation
}


//first bracket used for function definition second for functioncall
IIFE->
(function definiton)();


Iterations
Map and arrays
for(const i of arr)
for(const [key,val] of map)//objects are not iterated like this
Objects
for(const key in obj)


coding.forEach(function (val) {
    console.log(val)
})
coding.forEach( (item) => {
    console.log(item)
})
myNum.filter( (num) => num>4)
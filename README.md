# JavaScript-Basics-
Primitive type uses stack memory(copy me changes)
Non primitive type uses heap memory(reference me changes)

# Ways of declaring functions:
1st
function chai() {
  console.log("123")
}
2nd
const chai = function() {
  console.log("123")
}
3rd
const chai = (num1) {
  console.log(num1)
}
4th
(function chai() {
  console.log("123")
})();

# To access array or map elements 
for (const num of arr)

# To access objects
for (const key in myobj) 
will only be able to access keys 
myobj[key] -> values are accessed
if you apply in for accessing array elements you will get the key which is index

# Slice and splice
slice does not include the last index splice includes the last index .
slice makes changes in the copy while splice makes changes in the original array

# Filter and for each
filter returns a value and has a condition while for each does neither of this

# Refer this for DOM
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model


Nodelist is not an array so avoid using map with this instead use for each 
HTML collection is also not an array , it also does not provide the functionality of for each so we first need to  convert this to array

while creating a textarea in js innertext overwrites the value so we prefer creating textnode

Eventlistener  me jo v function rhega wo by default event ka hi hota( e is the event like mouse click and e.target is the 
target from where that event happens)

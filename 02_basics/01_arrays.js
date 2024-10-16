const myArr = [0, 1, 2, 3]

console.log(myArr[0])
//Shallo cpy -> creates copy
//deep copy -> makes changes in the original

const myArr2 = new Array(1, 2, 3)

//Array methods

myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)
//9 array ka beginning me add ho jayega
myArr.unshift(9)
console.log(myArr)
//begining se element hta dega shift
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))
//join binds the array and in addition it converts to string
const newArr = myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice, spice
console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)// 3 is inclusive
console.log("C", myArr)//removes the part permanently 
console.log(myn2);
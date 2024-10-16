const name = "nandini"
const repoCount = 10

//console.log(name + repoCount + " Value")

//String Interpolation
console.log(`Hello my name is ${name} and  my repo count is ${repoCount}`)

const gameName = new String('hitesh-hc')
//Strings are key value pairs
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
//to know  characters at a given position
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

//startIndex and endIndex (excluding the last one)
const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "    hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://hitesh.com/hitesh%20choundhary"
//first argument takes what needs to be replaced second one takes with what
console.log(url.replace('%20', '-'))
//is it present
console.log(url.includes('hites'))
//first argument takes seperator and second one takes limit
console.log(gameName.split('-'))//returns array
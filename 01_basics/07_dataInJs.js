let myDate = new Date() //This creates a Date object representing the current date and time.
console.log(myDate.toString())
console.log(myDate.toLocaleString())
//month indexing starts from 0
let myCreatedDate = new Date(2024, 4, 9)
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date(2024, 4, 9, 5, 3)
console.log(myCreatedDate2.toString())

let myTimeStamp = Date.now()//This gives the current time in milliseconds since January 1, 1970
console.log(myTimeStamp)
//gives time in milliseconds
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
//starts from 0
console.log(newDate.getMonth()+ 1)//to print exact month
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
})
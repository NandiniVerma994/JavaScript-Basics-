let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
//month indexing starts from 0
let myCreatedDate = new Date(2024, 4, 9)
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date(2024, 4, 9, 5, 3)
console.log(myCreatedDate2.toString())

let myTimeStamp = Date.now()
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
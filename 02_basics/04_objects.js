//singleton
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
console.log(tinderUser)

//non singleton
const tinderUser2 = {}
console.log(tinderUser2)

const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Nandini",
            lastName: "Verma"
        }
    }
}
//accessing the object
console.log(regularUser.fullName)
//accessing object ka object
console.log(regularUser.fullName.userfullname.firstName)

//combining objects
const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3)

//{} -> this is target rest all are sources 
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)
//spreading
const obj5 = {...obj1, ...obj2}
console.log(obj5)

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
]

console.log(users[1].email)

console.log(tinderUser)
//output values ka datatype arrays me return hoga
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
//course.courseInstructor is long to access so we can do it using 

const {courseInstructor} = course
console.log(courseInstructor)
//2nd way
const {courseInstructor: instructor} = course
console.log(instructor)

//json
// {
//     "name": "nandini",
//     "coursename": "js in hindi"
// }

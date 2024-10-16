const coding = ["js", "ruby", "java", "python", "cpp"]
//call back h so iska naam nhi hota, array ke andr chl rha so wo khud parameter me array ki value
//lekr aayega
//here val is a type of iterator
coding.forEach(function (val) {
    console.log(val)
})
//herre item is iterator (using arrow)
coding.forEach( (item) => {
    console.log(item)
})

function printMe(item) {
    console.log(item)
}
//sirf reference dena h function ka execute nhi krwana() ye dekr
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
//array ke andr object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})
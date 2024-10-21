// const coding = ["js", "ruby", "java", "python", "cpp"]
// //for each does not return anythin
// const values = coding.forEach( (item) => {
//     console.log(item)
//         return item
// })
// console.log(values)


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //filter return krta h value ko 
// //filter ke andr ek call back function milega jiske andr hrr ek value ko access kiya jayega, uske baad ek
// condition dena pdega
// const newNums = myNum.filter( (num) => num > 4)
// console.log(newNums)

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNum.filter( (num) => {
    return num > 4//jb v curly braces lgana means scope bna diye h toh iske andr return keyword likhna pdega agr wo nhi likhogi toh empty
    //array return hoga
} )
console.log(newNums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks)
userBooks = books.filter( (bk) => {return bk.publish >= 2000})//scope open kiye h
console.log(userBooks)
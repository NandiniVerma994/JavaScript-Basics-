const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//using map direct value return hoti
// const newNums = myNumers.map( (num) => num+10)//agr scope open krenge toh undefined milega so 
//return ka use kro
// console.log(newNums)

const newNums = myNumers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(newNums)



// map = transform items 🔄

// filter = pick some ✅

// reduce = combine to one 
// reduce() is a built-in array method that combines (or “reduces”) all elements of an array into a single value.

// for each = does not return anythign
const myNums = [1, 2, 3]
//acc means accumulator
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0) // here 0 is the initial value
// console.log(myTotal)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal)

// acc → accumulator (starts at 0, the initial value)
// current → each item in the array
// First call: acc = 0, current = 1 → returns 1
// Second call: acc = 1, current = 2 → returns 3
// Third call: acc = 3, current = 3 → returns 6
// Fourth call: acc = 6, current = 4 → returns 10

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
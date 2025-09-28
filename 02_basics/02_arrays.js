const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
//arrays ke andr arrays de rha dc_heroes ko ek single entity ke jaisa treat kr rha
marvel_heroes.push(dc_heroes)

console.log(marvel_heroes)
console.log(marvel_heroes[3][1])

//concat pure array ko ek entity treat nhi krta
const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

//spread kr dega saari values ko
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)//all values will spread out
console.log(real_another_array)

//checks if it is aray
console.log(Array.isArray("Nandini"))
//converts in array
console.log(Array.from("Nandini"))
//returns empty bcz we need to specify whether we need to convert the key to array or value to array
console.log(Array.from({name: "Nandini"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))



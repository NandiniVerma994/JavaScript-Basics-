const map = new Map()
//prints unique value only and in order
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map)
//map will not be iterable using for in as it is not iterable
for (const [key, value] of map) {
    console.log(key, ':-', value)
}

const myObject = {
    game1: 'NFS',
    game2: 'SpiderMan'
}
//objects  are not iterable like this (only maps are)
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }   
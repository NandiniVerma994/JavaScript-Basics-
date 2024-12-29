//Nullish Coalescing Operator (??) : null , undefined
//assigns a non-null value and if its null then checks and assigns accordingly (last case)
let val1
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 10
val1 = null ?? 10 ?? 20


console.log(val1)



// Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")
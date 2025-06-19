//Nullish Coalescing Operator (??) : null , undefined
//assigns a non-null value and if its null then checks and assigns accordingly (last case)
// It returns the first value that is NOT null or undefined.
// It ignores falsy values like 0, false, or "" (unlike ||)
console.log(null ?? 10);         // 10  → null is nullish
console.log(undefined ?? 20);    // 20  → undefined is nullish
console.log(false ?? 30);        // false → false is NOT nullish
console.log(0 ?? 40);            // 0 → 0 is NOT nullish
console.log("" ?? 50);           // "" → empty string is NOT nullish

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
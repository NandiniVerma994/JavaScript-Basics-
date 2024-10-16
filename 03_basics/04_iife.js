// Immediately Invoked Function Expression

// function chai() {
//     console.log(`DB conencted`)
// }

// chai()



//first bracket used for function definition second for functioncall
(function chai() {
    //named iife
    console.log(`DB conencted`)
})();//semicolon required


(function aurchai() {
    console.log(`DB conencted`)
})();//semicolon required

((name) => {
    console.log(`DB connected ${name}`)
})('nandini')
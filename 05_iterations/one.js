for (let i = 0; i < 10; i++) {
    const element = i;
    if(i == 5) {
        break
    }
    console.log(element)
}

let index = 0
while(index <= 10) {
    console.log(`Value of index is ${index}`)
    index = index + 2
}

let score = 11

do {
    console.log(`Score is ${score}`)
    score++
} while(score <= 10);
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}
//only key is accessible(using in)
for (const key in myObject) {
    console.log(key)
}


for (const key in myObject) {
    console.log(myObject[key])
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py"]
for (const key in programming) {
    console.log(key)
}
for (const key in programming) {
    console.log(programming[key])
}


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);//not writable

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));//name ki property not chai ki same as pi ki property not math ki

//defining property yourself
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//object cant be accessed just anyhow 
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {//agr function nhi h toh 
        
        console.log(`${key} : ${value}`);
    }
}
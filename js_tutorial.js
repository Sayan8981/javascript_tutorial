//"use strict";
const ps = require("prompt-sync");
const prompt = ps({ sigint: true })

console.log('Hello World');
let nameperson = 'petr pan';
console.log(nameperson);

// let food = Number(prompt("How much is the food?"));
// let tippercentage = Number(prompt("tip % ?")) / 100;
// let tipamount = food * tippercentage;
// let total = food + tipamount;

// console.log('Tip amount', tipamount);
// console.log('Total', total);
//alert(tipamount);

let weather = prompt("How is the weather? ");

if (weather == "rainy"){
    console.log("Grab your umbrella");
} else {
    console.log("Grab your Sunglass");
}

function addition(num1 , num2){
    return num1 + num2;
}

const mul = (num1, num2) => {
    return num1 * num2;
}

let num1 = Number(prompt("Enter first number.... "));
let num2 = Number(prompt("enter the second number.... "));
console.log('Sum is :', addition(num1, num2));
console.log('Multiply is :', mul(num1, num2));
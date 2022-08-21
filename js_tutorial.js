//"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint: true})

console.log('Hello World');
let nameperson = 'petr pan';
console.log(nameperson);

let food = prompt("How much is the food?");
let tippercentage = prompt("tip % ?") / 100;
let tipamount = food * tippercentage;

console.log(tipamount);
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

// let weather = prompt("How is the weather? ");

// if (weather == "rainy"){
//     console.log("Grab your umbrella");
// } else {
//     console.log("Grab your Sunglass");
// }

// function addition(num1 , num2){
//     return num1 + num2;
// }

// const mul = (num1, num2) => {
//     return num1 * num2;
// }

// let num1 = Number(prompt("Enter first number.... "));
// let num2 = Number(prompt("enter the second number.... "));
// console.log('Sum is :', addition(num1, num2));
// console.log('Multiply is :', mul(num1, num2));

const groceries = ["Fruit","Vegetables","Potato","Pumpkin","Banana","Grapes"];
// console.log(groceries);
// groceries.push("Chocolates");
// console.log("New items added: ", groceries);

// console.log("Slicing:", groceries.slice(0,3));
// console.log("Indexof:", groceries.indexOf("Potato"));
// console.log("Total item :", groceries.length);

//object

const person = {
    "name" : "Saayan",
    age : 25,
    "Shirt" : "Black",
}

console.log(person.Shirt);
console.log(person["name"]);
person.mob = "8981983455";

// console.log("Modified: ", person);

// const introducer = (name, shirt) => {
//     const worth = {
//         assests : 2000000,
//         liabilities : 45566,
//         networth : function() {
//             return this.assests - this.liabilities;
//         }
//     }
//     let intro = `Hi my name is ${name} and my shirt is ${shirt} and my networth is ${worth.networth()}`;
//     return intro;
// }

// console.log(introducer(person.name, person.Shirt));
// let sum = 0;
// for (let i = 1; i<=34; i++){
//     console.log(i);
//     sum += i;
// }
// console.log("Sum: ", sum);

// for (const item of groceries){
//     console.log(item);
// }


const letterfrequency = (phrase) =>{
    let frequency = {};
    for (const letter of phrase){
        if (letter in frequency){
            frequency[letter] += 1;
        } else {
            frequency[letter] = 1;
        }
    }
    return frequency;

}

// let userinput = prompt("write your sentnce..... here")
// // console.log(letterfrequency(userinput))

// const wordfrequency = (phrase) => {
//     const words = phrase.split(' ');
//     return letterfrequency(words);
// }

// console.log(wordfrequency(userinput))
// let list_ = [1,2,2,3,4,5,4,3,6,78,7,6,5,,5,6,7];

// for (let item of list_){
//     if (item){
//         console.log(item);
//     }else{
//         list_.push(40);
//     }
// }
// console.log(list_)

// const double = (numbers) => {
//     return numbers.map(number => number * 2);
// }


// let result = [3,2,4,5,6,].map(numbers => numbers * 2);
// console.log(result);

// console.log(double([2,3,4,5,6,7,]));

// let nums = [2,3,4,5,6,6,7,8];
// console.log(nums.filter(nums => nums > 3 || nums <3));

let list = [2,3,4,5,6,7];
let result = list.reduce(function(prev, curr) {
    return  prev+curr;
});
console.log(result);

const actornetworthlist = [
    {name: "Johny", networth: 12000000},
    {name: "Rocky", networth: 19000000},
    {name: "Anny", networth: 17000000},
    {name: "Johnie", networth: 15000000},
    {name: "Sam", networth: 20000000},

];

let sumnetworth = actornetworthlist.reduce((actornetworth_prev, actornetworth_curr) => actornetworth_prev + actornetworth_curr.networth, 0);
console.log(sumnetworth);


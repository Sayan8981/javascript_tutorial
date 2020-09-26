console.log ("Hello");
const prompt = require('prompt');
prompt.start();
// const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })
// readline.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
  
//   readline.close();
// });
// prompt.get(['username', 'email'], function (err, result) {
//     console.log('Command-line input received:');
//     console.log('  Username: ' + result.username);
//     console.log('  Email: ' + result.email);
// });


var num = 10;

// while (num < 100){
// 	console.log(num)
// 	num +=1
// }

for (var i = 0; i < 40; i++) {
	console.log(i);
};

var number = 10;
number++;
console.log(number);

function func(){
	console.log("this is a function");
}

func();

// string method 
var fruit = "banana";
var morefruit = "banana\napple";

console.log(fruit);
console.log(morefruit);
console.log(fruit.length);
console.log(fruit.indexOf("na"));
console.log(fruit.slice(2, 3));
console.log(fruit.replace("ba", 123));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit[2]);
console.log(fruit.split(''));

// arrays

var fruits = ['banana','apple','pineapple','guava']
fruits = new Array('banana','apple','pineapple','guava')
console.log(fruits)
console.log(fruits[2])

fruits[0] = 'pear'
console.log(fruits)

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common method 

console.log("to string ", fruits.toString());
console.log("to string ", fruits.join(" - "));
console.log("to string ", fruits.pop(), fruits);
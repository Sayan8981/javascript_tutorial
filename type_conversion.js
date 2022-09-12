let a = 6;
console.log("5" + a, typeof ("5" + a)); // 56
console.log(a + "5" + a); //656
console.log(a + a + "5" + a, typeof (a + a + "5" + a)); //1256
console.log("5" + a + a + a, typeof ("5" + a + a + a)); //5666
console.log("5" * a); //30
console.log(a * "5"); //30
console.log(a.toString() * "5", typeof (a.toString() * "5")); //30
console.log(a / "2"); // 3
console.log(a * "5" / "2"); // 15
console.log("5" * a / "2"); // 15

console.log(a + null, typeof (a + null)); // 6 , number : null is considered as 0 here.
console.log(String(a) + null); // 6null

let number = "4";
console.log(typeof (parseInt(number))); //Number
console.log(typeof (Number(number))); // Number
console.log(typeof (String(a))); // String 

let b;
console.log(b); // should print undefined

let name = "Saayan";
console.log(Number(name)); //  should print NaN

let active = false;
if (active == true) {
  document.getElementById("msg").innerText = Number(active);
} else {
  document.getElementById("msg").innerText = Number(false);
};

let number1 = "324523";
console.log(+number1);
console.log(typeof (+number1));

let number2 = 2354326;
console.log(typeof (number2.toString()), number2);

let date = new Date();
console.log(date, typeof (date));

console.log(date.getFullYear());
console.log(date.getTime());

// Arithmetic operation of undefined with number, boolean or null gives NaN

let result;

result = "4" + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false


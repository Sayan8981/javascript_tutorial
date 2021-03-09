// Functioal and Global scope demostration
// global scope
const scope = "global";
console.log(scope);

//************************** */

//function scope
function scopeDemo(){
    var i = 10;
    console.log(i); // function or lexical scope
}

scopeDemo();
console.log('**********8')
// console.log(i); // error, due to i not defined in the scope

//********************************/

function scopeDemo2(){
    scope = "demo function";
    console.log(scope);
}

scopeDemo2();
console.log(scope); // print the variable of global scope


//**********************/

// global variable variable access inside function
function scopeDemo3(){
    var k = 10;
    console.log('inside function', scope, k);
}
scopeDemo3();
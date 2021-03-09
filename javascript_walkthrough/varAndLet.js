function test(){
    for(var i = 1; i<=5 ;i++){
        setTimeout(function(){
            console.log(i);
        }, 1000);
    }
    console.log('after for loop', i);
}

// test();

function test2(){
    for(let i = 1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000);
    }
    // console.log('after for loop', i);
}

// test2();
/***************************************** */

// How let works (es6 converted to es5)
function test3(){
    function loop(_i){
        //now _i variable is scoped to function loop (loop function will have i variable in its execution context)
        setTimeout(function(){
            console.log(_i);
        }, 1000);
    }

    for(var i=1; i <= 5; i++){
        loop(i);
    }
}

test3();
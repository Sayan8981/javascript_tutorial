// execution stack [global, a(), b(), c()]

function a(){
    b();
    console.log('inside a');
}

a();

function b(){
    c();
    console.log('inside b');
}

function c(){
    console.log('inside c');
}

console.log('global context');
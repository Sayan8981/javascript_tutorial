function test(){
    for(let i =0; i<5; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000);
    }
    // console.log('outer', i);
}

test();

// console.log('global', i);
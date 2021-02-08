"use strict"

function SayHi (){
    console.log("call SayHi");
}

let sayHi = function(){
    console.log("cal SayHi(let)");
}

SayHi();
sayHi();
console.log(SayHi);
console.log(sayHi);

let func1 = sayHi;
func1()
"use strict"

let sum = (a, b) => a + b;
console.log(sum(5,6))

let double = (a) => a * a;
console.log(double(8))

let sayHi = () => console.log("hello arrow function");
sayHi();

// let age = prompt("what is your age?", 48);
let age = 57;
let welcom = (age < 48) ?
    () => console.log("smaller than 48") :
    () => console.log("greater than 48");

welcom();

let sayHi2 = () => {
    console.log("sayHi2 line 1");
    console.log("sayHi2 line 2");
};

sayHi2();

let addFunc2 = (a,b) => {
    let c = a + b * 2;
    return c * 10;
};

console.log(addFunc2(3,4));

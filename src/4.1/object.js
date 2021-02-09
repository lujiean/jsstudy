"use strict"

let user = {
    name: "John",
    finger: "kkk",
    "double str": true,
};

console.log(user.finger);
console.log(user.name);
console.log(user["double str"]);

let doubleKey = {
    "d k": "this is a double key",
}

let key = "d k";
console.log(doubleKey[key]);

function makeUserb(name, age) {
    return {
        name: name,
        age: age,
    };
}

let userb = makeUserb("JameJ", 45);
console.log(userb);

// function shortHand(name, age) {
//     return {
//         name,
//         age,
//     };
// }

let shortHand = (name, age) => {name, age};

// let userc = shortHand("JameJ", 45);
console.log(shortHand("KKK", 90));

// test 0
let obj = {
    0: "test",
    hello: "say hi",
    b2: "b2kk"
};

obj[0] = "what ? this is a 0";
obj.addAVar = "add a variable";

// console.log(obj.0);
console.log(obj["0"]);
console.log(obj.hello);
console.log(obj[0]);
console.log("****");
// concole.log("hello" in obj);

for (let key in obj){
    console.log(key);
    console.log(obj[key]);
}

console.log("####");
let f_obj_number = {
    "+67": "first para",
    "+99": "second para",
    "+3": "third para",
}

for (let key in f_obj_number){
    console.log(+key + " *** " + obj[key]);
}

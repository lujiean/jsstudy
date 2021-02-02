"use strict"

console.log("hello test");

// https://javascript.info/destructuring-assignment#smart-function-parameters
console.log("###Destructuring assignment###");
let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

let {name, years: age, isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

console.log("###The maximal salary###");
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "James": 300
  };

// function topSalary({...salary}) {
//     salary
// }

function topSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

  console.log(topSalary(salaries));
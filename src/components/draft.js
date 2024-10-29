/*
function greet(name){
    return `Hello, ${name}`;
}

let greeter = greet;
console.log(greeter("Alice"));
*/

// import math module 

/*
import * as math from 'mathjs';

const result = math.multiply(1,2);
console.log(result)

const numbers = [1,2,3];

const person = {name: 'Alice', age: 30};

const {name, age} = person;

console.log(person);
*/

function startTimer(time) { // 1 minute in milliseconds
    console.log(time);
}

let time = 20 * 1000;
startTimer(time); // This will call displayTime with 60000

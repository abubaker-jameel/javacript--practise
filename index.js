// javaScript Practice

// Variables

// declare using const

const a = 10; //const is a block const meaning constant value which cant be update
var b = 10; //var is used to store variable it is not consider good value because it cause issues
let c = 10; //let is a block level variable which can be update
// we can also declare a variable using just identifiers / name

// Data Types

// string, number, null, undefined, bigInt, symbol, object, boolean

//object dataTypes
//object, array and date

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {
    firstName: "John",
    lastName: "Doe"
};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// JavaScript Types are Dynamic

//Function

// closure

function closure(id) {
    const x = id

    return function innerFunction(data) {
        console.log(data)
        console.log(x)
    }
}

const getOutput = closure(10)
getOutput("20")
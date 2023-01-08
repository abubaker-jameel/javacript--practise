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

//call, apply and bind method

const method = {
    handleData: function (id, name) {
        console.log(`My name is ${name} and id is ${id} living at ${this.livingPlace}`)
    }
}

const place_01 = {
    livingPlace: "corner"
}
const place_02 = {
    livingPlace: "middle"
}
const place_03 = {
    livingPlace: "front"
}

method.handleData(10, "Abubaker")
method.handleData.call(place_01, 20, 'Dawood') //call execute then and there
method.handleData.apply(place_02, [30, 'Ali']) //apply execute then and there
const newMethod = method.handleData.bind(place_03) //bind execute only when we call mostly used at event handles
newMethod(40, 'Haider')

//pure function

const array__01 = [1, 2, 3, 4]

function pureFunction(a, element) {
    return [...a, element, Math.random()]
}
console.log(pureFunction(array__01, 5))

//impure function

const array__02 = [1, 2, 3, 4]

function impureFunction(b, element) {
    b.push(element)
}
impureFunction(array__02, 5)
console.log(array__02)

//callback

function add(x, y) {
    return x + y
}

function calculation(x, y, callback) {
    return callback(x, y)
}

console.log(calculation(19, 29, add))

// promises

let prom = new Promise((resolve, reject) => {
    const id = 10
    if (id === 10) {
        resolve(true)
    } else {
        reject(false)
    }
})

prom.then((bool) => {
    console.log(bool)
}).catch((bool) => {
    console.log(bool)
})

//async and await

async function asynchronous() {
    let p = new Promise((resolve, reject) => {
        let a = 10
        if (a == 10) {
            return resolve(true)
        } else {
            return reject(false)
        }
    })
    console.log(await p)
}
asynchronous()

//higher order function

function higherOrderFunction() {
    console.log("calling hoc ")
    return function innerFunction() {
        console.log("calling inner function")
    }
}
higherOrderFunction()();
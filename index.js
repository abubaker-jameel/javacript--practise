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

//anonymous function
(function (x, y) {
    console.log(`values of anonymous function : x = ${x} : y = ${y}`)
}(0, 1))

let anonymous = () => console.log("calling anonymous arrow function")
anonymous()

//map, filter and reduce array methods

// map method
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mapArray = numbersArray.map((number, index, array) => console.log(number, index, array))
// filter method
const filterArray = numbersArray.filter(number => console.log(number > 2 ? `filter number : ${number}` : `filter bool : ${false}`))
//reduce method
const reduceArrayValue = numbersArray.reduce((number__01, number__02) => (number__01 + number__02))
console.log(`reduce value : ${reduceArrayValue}`)

//Object & Maps

//objects

const colorName = 'black';
const hexCode = '#000';

const colors = {
    'yellow Color': '#ff0',
    blue: "#f00",
    orange: "#f60",
    [colorName]: hexCode
};

// or colors[colorName] = hexCode

//in order to access the spaced keys from the object we can use square bracket
console.log(colors["blue"])
console.log(colors['yellow Color'])

function getColorValue(key) {
    return colors[key]
}

console.log(getColorValue('blue'))

// to delete the key value pair of object we can use delete operator

delete colors['blue']
// or
delete colors.blue

const user = {
    name: "Abubaker",
    username: "abubaker",
    email: "reed@gmail.com",
    details: {
        title: "Programmer"
    }
};

// const { title } = user.details
// const { name, details: { title} } = user;

function displayUserBio({
    name,
    details: {
        title
    }
}) {
    console.log(`${name} is a ${title}`);
}

displayUserBio(user);

// const { username, email } = user;

// function displayUser() {
//   console.log(`username: ${username}, email: ${email}`);
// }

// displayUser()

const userData = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    verified: true
};

const newUserData = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"
};

const createdUserData = {
    ...userData,
    ...newUserData,
    verified: false
};
console.log(createdUserData);

// Object.assign() allows us to merge properties from two or more objects into a new object:
//     Object.assign({}, user, newUser)
// However, this is not very intuitive or readable.A cleaner way of doing this is to use the spread operator(...): ``
// `js const createdUser = { ...user, ...newUser, verified: false }; `
//
// console.log(Object.assign({}, user, newUser, { verified: false }));
// console.log(Object.assign(userData, newUserData))
// console.log({}, Object.assign(userData, newUserData))


//Arrays and Sets

const todosData = [];

const todo1 = {
    text: 'Wash the dishes',
    complete: false
};

const todo2 = {
    text: 'Do laundry',
    complete: false
};

todosData.push(todo1, todo2);
todosData.pop();
// todosData[1] = todo2;
// todosData[0] = todo1;
console.log(todosData);

const temperatures = [{
        degrees: 69,
        isRecordTemp: false
    },
    {
        degrees: 82,
        isRecordTemp: false
    },
    {
        degrees: 73,
        isRecordTemp: false
    },
    {
        degrees: 64,
        isRecordTemp: false
    }
];

// includes, some, every
const resultEvery = temperatures.every(temperature => !temperature.isRecordTemp); // true / false
console.log("This is every array method result" + " " + resultEvery);

const resultSome = temperatures.some(temperature => temperature.isRecordTemp === false); // true / false
console.log("This is some array method result" + " " + resultSome);

//map method
const newTemps = temperatures.map(temperature =>
    temperature.degrees > 70 ? {
        ...temperature,
        isHigh: true
    } : temperature
);
//forEach method
newTemps.forEach(temperature => {
    if (temperature.isHigh) {
        console.log(`Temperature ${temperature.degrees} was a record high last week!`);
    }
})
// console.log(newTemps);


// .find() works in the same way as.filter() but returns just one array element:

const restaurants = [{
        name: 'Cap City Diner',
        milesAway: 2.2
    },
    {
        name: 'Chop Shop',
        milesAway: 4.1
    },
    {
        name: 'Northstar Cafe',
        milesAway: 0.9
    },
    {
        name: 'City Tavern',
        milesAway: 0.5
    },
    {
        name: 'Shake Shack',
        milesAway: 5.3
    }
]


// Unlike.map() which always returns an array, .reduce() can transform an array into any data type.This is useful
// for tasks such as creating totals: ``
// `js const total = menuItems.reduce((accumulator, menuItem) => { return accumulator + menuItem.price;
// }, 0); `
// `
const result = restaurants.find(restaurant =>
    restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
)
console.log(result);

const menuItems = [{
        item: "Blue Cheese Salad",
        price: 8
    },
    {
        item: "Spicy Chicken Rigatoni",
        price: 18
    },
    {
        item: "Ponzu Glazed Salmon",
        price: 23
    },
    {
        item: "Philly Cheese Steak",
        price: 13
    },
    {
        item: "Baked Italian Chicken Sub",
        price: 12
    },
    {
        item: "Pan Seared Ribeye",
        price: 31
    }
];

const total = menuItems.reduce((accumulator, menuItem) => {
    console.log(`
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
  `);
    return accumulator + menuItem.price;
}, 0);
console.log(total);

// Challenge:
// Use reduce() to sum the weights of all the cars
// Stretch goal:
// Use reduce to sum the weights of only the electric cars

const carsData = [{
        name: "Toyota",
        isElectric: false,
        weight: 1320
    },
    {
        name: "Ford",
        isElectric: false,
        weight: 1400
    },
    {
        name: "Volkswagen",
        isElectric: false,
        weight: 1370
    },
    {
        name: "Honda",
        isElectric: false,
        weight: 1375
    },
    {
        name: "Tesla",
        isElectric: true,
        weight: 1750
    },
    {
        name: "BMW",
        isElectric: true,
        weight: 1350
    },
];


const totalWeight = carsData.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;
    } else {
        return accumulator;
    }
}, 0)

console.log(totalWeight);

// Virtually every array method can be recreated with.reduce().This is because the majority of these methods are productions, meaning that they take an array and transform it into something else.

const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
}, []);
console.log('doubled numbers', doubledNumbers);
console.log('numbers', numbers);


// We can merge multiple arrays into a new array using the spread operator(...).The order in which the arrays are entered is retained:

//     const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];

// We can use.slice() to remove items.

// allMenuIdeas.slice(1, 3)

//     .findIndex() allows us to find a particular element when we don 't know where it is stored:

// allMenuIdeas.findIndex(idea => idea === 'Harvest Salad'

//         We can use these in combination to update elements in the array:

//         const finalMenuIdeas = [
//             ...allMenuIdeas.slice(0, saladIndex),
//             "Garden Salad",
//             ...allMenuIdeas.slice(saladIndex + 1)
//         ];
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas,
    "Harvest Salad",
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

const finalMenuIdeas = [
    ...allMenuIdeas.slice(0, meatloafIndex),
    ...allMenuIdeas.slice(meatloafIndex + 1)
]
// const finalMenuIdeas = [
//   ...allMenuIdeas.slice(0, saladIndex),
//   "Garden Salad",
//   ...allMenuIdeas.slice(saladIndex + 1)
// ];

console.log(finalMenuIdeas);

//array destruction

const arrayBooleans = [false, true, false, true]
const [firstBool, secondBool] = arrayBooleans

// We can convert objects into arrays in three ways:

//     Object.keys() - allows us to take the keys of an object and turn them into an array.

// Object.keys(user);

// Object.values() allows us to get the values of an object:

//     Object.values(user);

// Object.entries() allows us to iterate over the entire object(keys and values):

//     Object.entries(user);

// for-in loop
// const obj = { one: 1, two: 2 };

// for (const key in obj) {
//   console.log('value', obj[key]);
// }

// Object.keys(), Object.values(), Object.entries()
// const user = {
//   name: 'John',
//   age: 29
// };

// console.log(Object.entries(user));

const users = {
    '2345234': {
        name: "John",
        age: 29
    },
    '8798129': {
        name: "Jane",
        age: 42
    },
    '1092384': {
        name: "Fred",
        age: 17
    }
};

const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
    if (user.age > 20) {
        acc.push({
            ...user,
            id
        });
    }
    return acc;
}, []);
console.log(usersOver20);

// const values = Object.keys(user).map(key => user[key]);
// console.log(values);
// console.log(Object.values(user));

// const monthlyExpenses = {
//   food: 400,
//   rent: 1700,
//   insurance: 550,
//   internet: 49,
//   phone: 95
// };

// const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense, 0);
// console.log(monthlyTotal);

//Sets
const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff"
];

const uniqueDishes = [...new Set(customerDishes)];
console.log(uniqueDishes)

// const numbers = new Set([[1], [2], [3]]);

// for (const num of numbers) {
//   console.log(num);
// }
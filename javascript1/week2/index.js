// 1. console.log
console.log('Hello World');
console.log('Hej Världen');
console.log('Hallo Welt');
console.log('สวัสดีโลก');

// 2.
console.log("I'm awesome");

// 3. value of variable
let x;
console.log('the value of my variable x will be: undefined');
console.log(x);
x = 2;
console.log('the value of my variable x will be: 2');
console.log(x);

// 4.
let y = 'sofa';
console.log('the value of my variable y will be: sofa');
console.log(y);
y = 'bed';
console.log('the value of my variable y will be: bed');
console.log(y);

// 5. Rounding numbers and compare numbers
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
const isBigger = (num1, num2) => {
  if (num1 > num2) {
    return console.log(num1);
  } else {
    return console.log(num2);
  }
};
isBigger(z, a);

// 6. Arrays (how to escape all the "" in console.log?)
let rooms = ['bedroom', 'bathroom', 'kitchen', 'living room'];
console.log('the value of my variable rooms will be: [bedroom, bathroom, kitchen, living room]');

let pets = ['dog', 'cat', 'rat', 'hamster'];
console.log(pets);
pets.push('baby pig');
console.log(pets);
// immutable
let morePets = [...pets, 'baby pig'];
console.log(morePets);

// 7. lenght of string
let myString = 'this is a test';
console.log(myString.length);

// 8. data types
let furniture = ['sofa', 'table', 'armchair', 'cabinet'];
let amountOfDays = 20;
let brand = 'Howards';
let sofa = {
  legs: 4,
  colour: 'navy',
  material: 'fabric',
};
console.log('The value of my variable furniture is: ' + furniture);
console.log('The value of my variable amountOfDays is ' + amountOfDays);
console.log('The value of my variable name is: ' + brand);
console.log('The value of my variable sofa is: ' + sofa);

console.log('The type of variable furniture is an array');
console.log('The type of variable amounOfDays is a number');
console.log('The type of variable brand is a string');
console.log('The type of variable sofa is an object');

console.log(typeof furniture); // all derived data type is a type object
console.log(typeof amountOfDays);
console.log(typeof brand);
console.log(typeof sofa);

const compareTypes = (a, b) => {
  if (typeof a === typeof b) {
    return console.log('Same type');
  } else {
    return console.log('Not the same type');
  }
};

compareTypes(furniture, brand);
compareTypes(furniture, sofa);

// 9. Modulus
let number = 7;
number = number % 3;
console.log('The new value of number is 1.');
console.log('The Modulus is is the remainder of the division of one number by another.');
console.log('Basically what is left after two numbers have been divided');

// 10.
// different data types in an array
let time = ['Monday', 24, 'month', 2021];
console.log('Is variable time an array? ' + Array.isArray(time));
console.log(
  'The variable time is an array that consists different types of data. Array.isArray(time) returns true which means an array can consists of multiple data types',
);

let alpha = 6 / 0;
let beta = 10 / 0;
console.log(alpha === beta);
console.log('Using strict equality (===) to find out if the two variables are equal');
console.log('It shows that you can compare infinities in JavaScript');

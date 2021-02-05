// 1. strings regex
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
console.log(myString.replace(/,/g, ' '));

// 2. arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals);

// insert item to the end of array (immutable)
let maurosFavoriteAnimals = [...favoriteAnimals, "turtle"];
console.log(maurosFavoriteAnimals);
// insert item at specific index, remove none of existing items, item to be inserted 
// not modifying the original array
const insert = (arr, index, item) => {
    return [
        ...arr.slice(0, index),
        item,
        ...arr.slice(index)
    ];
};
let jimsFavoriteAnimals = insert(maurosFavoriteAnimals, 1, "meerkat");
console.log(jimsFavoriteAnimals)
console.log("The array has a length of " + jimsFavoriteAnimals.length);

// Using filter in order to create a new array and not modify the original
let jasonsFavoriteAnimals = jimsFavoriteAnimals.filter(animal => animal !== "giraffe");
console.log(jasonsFavoriteAnimals);

// finding index of element in an array
console.log("This item you are looking for is at index: " + jasonsFavoriteAnimals.indexOf("meerkat"));

// More JavaScript
// 1. add numbers function
const addThreeNum = (num1, num2, num3) => console.log(num1 + num2 + num3);
addThreeNum(2, 3, 5);

// 2. expression interpolation
const colourCar = (colour) => console.log(`a ${colour} car`);
colourCar("blue");

// 3. print obj
const cat = {
    colour: "black",
    eyes: 2,
    ears: 2,
    nose: 1,
    paws: 4,
};
const printObj = (obj) => console.log(obj);
printObj(cat);

// 4. if else 
const vehicleType = (colour, vehicle) => {
    let vehicles = {
        1: "car",
        2: "motorbike"
    }
    return console.log(`a ${colour} ${vehicles[vehicle]}`)
};
vehicleType("red", 2);

// 5. 
const isTrue = (x, y) => console.log(x === y);
isTrue(3, 3);

// 6.
const vehicle = (colour, vehicle, age) => {
    let vehicles = {
        1: "car",
        2: "motorbike"
    };
    let condition = {
        1: "new",
        5: "used"
    };
    return console.log(`a ${colour} ${condition[age]} ${vehicles[vehicle]}`)
};

vehicle("red", 1, 1);

// 7. 8. 
let vehicles = ["motorbike", "caravan", "car", "bike", "van", "truck"];
console.log(vehicles[2]);

// 9. 

// 12. 
const obj = {};

// 13. 14.
let teachers = {
    module1: "Joseph",
    module2: "Seif",
    languages: ["HTML", "CSS", "JavaScript"]
}

// 15. Checking if elements inside both arrays are identical (same length, same value, same order)
let array1 = [1, 2, 3];
let array2 = [1, 2, 3]; 

const isSameArray = (a, b) => {
    return a.length === b.length &&
    a.every((element, index) => element === b[index]);
}
console.log(isSameArray(array1, array2));

// 16.
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(o2);
console.log(o3);

// changing o2 doesn't change o3
o2 = { foo: "boo" };
console.log(o2);
console.log(o3);

// changing o1 doesn't change o3
o1 = { foo: "bee" };
console.log(o1);
console.log(o3);

// 17. typeof typeof
let bar = 42;
console.log(typeof typeof bar);
// typeof returns a string eg. "number", "object", "string"
// So typeof "number" is a "string"



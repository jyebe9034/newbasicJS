// String
const helloWorld = 'Hello, World!';
const array = helloWorld.split(',');
const newWorld = array[0] + ' new ' + array[1];
console.log(newWorld);

// Numbers
const a = 2;
const b = 3;
const result = a + b;
console.log(result); // 5

// Function & Conditionals
function numberChecker(number) {
    if (number === 6) {
        return true;
    } else {
        return false;
    }
}

const result2 = numberChecker(result);
console.log(result2); // false

// String method: concat()
const birthYear = 2000;
const thisYear = 2026;
const age = thisYear-birthYear;
const firstName = 'Jenny';
const lastName = 'Hong';
const fullName = firstName.concat(' ', lastName);

const greeting = 'Hello! My name is ' + fullName + ' and I am ' + age + ' years old.';
console.log(greeting);

// Function
let myFavoriteAnimal = 'my favorite animals'; // outer variable
function favoriteAnimal(animal1, animal2 = anotherAnimal()) { // default values
    return `${animal1} and ${animal2} is ${myFavoriteAnimal}!`;
}

function anotherAnimal() {
    return 'Dog';
}

const message = favoriteAnimal('Cat', 'Bird');
showMessage(message);

function showMessage(message) {
    message = message || 'empty'; // if message is undefined or otherwise falsy, set it to 'empty'
    console.log(message);
}



let arr1 = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum
console.log(fruits.length); // 3

console.log(fruits.at(-1)); // Plum

// pop: Extracts the last element of the array and returns it
console.log(fruits.pop()); // remove "Plum"
console.log(fruits); // [ 'Apple', 'Orange' ]

// push: Append the element to the end of the array
fruits.push("Pear");
console.log(fruits); // [ 'Apple', 'Orange', 'Pear' ]

// shift: Extracts the first element of the array and returns it
fruits.shift(); // remove Apple
console.log(fruits); // [ 'Orange', 'Pear' ]

// unshift: Add the element to the beginning of the array
fruits.unshift('Apple');
console.log(fruits); // [ 'Apple', 'Orange', 'Pear' ]


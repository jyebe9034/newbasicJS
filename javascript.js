// Variables
// let, const, var
let firstName = 'Hannah';
let lastName = 'Lim';

console.log(firstName); // Hannah
console.log(lastName); // Lim

let age = 20;
console.log(age); // 20

age = 30;
console.log(age); // 30

const pi = 3.14;
// pi = 4.15; TypeError: Assignment to constant variable.
console.log(pi); // 3.14

// Numbers
console.log(23 + 97); // 120
console.log((4+6+9)/77); // 0.24675

let a = 10;
console.log(a); // 10
a = a * 2;
console.log(a); // 20
let b = 7 * a;
console.log(b); // 140

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage); // 0.7719
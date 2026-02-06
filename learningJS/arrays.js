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

delete fruits[1];
console.log(fruits); // [ 'Apple', <1 empty item>, 'Pear' ]
console.log(fruits.length); // 3

fruits[1] = "Cherry";
console.log(fruits); //  [ 'Apple', 'Cherry', 'Pear' ]

fruits.splice(2, 1); // from index 2 remove 1 element
console.log(fruits); // [ 'Apple', 'Cherry' ]

fruits = fruits.concat("Orange", "Pear"); // concat return new array
fruits.splice(0, 3, "Banana", "Pineapple");
console.log(fruits); // [ 'Banana', 'Pineapple', 'Pear' ]

// TODO: 리팩토링 map, filter, reduce를 사용해서
function sumOfTripledEvens(array) {
    let sum = 0;
    for (const number of array) {
        if (number % 2 === 0) {
            sum += number * 3;
        }
    }
    return sum;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sumOfTripledEvens(array);

// map return a new array, so original array is not changed.
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num + 1);
console.log(mappedArr); // [ 2, 3, 4, 5, 6 ]

// filter
function isOdd(num) {
    return num %2 !== 0;
}
const oddNums = arr.filter(isOdd);
console.log(oddNums); // [ 1, 3, 5 ]

// reduce
const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log(productOfAllNums); // 120
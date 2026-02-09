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

function sumOfTripledEvens(array) {
    let sum = 0;
    for (const number of array) {
        if (number % 2 === 0) {
            sum += number * 3;
        }
    }
    console.log(`sum is ${sum}`); // sum is 60
    return sum;
}

function refactoring(array) {
    const result = array.filter((num) => num % 2 === 0).reduce((total, even) => total + (even * 3), 0);
    console.log(`result is ${result}`); // result is 60
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sumOfTripledEvens(array);
refactoring(array);

// map return a new array, so original array is not changed.
const numArr = [1, 2, 3, 4, 5];
const mappedArr = numArr.map((num) => num + 1);
console.log(mappedArr); // [ 2, 3, 4, 5, 6 ]

// filter
function isOdd(num) {
    return num % 2 !== 0;
}
const oddNums = arr.filter(isOdd);
console.log(oddNums); // [ 1, 3, 5 ]

// reduce
const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log(productOfAllNums); // 120


// Translate border-left-width to borderLeftWidth
// map 안에서 {}를 쓰면 무조건 return을 해줘야 함. {}를 안쓰면 return 필요 없음!
function camelized(stringWithDash) {
    return stringWithDash.split('-').map((word, index) => 
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
}

console.log(camelized("background-color"));
console.log(camelized("list-style-image"));

// Filter range
let arr = [5, 3, 8, 1];
let filterd = filterRange(arr, 1, 4);
function filterRange(originArr, num1, num2) {
    return originArr.filter(value => value >= num1 && value <= num2);
}
console.log(filterd); // [ 3, 1 ]
console.log(arr); // [ 5, 3, 8, 1 ]

// Filter range "in place"
function filterRangeInPlace(arr2, num1, num2) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < num1 || arr2[i] > num2) {
            arr2.splice(i, 1);
            i--;
        }
    }
}
let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);
console.log(arr2); // [ 3, 1 ]

// Sorting in decreasing order
let arr3 = [5, 2, 1, -10, 8];
arr3.sort().reverse();
console.log(arr3); // [ 8, 5, 2, 1, -10 ]

// Copy and sort string array
let stringArr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(stringArr);
function copySorted(arr) {
    let copyArr = [];
    arr.map(value => copyArr.push(value));
    copyArr.sort();
    return copyArr;
}
console.log(sorted); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log(stringArr); // [ 'HTML', 'JavaScript', 'CSS' ]

// Shuffle an array
function shuffle (arr) {
    arr.sort(() => Math.random() - 0.5);
}
let numArr2 = [1, 2, 3];
shuffle(numArr2);
console.log(numArr2);

// Filter unique array members
function uniqueArr(arr) {
    // Set은 중복을 허용하지 않는 값들의 집합 (자동으로 중복 제거해줌)
    // Set !== Array 왜냐면 index가 없음.
    // Set의 주요 메서드는 add(value), has(value), delete(value), size, clear()
    // 실무에서는 1. 중복제거 2. 존재여부확인 (includes보다 빠름)
    return [...new Set(arr)]; 
    // spread ...은 iterable(Array, Set, Map, String)을 배열로 변환해 줌
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(uniqueArr(strings)); // [ 'Hare', 'Krishna', ':-O' ]

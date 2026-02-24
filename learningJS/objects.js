let data = 42;
let dataCopy = data;
dataCopy = 43;

console.log(data); // 42
console.log(dataCopy); // 43

const obj = { data: 42 };
const objCopy = obj;
objCopy.data = 43;

console.log(obj); // { data: 43 }
console.log(objCopy); // { data: 43 }

function increaseCounterObject(objectCounter) {
  objectCounter.counter += 1;
}

function increaseCounterPrimitive(premetiveCounter) {
  premetiveCounter += 1;
}

const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object);
increaseCounterPrimitive(primitive);

console.log(object); // { counter: 1 }
console.log(primitive); // 0

let animal = { species: "dog" };
let dog = animal;

animal = { species: "cat" };

console.log(animal); // { species: 'cat' }
console.log(dog); // { species: 'dog' }

// Map to Object
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = [
  { fullName: `${users[0].name} ${users[0].surname}`, id: users[0].id },
  { fullName: `${users[1].name} ${users[1].surname}`, id: users[1].id },
  { fullName: `${users[2].name} ${users[2].surname}`, id: users[2].id },
];

console.log(usersMapped[1].id);
console.log(usersMapped[1].fullName);

let tony = { name: "Tony", age: 25 };
let jordan = { name: "Jordan", age: 30 };
let dave = { name: "Dave", age: 28 };

let arr = [tony, jordan, dave];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // Tony
console.log(arr[1].name); // Dave
console.log(arr[2].name); // Jordan

function sortByAge(array) {
  array.sort((a, b) => a.age - b.age); // 오름차순 정렬 (b.age - a.age는 내림차순)
}

console.log(getAverageAge(arr)); // 27.666666666666668

function getAverageAge(array) {
  return array.reduce((sum, person) => sum + person.age, 0) / array.length;
}

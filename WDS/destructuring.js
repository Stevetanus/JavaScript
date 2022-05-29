const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];
const [a, , c, ...rest] = alphabet;
// console.log(a);
// console.log(c);
// console.log(rest);

const newArray = [...alphabet, ...numbers];
// console.log(newArray);
const concatArray = alphabet.concat(numbers);
// console.log(concatArray);

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}
const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
// console.log(sum);
// console.log(multiply);
// console.log(division);

// object
const personOne = {
  name: "Steven",
  age: 24,
  favoriteFood: "chocolate",
  address: {
    city: "Taoyuan",
    country: "Taiwan",
  },
};
const personTwo = {
  age: 50,
  favoriteFood: "Beef noodles",
  address: {
    city: "Kaosiung",
    country: "USA",
  },
};

const {
  name: firstName = "noName",
  address: { city },
  ...other
} = personOne;
// console.log(firstName);
// console.log(city);
// console.log(other);

const personThree = { ...personOne, ...personTwo };
console.log(personThree);

function printUser({ name, age }) {
  console.log(`Name is: ${name}. Age is: ${age}.`);
}
printUser(personOne);
printUser(personThree);

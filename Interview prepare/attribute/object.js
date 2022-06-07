//www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#:~:text=To%20be%20more%20precise%2C%20JavaScript,reuse%20it%20using%20the%20prototype.
// 1. Object
// Defining object 1
// Object Literal
// let person = {
//   first_name: "Mukul",
//   last_name: "Latiyan",

//   //method
//   getFunction: function () {
//     return `The name of the person is
// 		${person.first_name} ${person.last_name}`;
//   },
//   //object within object
//   phone_number: {
//     mobile: "12345",
//     landline: "6789",
//   },
// };
// console.log(person.getFunction());
// console.log(person.phone_number.landline);
// Defining object 2
//using a constructor
function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
person.prototype.laugh = function () {
  return "laughing at " + this.first_name;
};
//creating new instances of person object
let person1 = new person("Mukul", "Latiyan");
let person2 = new person("Rahul", "Avasthi");

console.log(person1);
console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);
console.log(person1.laugh());
console.log(person2.laugh());
// Defining object 3
// Object.create() example a
// simple object with some properties
const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I
		studying?: ${this.isStudying}.`);
  },
};
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = "Mukul";

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();

const steven = {
  human: true,
  name: "stupid",
  who: function () {
    console.log(`Am I human? ${this.human}`);
  },
  name1: function () {
    console.log(this.name);
  },
};

const jack = Object.create(steven);

steven.who();
steven.name1();
jack.who();
jack.name1();
console.log(jack);

// 2. Class
// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());
// Defining class in a Traditional Way.
function Vehicle(name, maker, engine) {
  (this.name = name), (this.maker = maker), (this.engine = engine);
}

Vehicle.prototype.getDetails = function () {
  console.log("The name of the bike is " + this.name);
};

let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());

// As seen in the above example it is much simpler to define and reuse object in ES6.

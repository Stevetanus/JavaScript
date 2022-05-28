// 3. Encapsulation
//encapsulation example
class person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name},Address is: ${this.add}`);
  }
}

let person1 = new person("Mukul", 21);
person1.add_Address("Delhi");
person1.getDetails();
// Abstraction example
function person(fname, lname) {
  let firstname = fname;
  let lastname = lname;

  let getDetails_noaccess = function () {
    return `First name is: ${firstname} Last
			name is: ${lastname}`;
  };

  this.getDetails_access = function () {
    return `First name is: ${firstname}, Last
			name is: ${lastname}`;
  };
}
let person1 = new person("Mukul", "Latiyan");
console.log(person1.firstname); // undefined
console.log(person1.getDetails_noaccess); //undefined
console.log(person1.getDetails_access()); // First name is: Mukul, Last name is: Latiyan

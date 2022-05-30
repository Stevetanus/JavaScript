// 4. Inheritance
//Inheritance example
class person {
  constructor(name) {
    this.name = name;
  }
  //method to return the string
  toString() {
    return `Name of person: ${this.name}`;
  }
}
class student extends person {
  constructor(name, id) {
    //super keyword to for calling above class constructor
    super(name);
    this.id = id;
  }
  toString() {
    return `${super.toString()},Student ID: ${this.id}`;
  }
}
let student1 = new student("Mukul", 22);
console.log(student1.toString());
// we define an Person Object with certain property and method and then we inherit the Person Object in the Student Object and use all the property and method of person Object as well define certain property and methods for Student.

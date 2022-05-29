function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
// console.log(outerVariable);
newFunction("inner!");

// In JS, anything on the inside has access to the things on the outside of its scope.(parent scope, parents' scope)

// fetch
function outerFunction(url) {
  fetch(url).then(() => {
    console.log(url);
  });
}
// when you have a function defined inside of another function like this that inner function has access to the variables and scope of the outer function even if the outer function finishes executing and those variables are no longer accessible outside that function.

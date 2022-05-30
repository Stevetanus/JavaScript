// function multiply(num) {
//   return function (y) {
//     return y * num;
//   };
// }

// console.log(multiply(2)(5));

const multiply = (num) => {
  const fn = (nextNum) => {
    return multiply(num * nextNum);
  };

  fn.toString = () => num;

  return fn;
};

const result = multiply(2)(3)(4);
console.log(result);

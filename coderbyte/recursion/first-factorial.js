function RecursionChallenge(num) {
  let newNum = num;
  for (let i = num - 1; i > 0; i--) {
    newNum *= i;
  }
  // code goes here
  return newNum;
}

// keep this function call here
console.log(RecursionChallenge(readline()));

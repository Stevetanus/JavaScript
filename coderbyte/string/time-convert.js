function StringChallenge(num) {
  let hour = Math.floor(num / 60);
  let mins = num - hour * 60;

  // code goes here
  return `${hour}:${mins}`;
}

// keep this function call here
console.log(StringChallenge(readline()));

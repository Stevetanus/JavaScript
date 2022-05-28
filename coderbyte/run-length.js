function StringChallenge(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (i < str.length - 1 && str[i] == str[i + 1]) {
      count++;
      i++;
    }
    output += count;
    output += str[i];
  }
  // code goes here
  return output;
}

// keep this function call here
console.log(StringChallenge(readline()));

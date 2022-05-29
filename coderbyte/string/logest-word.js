function StringChallenge(sen) {
  let senSplit = sen.split(" ");
  let maxlength = 0;
  let output = "";
  for (let i = 0; i < senSplit.length; i++) {
    senSplit[i] = senSplit[i].replace(/[^(a-zA-Z0-9)].*/g, "");
    if (senSplit[i].length > maxlength) {
      maxlength = senSplit[i].length;
      output = senSplit[i];
    }
  }
  // code goes here
  return output;
}

// keep this function call here
console.log(StringChallenge(readline()));

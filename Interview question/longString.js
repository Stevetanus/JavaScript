// return the longest string with the same letter
let a = ["a", "b", "c", "ab", "eeeeee", "bb", "aac", "ccc", "dddd"]; // return "ccc";

function longString(arr) {
  const sameLengthArr = arr.map(long);

  let index;
  let maxLength = 0;
  for (let i = 0; i < sameLengthArr.length; i++) {
    if (sameLengthArr[i] > maxLength) {
      maxLength = sameLengthArr[i];
      index = i;
    }
  }

  return arr[index];
}

function long(str) {
  let strArr = str.split("");
  let length = 1;
  for (let i = 0; i < strArr.length; i++) {
    if (!strArr[i + 1]) continue;
    if (strArr[i] === str[i + 1]) {
      length++;
    }
  }
  return length;
}

const output = longString(a);
console.log(output);

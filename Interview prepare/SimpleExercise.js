// 1.
function printMany(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printMany(100);
// 2.
function printEvery3(n) {
  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}
printEvery3(88);
// 3.
function stars(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    star += "*";
  }
  console.log(star);
}
stars(10);
// 4.
function isUpperCase(string) {
  let string2 = string.toUpperCase();
  if (string == "") {
    console.log(false);
  } else if (string[0] == string2[0]) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// 5.
function isAllUpperCase(string) {
  let string2 = string.toUpperCase();
  if (string == "") {
    console.log(false);
  } else if (string == string2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// 6.
function position(string) {
  let string2 = string.toUpperCase();
  let i = 0;
  let find = false;
  while (i < string.length - 1) {
    if (string[i] != string2[i]) {
      i += 1;
    } else {
      find = true;
      console.log(string[i], i);
      break;
    }
  }
  if (find != true) {
    console.log(-1);
  }
}
// 7.
function findSmallCount(array, int) {
  let counts = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < int) {
      counts += 1;
    }
  }
  console.log(counts);
}
// 8.
function findSmallerTotal(array, int) {
  let smallerSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < int) {
      smallerSum += array[i];
    }
  }
  console.log(smallerSum);
}
// 9.
function findAllSmall(array, int) {
  let smallerArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < int) {
      smallerArray.push(array[i]);
    }
  }
  console.log(smallerArray);
}
// 10.
function sum(array) {
  let SUM = 0;
  for (let i = 0; i < array.length; i++) {
    SUM += array[i];
  }
  console.log(SUM);
}

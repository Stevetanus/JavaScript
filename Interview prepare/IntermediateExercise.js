// 1.
function mySort(array) {
  let number = 1000000000;
  let sort = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= number) {
      number = array[i];
      sort.unshift(array[i]);
    } else {
      sort.push(array[i]);
    }
  }
  console.log(sort);
}
// 2.
function isPrime(n) {
  if (n == 1) {
    return false;
  }
  let starter = 2;
  while (starter < n) {
    if (n % starter == 0) {
      return false;
    }
    starter++;
  }
  return true;
}
console.log(isPrime(31));
// 3.
function confirmEnding(string, target) {
  if (string.slice(string.length - target.length, string.length) == target) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// 4.
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] == arr[j]) {
        console.log(true);
      }
    }
  }
  console.log(false);
}
// 5.
function palindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      console.log(false);
      return false;
    }
    i++;
    j--;
  }
  console.log(true);
  return true;
}
// 6. 7.
function drawRow(space, star) {
  let result = "";
  for (let i = 0; i < space; i++) {
    result += " ";
  }
  for (let i = 0; i < star; i++) {
    result += "*";
  }
  console.log(result);
}

function pyramid(n) {
  let i = n - 1;
  let j = 1;
  for (let k = 1; k <= n; k++) {
    drawRow(i, j);
    i--;
    j += 2;
  }
}
pyramid(15);

function inversePyramid(n) {
  let i = 0;
  let j = 2 * (n - 1) + 1;
  for (let k = 1; k <= n; k++) {
    drawRow(i, j);
    i++;
    j -= 2;
  }
}
inversePyramid(4``);

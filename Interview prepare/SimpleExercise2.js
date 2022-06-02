// 1.
function stars(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    string += "*";
    console.log(string);
  }
}
// 2.
function makeStars(num) {
  let string = "";
  let stars = "";
  for (let i = 1; i <= num; i++) {
    if (i > 1) {
      string += "\n";
    }
    stars += "*";
    string += stars;
  }
  console.log(string);
}
// 3.
function stars2(num) {
  let string = "";
  let stars = "";
  for (let i = 1; i <= num; i++) {
    if (i > 1) {
      string += "\n";
    }
    stars += "*";
    string += stars;
  }
  for (let i = num - 1; i > 0; i--) {
    if (i >= 1) {
      string += "\n";
    }
    string += stars.slice(0, i);
  }
  console.log(string);
}
// 4.
function table(n) {
  for (let i = 1; i <= 9; i++) {
    let answer = n * i;
    console.log(
      n.toString() + " x " + i.toString() + " = " + answer.toString()
    );
  }
}
// 5.
function table9to9() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      let answer = i * j;
      console.log(
        i.toString() + " x " + j.toString() + " = " + answer.toString()
      );
    }
  }
}
table9to9();
// 6.
function fib(n) {
  let Fibonacci = [0, 1];
  for (let i = 0; i < 50; i++) {
    Fibonacci.push(Fibonacci[i] + Fibonacci[i + 1]);
  }
  console.log(Fibonacci[n]);
}
// 7.
function reverse(string) {
  let string2 = "";
  for (let i = string.length - 1; i >= 0; i--) {
    string2 += string[i];
  }
  console.log(string2);
}
// 8.
function swap(string) {
  let stringUpper = string.toUpperCase();
  let stringSwap = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == stringUpper[i]) {
      stringSwap += string[i].toLowerCase();
    } else {
      stringSwap += stringUpper[i];
    }
  }
  console.log(stringSwap);
}
// 9.
function findMin(array) {
  let number = 1000000000000000000;
  if (array == "") {
    console.log(undefined);
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < number) {
        number = array[i];
      }
    }
    console.log(number);
  }
}
// 10.
function findNthMin(array, n) {
  let number = 10000000000000;
  let smallerArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < number) {
      number = array[i];
      smallerArray.unshift(array[i]);
    } else {
      smallerArray.push(array[i]);
    }
  }
  console.log(smallerArray[n - 1]);
}

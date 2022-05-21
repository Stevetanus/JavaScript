// promises are either resolved or rejected
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  //   a = 3;
  if (a == 2) {
    resolve("Success!");
  } else {
    reject("Failed.");
  }
});

// p.then((message) => {
//   console.log("This is in the then: " + message);
// }).catch((msg) => {
//   console.log("This is in the catch: " + msg);
// });

const meLeft = false;
const meWatchingTV = false;
function keepCodingPromise() {
  return new Promise((resolve, reject) => {
    if (meLeft) {
      reject({
        name: "I quit coding.",
        message: ":(",
      });
    } else if (meWatchingTV) {
      reject({
        name: "I go watching TV",
        message: " get distracted(?",
      });
    } else {
      resolve("Thumbs up and keep coding, good good.");
    }
  });
}

// keepCodingPromise()
//   .then((msg) => console.log("Success! " + msg))
//   .catch((err) => console.log("Error! " + err.name + err.message));

// Promise.all Promise.race
const codeDayOne = new Promise((resolve, rejected) => {
  resolve("First day off.");
});
const codeDayTwo = new Promise((resolve, rejected) => {
  resolve("Second day off.");
});
const codeDayThree = new Promise((resolve, rejected) => {
  resolve("Third day off. Keeeeeeep learning!");
});
Promise.all([codeDayOne, codeDayTwo, codeDayThree]).then((msg) => {
  console.log(...msg);
});
Promise.race([codeDayOne, codeDayTwo, codeDayThree]).then((msg) => {
  console.log(msg);
});

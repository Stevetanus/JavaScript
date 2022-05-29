const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
// filter ? new Array : not in Array
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
// console.log(filteredItems);

// map
const itemNames = items.map((item) => {
  return item.name;
});
// console.log(itemNames);

// find
const foundItem = items.find((item) => {
  return item.name === "Phone";
});
// console.log(foundItem);

// forEach
// items.forEach((item) => console.log(item.name, item.price));

// some
const hasInexpensiveItems = items.some((item) => {
  return item.price < 50;
});
// console.log(hasInexpensiveItems);

// every
const everyInexpensiveItems = items.every((item) => {
  return item.price <= 100;
});
// console.log(everyInexpensiveItems);

// reduce
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
// console.log(total);

// includes
const includeTV = items.includes({ name: "TV", price: 200 });
// console.log(includeTV);
const someList = [0, 1, 2, 3, 4, 5];
const include5 = someList.includes(5);
// console.log(include5);

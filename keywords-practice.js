
// Question 1: const and let

const vatRate = 0.075;
let totalSales = 0;

totalSales = totalSales + 5000;

console.log(vatRate);
console.log(totalSales);

// const prevents reassignment of the VAT rate because it should not change.
// let allows the totalSales variable to be updated whenever a new sale happens.

// Testing const reassignment:
// vatRate = 0.10;
// This produces an error: Assignment to constant variable.

// Question 2: == vs ===
console.log("5" == 5);
 console.log("5" === 5);

// // == allows JavaScript to convert types before comparing values.
// // === compares both value and type without automatic type conversion.
// // I used both to see how a string and a number are compared differently.
// Question 3: switch statement
function dayMessage(day) {
  switch (day) {
    case 1:
      console.log("Monday: restock");
      break;

    case 6:
      console.log("Saturday: market day");
      break;

    default:
      console.log("Normal day");
  }
}

dayMessage(1);
dayMessage(6);
dayMessage(3);
 
// Question 4: Ternary Operator

let hour = 10;

let status = hour >= 8 && hour < 17 ? "Open" : "Closed";

console.log(status);

// Testing with another hour
hour = 20;

status = hour >= 8 && hour < 17 ? "Open" : "Closed";

console.log(status);

// The ternary operator checks a condition.
// If the condition is true, it returns "Open".
// If the condition is false, it returns "Closed".
// It is a shorter way to write a simple if...else statement.

// Question 5: while loop

let savings = 0;
let weeks = 0;

while (savings < 10000) {
  savings = savings + 2000;
  weeks = weeks + 1;
}

console.log(weeks);

//question 6: for loop with break statement
// The while loop continues to add 2000 to savings until it reaches or exceeds 10000.
const guests = ["Ada", "Obi", "Ngozi"];

for (let i = 0; i < guests.length; i++) {
  if (guests[i] === "Obi") {
    console.log("Obi found at index:", i);
    break;
  }
}
console.log(savings);

// Question 7: continue

const carts = [
  { item: "Rice", stock: 5 },
  { item: "Notebook", stock: 0 },
  { item: "Biro", stock: 60 },
];

for (const product of carts) {
  if (product.stock === 0) {
    continue;
  }

  console.log(product.item);
}
// The continue statement skips the current iteration of the loop if the product is out of stock (stock === 0).
//question 8: for...of loop
const names = ["Ada", "Obi", "Ngozi"];

for (const name of names) {
  console.log("Welcome, " + name);
}
// The for...of loop iterates over each name in the names array and logs a welcome message for each name.
// Question 9: Array methods
const queue  = ["Ada", "Obi"];

queue.push("Ngozi");
console.log(queue);

const removedPerson = queue.pop();

console.log(removedPerson);
console.log(queue);
// The push() method adds "Ngozi" to the end of the queue array.
// The pop() method removes the last element from the queue array and returns it, which is stored in removedPerson.
// The final state of the queue array is logged to the console.

// Question 10: shift and unshift

const secondqueue = ["Ada", "Obi", "Ngozi"];

const firstPerson = secondqueue.shift();

console.log(firstPerson);
console.log(secondqueue);

secondqueue.unshift("Chief");

console.log(secondqueue);
// The shift() method removes the first element from the secondqueue array and returns it, which is stored in firstPerson.
// The unshift() method adds "Chief" to the beginning of the secondqueue array.
// The final state of the secondqueue array is logged to the console.

// Question 11: includes and indexOf

const importantguest = ["Ada", "Obi", "Ngozi"];

console.log(importantguest.includes("Kunle"));
console.log(importantguest.indexOf("Obi"));
// The includes() method checks if "Kunle" is present in the importantguest array and returns false.
// The indexOf() method returns the index of "Obi" in the importantguest array, which is 1.

// Question 12: slice and join

const ranking = ["Ada", "Obi", "Ngozi", "Kunle", "Chika"];

const topThree = ranking.slice(0, 3);

console.log(topThree.join(", "));
console.log(ranking.length);
// The slice() method creates a new array topThree containing the first three elements of the ranking array.
// The join() method combines the elements of the topThree array into a single string, separated by commas.
// The length property returns the number of elements in the ranking array, which is 5.

// Question 13: map

const prices = [1000, 2000, 5000];

const pricesWithVAT = prices.map(price => {
  return price * 1.1;
});

console.log(pricesWithVAT);
console.log(prices);
// The map() method creates a new array pricesWithVAT by applying a function to each element of the prices array.

// Question 14: filter

const results = [
  { name: "Ada", score: 70 },
  { name: "Obi", score: 45 },
  { name: "Ngozi", score: 88 },
  { name: "Kunle", score: 52 },
];

const passedStudents = results.filter(student => {
  return student.score >= 50;
});

console.log(passedStudents);
console.log(passedStudents.length);
// The filter() method creates a new array passedStudents containing only the students who scored 50 or above.

// Question 15: find and filter

const products = [
  { name: "Biro", price: 800 },
  { name: "Notebook", price: 1500 },
  { name: "Pencil", price: 500 },
];

const firstCheapProduct = products.find(product => {
  return product.price < 1000;
});

const cheapProducts = products.filter(product => {
  return product.price < 1000;
});

console.log(firstCheapProduct);
console.log(cheapProducts);   
// The find() method returns the first product with a price less than 1000, which is the "Biro".
// The filter() method returns an array of all products with a price less than 1000, which includes the "Biro" and "Pencil".

// Question 16: reduce

const cart = [
  { name: "Rice", price: 45000, qty: 2 },
  { name: "Beans", price: 3000, qty: 3 },
];

const total = cart.reduce((sum, product) => {
  return sum + product.price * product.qty;
}, 0);

console.log(total);
// The reduce() method calculates the total cost of the items in the cart by multiplying the price and quantity of each product and summing them up. The initial value of sum is set to 0.

// Question 17: String methods

const input = " ada obi ";

const cleaned = input.trim();
const uppercase = cleaned.toUpperCase();
const name = uppercase.split(" ");

console.log(cleaned);
console.log(uppercase);
console.log(name);
// The trim() method removes whitespace from both ends of the input string.
// The toUpperCase() method converts the cleaned string to uppercase.
// The split() method splits the uppercase string into an array of words based on spaces.   

// Question 18: Object.keys and Object.entries

const receipt = {
  rice: 45000,
  beans: 3000,
  oil: 6000
};

console.log(Object.keys(receipt));

console.log(Object.entries(receipt));

for (const [item, price] of Object.entries(receipt)) {
  console.log(item + ": " + price);
}

console.log("Number of items:", Object.keys(receipt).length);
// The Object.keys() method returns an array of the keys (item names) in the receipt object.
// The Object.entries() method returns an array of key-value pairs (item and price) in the receipt object.
// The for...of loop iterates over the entries of the receipt object, logging each item and its price.
// The length property of the array returned by Object.keys() gives the number of items in the receipt.

// Question 19: sort

const times = [100, 25, 5, 40];

console.log(times.sort());

const correctTimes = [100, 25, 5, 40];

correctTimes.sort((a, b) => a - b);

console.log(correctTimes);
// The sort() method sorts the times array in lexicographical order, which is not suitable for numbers.
// The second sort() method uses a compare function to sort the correctTimes array in ascending numerical order.

// Question 20: typeof and Number

const firstAmount = "250";
const secondAmount = "50";

console.log(typeof firstAmount);

console.log(firstAmount + secondAmount);

const totals = Number(firstAmount) + Number(secondAmount);

console.log(totals);

console.log(typeof totals);

// The typeof operator returns the type of the firstAmount variable, which is "string".
// The + operator concatenates the two string amounts, resulting in "25050".
// The Number() function converts the string amounts to numbers, allowing for numerical addition.
// The final typeof check confirms that totals is of type "number".
// synchronous callback
// function calculate(operation, x, y) {
//   return operation(x, y);
// }

// function multiply(a, b) {
//   return a * b;
// }

// calculate(multiply, 4, 5);
// function runSomething(callback) {
//   console.log("Before callback");

//   callback();

//   console.log("After callback");
// }

// function sayHello() {
//   console.log("Hello!");
// }

// runSomething(sayHello);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(function (number) {
    return number % 2 == 0;
})
console.log(evenNumbers);


// Function vs Variable Hoisting
console.log("1a:", myVar);
console.log("1b:", myFunc);

var myVar = 10;

function myFunc() {
  return "Hello from function!";
}

// Function Expression Hoisting
try {
  console.log("2:", expressFunc);
  expressFunc();
} catch (err) {
  console.log("2 Error:", err.message);
}

var expressFunc = function () {
  console.log("Running expression");
};
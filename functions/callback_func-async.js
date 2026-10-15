console.log("Start");

setTimeout(function () {
  console.log("Inside callback");
}, 2000);

console.log("End");
// e.g 2
// console.log("A");

// setTimeout(function () {
//   console.log("B");
// }, 0); // 0ms means  -> Make this callback eligible as soon as possible.

// console.log("C");
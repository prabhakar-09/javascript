console.log("A");

setTimeout(function () {
  console.log("B");
}, 0);

Promise.resolve().then(function () {
  console.log("C");

  Promise.resolve().then(function () {
    console.log("D");
  });
});

Promise.resolve().then(function () {
  console.log("E");
});

console.log("F");
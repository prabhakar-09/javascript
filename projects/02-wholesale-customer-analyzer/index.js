const fs = require("fs");

const csvData = fs.readFileSync(
  "./data/Wholesale customers data.csv",
  "utf8"
);


const rows = csvData.trim().split(/\r?\n/);

const header = rows[0];
const dataRows = rows.slice(1);
const headers = header.split(",");

console.log(headers);
console.log(headers.length);
console.log(headers[0]);
console.log(headers[2]);
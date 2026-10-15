fetch("./data/Wholesale customers data.csv")
  .then(function (response) {
    return response.text();
  })
  .then(function (csvData) {
  const rows = csvData.trim().split(/\r?\n/);

  const dataRows = rows.slice(1);

  const customers = dataRows.map(function (row, index) {
    const values = row.split(",");

    return {
      id: index + 1,
      channel: Number(values[0]),
      region: Number(values[1]),
      fresh: Number(values[2]),
      milk: Number(values[3]),
      grocery: Number(values[4]),
      frozen: Number(values[5]),
      detergentsPaper: Number(values[6]),
      delicatessen: Number(values[7])
    };
  });
    console.log(customers);
    const customerCountElement = document.getElementById("customer-count");
    customerCountElement.textContent = `Customers Loaded: ${customers.length}`;
    let totalGrocery = 0;

    for (const customer of customers) {
    totalGrocery += customer.grocery;
    }

    const averageGrocery = totalGrocery / customers.length;
    const averageGroceryElement =
    document.getElementById("average-grocery");

    averageGroceryElement.textContent =
    `Average Grocery Spend: ${averageGrocery.toFixed(2)}`;

    let highestTotal = 0;
let highestCustomer = null;

for (const customer of customers) {
  const customerTotal =
    customer.fresh +
    customer.milk +
    customer.grocery +
    customer.frozen +
    customer.detergentsPaper +
    customer.delicatessen;

  if (customerTotal > highestTotal) {
      highestTotal = customerTotal;
      highestCustomer = customer;
    }
  }

  const highestCustomerElement =
  document.getElementById("highest-customer");

highestCustomerElement.textContent =
  `Highest-Spending Customer: #${highestCustomer.id} - Total Spend: ${highestTotal}`;

  console.log(highestTotal);
  console.log(highestCustomer);

  const tableBody =
  document.getElementById("customer-table-body");

function renderCustomers(customerList) {
  tableBody.innerHTML = "";

  const customersToShow = customerList.slice(0, 10);

  for (const customer of customersToShow) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${customer.id}</td>
      <td>${customer.channel}</td>
      <td>${customer.region}</td>
      <td>${customer.fresh}</td>
      <td>${customer.milk}</td>
      <td>${customer.grocery}</td>
    `;

    tableBody.appendChild(row);
  }
}

renderCustomers(customers);
const channelFilter =
  document.getElementById("channel-filter");

channelFilter.addEventListener("change", function () {
  const selectedChannel = channelFilter.value;

  if (selectedChannel === "all") {
    renderCustomers(customers);
    return;
  }

  const filteredCustomers = customers.filter(function (customer) {
    return customer.channel === Number(selectedChannel);
  });

  renderCustomers(filteredCustomers);
});

});


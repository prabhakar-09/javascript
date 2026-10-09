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

});


async function loadCustomerData() {
  const customer = await getCustomer();

  const [orders, invoices] = await Promise.all([
    getOrders(customer.id),
    getInvoices(customer.id)
  ]);

  const dashboard = await buildDashboard(orders, invoices);

  console.log(dashboard);
}
const orders = [
  {
    date: "2020-01-01",
    subtotal: 39.98,
    items: [
      {
        product: {
          id: "nice hat",
          description: "A very nice hat",
          price: 29.99,
        },
        quantity: 2,
      },
    ],
  },
];

getAllOrders = () => {
  return orders;
};

module.exports = {
  getAllOrders,
};

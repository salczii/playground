const ordersModel = require("../orders/orders.model.js");

module.exports = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders();
    },
  },
};

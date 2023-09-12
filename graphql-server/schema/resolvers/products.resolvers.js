const productsModel = require("../products/products.model.js");

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, { min, max }) => {
      return productsModel.getProductsByPrice(min, max);
    },
    productByID: (_, { id }) => {
      return productsModel.getProductByID(id);
    },
  },
  Mutation: {
    addNewProduct: (_, { id, description, price }) => {
      return productsModel.addNewProduct(id, description, price);
    },
    addReview: (_, { idProduct, rating, comment }) => {
      return productsModel.addReview(idProduct, rating, comment);
    },
  },
};

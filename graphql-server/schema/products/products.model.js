const products = [
  {
    id: "nice hat",
    description: "A very nice hat",
    price: 29.99,
    reviews: [],
  },
  {
    id: "blue t-shirt",
    description: "A blue t-shirt",
    price: 9.99,
    reviews: [],
  },
];

getAllProducts = () => {
  return products;
};

getProductsByPrice = (min, max) => {
  return products.filter(({ price }) => price >= min && price <= max);
};

getProductByID = (id) => {
  return products.find((product) => product.id === id);
};

addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};

addReview = (idProduct, rating, comment) => {
  const product = getProductByID(idProduct);
  const review = { rating, comment };
  product.reviews.push(review);
  return review;
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductByID,
  addNewProduct,
  addReview,
};

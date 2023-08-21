//דאל - האפסנאי
const jsonfile = require("jsonfile");
const filePath = "C:/Users/User/Documents/new server/Product/product.json";

//שליחת כל המשתמשים
const getProducts = async () => {
  try {
    const products = await jsonfile.readFile(filePath);
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};

//שליחה לג'ייסון
const addProduct = (product) => {
  try {
    jsonfile.writeFile(filePath, product);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  getProducts,
  addProduct,
};
//////////////////////////////////////////////////////////

//סרביסס - הלוגיקה
const productDal = require("./dalproduct");
const axios = require("axios");

//פונקציה מחזירה רשימת מוצרים
const getProducts = async () => {
  try {
    const products = await productDal.getProducts();
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};
//החזרת מוצר ספציפי
const getProductsById = async (id) => {
  try {
    const products = await productDal.getProducts();
    let product;
    products.forEach((prodactalias) => {
      if (prodactalias.id === id) {
        product = prodactalias;
      }
    });
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};
//יצירת מוצר חדש
const addProduct = async (newProduct) => {
  try {
    const products = await productDal.getProducts();
    products.push(newProduct);
    productDal.addProduct(products);
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};

//עדכון מוצר קיים
const updateProduct = async (update, id) => {
  try {
    const products = await productDal.getProducts();
    const index = products.findIndex((prod) => prod.id === id);
    products[index] = { ...products[index], ...update };
    productDal.addProduct(products);
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};
// מחיקת מוצר קיים
const deleteProduct = async (id) => {
  try {
    const products = await productDal.getProducts();
    const index = products.findIndex((prod) => prod.id === id);
    products.splice(index, 1);
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};
// הוספה והחסרת כמות
const addOrConsAmount = async (id, number) => {
  try {
    const products = await productDal.getProducts();
    const index = products.findIndex((prod) => prod.id === id);
    let intNumber = Number(number);
    products[index].quantity = +intNumber;
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};
///קריאה מקובץ חיצוני
const outsiderData = (url) => {
  axios
    .get(url)
    .then((response) => {
      const jsonData = response.data;
      productDal.addProduct(jsonData);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

module.exports = {
  getProducts,
  getProductsById,
  addProduct,
  updateProduct,
  deleteProduct,
  addOrConsAmount,
  outsiderData,
};
///////////////////////////////

//קובץ קונטרולר עבור המוצרים
const productServices = require("./servicesProduct");
const {
  handelError,
} = require("C:/Users/User/Documents/new server/errorhandler.js");

//פונקציה מחזירה רשימת מוצרים
const getProducts = async (req, res) => {
  try {
    const products = await productServices.getProducts();
    res.send(products);
  } catch (error) {
    handelError(res, 500, error.message);
  }
};
//החזרת מוצר ספציפי
const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productServices.getProductsById(id);
    res.send(product);
  } catch (error) {
    handelError(res, 500, error.message);
  }
};
//יצירת מוצר חדש
const addProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    await productServices.addProduct(newProduct);
    res.send("your request complete!");
  } catch (error) {
    handelError(res, 500, error.message);
  }
};
//עדכון מוצר קיים
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    await productServices.updateProduct(update, id);
    res.send("your request to update had complete!");
  } catch (error) {
    handelError(res, 500, error.message);
  }
};
// מחיקת מוצר קיים
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productServices.deleteProduct(id);
    res.send("your reqeuest to delete had complete!");
  } catch (error) {
    handelError(res, 500, error.message);
  }
};

// הוספה והחסרת כמות
const addOrConsAmount = async (req, res) => {
  try {
    const { id } = req.params;
    const number = req.body;
    await productServices.addOrConsAmount(id, number);
    res.send("your request to change quantity had complete!");
  } catch (error) {
    handelError(res, 500, error.message);
  }
};

//ייצוא הקונטרולר
module.exports = {
  getProducts,
  getProductsById,
  addProduct,
  updateProduct,
  deleteProduct,
  addOrConsAmount,
};
////////////////////////////////////

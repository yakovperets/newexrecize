//קובץ הראוטר עבור המוצרים
const express = require("express");
//ייבוא המחלקה ראוטר
const routerProduct = express.Router();
//חילוץ הפונקציות מהקונטרולר
const {
  getProducts,
  getProductsById,
  addProduct,
  updateProduct,
  deleteProduct,
  addOrConsAmount,
} = require("./controllerProduct");
//מחזיר רשימה של כל המוצרים
routerProduct.get("/all", getProducts);
//החזרת מוצר ספציפי
routerProduct.get("/:id", getProductsById);
//יצירת מוצר חדש
routerProduct.post("/newproduct", addProduct);
//עדכון מוצר קיים
routerProduct.put("/updateproduct/:id", updateProduct);
// מחיקת מוצר קיים
routerProduct.delete("/deleteproduct/:id", deleteProduct);
// הוספה והחסרת כמות
routerProduct.put("/amountofproduct/:id/:number", addOrConsAmount);
//ייצוא הראוטר לאפליקציה
module.exports = routerProduct;

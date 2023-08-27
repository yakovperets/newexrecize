//קובץ האפליקציה הראשי
const express = require("express");
const morgan = require("./logger/logger");
const cors = require("cors");
//ייבוא הראוטרים
const { routerProducts, routerUsers } = require("./router/router");
//יבוא הסרביסר שקורא משרת חיצוני
const productServices = require("./Product/servicesProduct");
//הפעלת אקספרס
const app = express();
//נתינת יכולת לשרת לקרוא קבצי טקסט וג'ייסון
app.use(express.json());
app.use(express.text());
cors({ origin: "http//localhost:3000", optionsSuccessStatus: 200 });
app.use(cors);

//מידל-וורס שיפעילו את הנתבים
app.use("/product", routerProducts);
app.use("/users", routerUsers);
//מורגן מידלוור
app.use(morgan("dev"));

//ניהול שגיאות כלליות
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: errorMessage });
});
//ניהול שכיאות בשלב היירוט
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: errorMessage });
});
//האזנה והרצת קריאה מתיקייה
let hasDataBeenFetched = false;
app.listen(3000, () => {
  if (!hasDataBeenFetched) {
    productServices.outsiderData("https://fakestoreapi.com/products");
    hasDataBeenFetched = true;
  }
});

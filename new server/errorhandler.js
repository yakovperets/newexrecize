const handelError = (res, status, message = "") => {
  console.log(message);
  return res.status(status).send(message);
};

module.exports = { handelError };

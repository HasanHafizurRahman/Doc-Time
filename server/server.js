const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");

// confige dotenv
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World!",
  });
});

// PORT
const PORT = process.env.PORT || 5000;

// listenning port
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} on port ${process.env.PORT}`
      .yellow.bold
  );
});

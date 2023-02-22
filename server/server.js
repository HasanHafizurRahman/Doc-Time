const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// confige dotenv
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/user", require("./routes/useRoutes"));

// PORT
const PORT = process.env.PORT || 5000;

// listenning port
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} on port ${process.env.PORT}`
      .yellow.bold
  );
});

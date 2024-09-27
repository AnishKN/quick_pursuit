const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//import routes
const authRoutes = require('./routes/auth')

require("dotenv").config();

const app = express();
app.use(cors(['*']));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

//use routes
app.use("/auth", authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

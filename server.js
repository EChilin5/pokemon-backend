require("dotenv").config();

const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const pokemonRoutes = require("./routes/pokemon-routes");

// express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/pokemon", pokemonRoutes);

// connect to db
const port = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app
      .listen(port, "0.0.0.0", () => {
        console.log(`Server is listening on port ${port}`);
      })
      .on("error", (err) => {
        console.error("Error starting on server:", err);
      });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB");
  });

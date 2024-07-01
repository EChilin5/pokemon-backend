const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema Model
// name, image, description

const pokemonSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("pokemon", pokemonSchema);

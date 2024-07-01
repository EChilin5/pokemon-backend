const express = require("express");

const {
  getPokemon,
  getSinglePokemon,
  postPokemon,
  deletePokemon,
} = require("../controllers/pokemon-controller");

const router = express.Router();

//get all pokemon
router.get("/", getPokemon);

// get single pokemon
router.get("/singlepokemon/:id", getSinglePokemon);

// create pokemon routes
router.post("/create-pokemon", postPokemon);

// delete a pokemon
router.delete("/delete-pokemon/:id", deletePokemon);

module.exports = router;

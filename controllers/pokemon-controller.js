const Pokemon = require("../models/pokemon-models");
const mongoose = require("mongoose");

// get request
// pull the data from the database from
// use find to pull the data
// send a 200 code when it's successful
const getPokemon = async (req, res, next) => {
  try {
    // pull the latest item in descending order
    const pokemon = await Pokemon.find({}).sort({ createdAt: 1 });
    // check to see if request was working properly
    res.status(200).send({
      payload: pokemon,
      message: "Success",
    });
  } catch (error) {
    console.log(error);
  }
};

// get a specific pokemon Id
const getSinglePokemon = async (req, res, next) => {
  try {
    // get the id from the front end request
    const { id } = req.params;

    // look through the database for the pokemon associated with the pokemon id
    const individualPokemon = await Pokemon.findById(id);
    // send request with the 200
    // that content was uploaded successfully
    res.status(200).send({
      payload: individualPokemon,
      message: "Success",
    });
  } catch (error) {
    console.log(error);
  }
};

// post request
const postPokemon = async (req, res, next) => {
  try {
    const { name, image, description } = req.body;
    // take the information from the frontend to the backend
    const pokemon = await Pokemon.create({ name, image, description });

    // send the post request to single item id
    res.status(200).send({
      payload: pokemon,
      message: "pokemon posted",
    });
  } catch (error) {
    console.log(error);
  }
};

// delete a specific pokemon Id
const deletePokemon = async (req, res, next) => {
  try {
    // get the id from the front end request
    const { id } = req.params;

    // look through the database for the pokemon associated with the pokemon id
    const individualPokemon = await Pokemon.findByIdAndDelete(id);
    // send request with the 200
    // that content was uploaded successfully
    res.status(200).send({
      message: "deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPokemon,
  getSinglePokemon,
  postPokemon,
  deletePokemon,
};

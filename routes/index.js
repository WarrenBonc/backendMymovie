var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const API_KEY = "6ada687a8dea1123afb41b662b218732";

router.get("/movies", function (req, res) {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Réponse de l'API :", data);
      res.status(200).json({ movies: data.results || [] });
    });
});

module.exports = router;

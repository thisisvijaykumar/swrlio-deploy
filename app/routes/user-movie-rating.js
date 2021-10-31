"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRatingByUserRoute = void 0;
var express = require("express");
var user_movie_rating_controller_1 = require("../controllers/user-movie-rating.controller");
exports.movieRatingByUserRoute = express.Router();
exports.movieRatingByUserRoute.post("/movie/:movie_id", user_movie_rating_controller_1.default.addMovieRating);
exports.movieRatingByUserRoute.post("/bulk/movies", user_movie_rating_controller_1.default.addBulkMovieRating);

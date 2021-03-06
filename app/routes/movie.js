"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieAuthorizedRoute = void 0;
var express = require("express");
var movie_controller_1 = require("../controllers/movie.controller");
exports.movieAuthorizedRoute = express.Router();
exports.movieAuthorizedRoute.get("/all", movie_controller_1.default.getAllMovies);
exports.movieAuthorizedRoute.get("/rated-list", movie_controller_1.default.getMyListOfMovies);

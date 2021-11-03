"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./../app/routes/auth");
var movie_1 = require("../app/routes/movie");
var user_movie_rating_1 = require("../app/routes/user-movie-rating");
var user_1 = require("../app/middlewares/user");
var movie_2 = require("../app/middlewares/movie");
var Routes = function (app) {
    app.use("/api/ratings", user_1.default, user_movie_rating_1.movieRatingByUserRoute);
    app.use("/api/movies", movie_2.default, movie_1.movieAuthorizedRoute);
    app.use("/api/user", user_1.default, user_movie_rating_1.movieRatingByUserRoute);
    app.use("/api/auth", auth_1.authRoute);
};
exports.default = Routes;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var middlewares_1 = require("./../app/middlewares");
var auth_1 = require("./../app/routes/auth");
var movie_1 = require("../app/routes/movie");
var user_movie_rating_1 = require("../app/routes/user-movie-rating");
var Routes = function (app) {
    app.use("/api/ratings", middlewares_1.default.validate, user_movie_rating_1.movieRatingByUserRoute);
    app.use("/api/movies/noauth", movie_1.movieUnauthorizedRoute);
    app.use("/api/movies/auth", middlewares_1.default.validate, movie_1.movieAuthorizedRoute);
    app.use("/api/user", middlewares_1.default.validate, user_movie_rating_1.movieRatingByUserRoute);
    app.use("/api/auth", auth_1.authRoute);
};
exports.default = Routes;

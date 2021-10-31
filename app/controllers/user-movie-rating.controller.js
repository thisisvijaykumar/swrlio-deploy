"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var user_movie_rating_service_1 = require("../services/user-movie-rating.service");
var MovieRatingSchema = Joi.object({
    user_id: Joi.string().required(),
    movie_id: Joi.string().required(),
    user_rating: Joi.number().required(),
});
var MovieRatingByUserCtrl = (function () {
    function MovieRatingByUserCtrl() {
    }
    MovieRatingByUserCtrl.addMovieRating = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var input, validateResult, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = {
                            user_id: req["user_id"],
                            movie_id: req.body.movie_id,
                            user_rating: req.body.user_rating,
                        };
                        console.log(input, "input");
                        validateResult = MovieRatingSchema.validate(input);
                        if (!validateResult.error) return [3, 1];
                        res.status(401).send({
                            code: 401,
                            msg: "input details are wrong",
                        });
                        return [3, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, user_movie_rating_service_1.default.addMovieRating(input)];
                    case 2:
                        data = _a.sent();
                        res.status(200).send({
                            data: data,
                            msg: "Successfully user rated movie",
                        });
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        res.status(400).send({
                            code: 400,
                            msg: "Something went wrong",
                            error: error_1,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    MovieRatingByUserCtrl.addBulkMovieRating = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var ratings, data, _i, ratings_1, rating, item, item, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ratings = req.body.ratings;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        data = [];
                        _i = 0, ratings_1 = ratings;
                        _a.label = 2;
                    case 2:
                        if (!(_i < ratings_1.length)) return [3, 7];
                        rating = ratings_1[_i];
                        if (!!rating.user_rating_id) return [3, 4];
                        return [4, user_movie_rating_service_1.default.addMovieRating({
                                user_id: req["user_id"],
                                movie_id: rating.movie_id,
                                user_rating: rating.user_rating,
                            })];
                    case 3:
                        item = _a.sent();
                        data.push(__assign(__assign({}, item), { dataIndex: rating.dataIndex }));
                        return [3, 6];
                    case 4: return [4, user_movie_rating_service_1.default.updateMovieRating({
                            user_rating: rating.user_rating,
                            id: rating.user_rating_id,
                        })];
                    case 5:
                        item = _a.sent();
                        data.push(__assign(__assign({}, item), { dataIndex: rating.dataIndex }));
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3, 2];
                    case 7:
                        res.status(200).send({
                            data: data,
                            msg: "Successfully user rated movies",
                        });
                        return [3, 9];
                    case 8:
                        error_2 = _a.sent();
                        res.status(400).send({
                            code: 400,
                            msg: "Something went wrong",
                            error: error_2,
                        });
                        return [3, 9];
                    case 9: return [2];
                }
            });
        });
    };
    MovieRatingByUserCtrl.getUserRatingByMovie = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var schema, options, validateResult, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        schema = Joi.object({
                            movie_id: Joi.string().required(),
                            user_id: Joi.string().required(),
                        });
                        options = {
                            movie_id: req.params.movie_id,
                            user_id: req["user_id"],
                        };
                        validateResult = schema.validate(options);
                        if (!validateResult.error) return [3, 1];
                        res.status(401).send({
                            code: 401,
                            msg: "input details are wrong",
                        });
                        return [3, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, user_movie_rating_service_1.default.getMovieRating(options)];
                    case 2:
                        data = _a.sent();
                        res.status(200).send({
                            data: data,
                            msg: "Successfully retreived movie rating",
                        });
                        return [3, 4];
                    case 3:
                        error_3 = _a.sent();
                        res.status(400).send({
                            code: 400,
                            msg: "Something went wrong",
                            error: error_3,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    return MovieRatingByUserCtrl;
}());
exports.default = MovieRatingByUserCtrl;

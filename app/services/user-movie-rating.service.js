"use strict";
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
var movie_1 = require("../models/movie");
var user_movie_rating_1 = require("../models/user_movie_rating");
var MovieRatingByUserService = (function () {
    function MovieRatingByUserService() {
    }
    MovieRatingByUserService.addMovieRating = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var movie, rating, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, movie_1.default.findOneOrFail({ id: data.movie_id })];
                    case 1:
                        movie = _a.sent();
                        data["movie"] = movie;
                        console.log(data, "addMovieRating");
                        return [4, user_movie_rating_1.default.save(data)];
                    case 2:
                        rating = _a.sent();
                        if (rating === null || rating === void 0 ? void 0 : rating.movie) {
                            delete rating.movie;
                        }
                        return [2, rating];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2];
                }
            });
        });
    };
    MovieRatingByUserService.updateMovieRating = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var value, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4, user_movie_rating_1.default.update({ id: data === null || data === void 0 ? void 0 : data.id }, { user_rating: data.user_rating })];
                    case 1: return [4, (_a.sent())];
                    case 2:
                        _a.sent();
                        return [4, user_movie_rating_1.default.findOneOrFail({ id: data === null || data === void 0 ? void 0 : data.id })];
                    case 3:
                        value = _a.sent();
                        console.log(value, "updateMovieRating");
                        return [2, value];
                    case 4:
                        err_1 = _a.sent();
                        return [2, err_1];
                    case 5: return [2];
                }
            });
        });
    };
    MovieRatingByUserService.getMovieRating = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var value, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, user_movie_rating_1.default.findOne(options)];
                    case 1:
                        value = _a.sent();
                        return [2, value];
                    case 2:
                        err_2 = _a.sent();
                        return [2, err_2];
                    case 3: return [2];
                }
            });
        });
    };
    return MovieRatingByUserService;
}());
exports.default = MovieRatingByUserService;

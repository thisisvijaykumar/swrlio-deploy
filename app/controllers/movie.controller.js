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
var movie_service_1 = require("../services/movie.service");
var MovieCtrl = (function () {
    function MovieCtrl() {
    }
    MovieCtrl.getAllMovies = function (req, res) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function () {
            var data, options, error_1;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _j.trys.push([0, 5, , 6]);
                        console.log("api call");
                        data = void 0;
                        if (!req["user_id"]) return [3, 2];
                        options = {
                            limit: (_a = req.query.limit) !== null && _a !== void 0 ? _a : 50,
                            query: (_b = req.query.query) !== null && _b !== void 0 ? _b : "",
                            order: (_c = req.query.order) !== null && _c !== void 0 ? _c : "ASC",
                            start: (_d = req.query.start) !== null && _d !== void 0 ? _d : 0,
                            user_id: req["user_id"],
                        };
                        console.log(req.query, "api films call");
                        return [4, movie_service_1.default.getMoviesWithUserRating(options)];
                    case 1:
                        data = _j.sent();
                        return [3, 4];
                    case 2: return [4, movie_service_1.default.getAllMovies({
                            limit: (_e = req.query.limit) !== null && _e !== void 0 ? _e : 50,
                            query: (_f = req.query.query) !== null && _f !== void 0 ? _f : "",
                            order: (_g = req.query.order) !== null && _g !== void 0 ? _g : "ASC",
                            start: (_h = req.query.start) !== null && _h !== void 0 ? _h : 0,
                        })];
                    case 3:
                        data = _j.sent();
                        _j.label = 4;
                    case 4:
                        res.status(200).send(__assign(__assign({}, data), { msg: "Successfully retreived movies" }));
                        return [3, 6];
                    case 5:
                        error_1 = _j.sent();
                        res.status(400).send({
                            code: 400,
                            msg: "Something went wrong",
                            error: error_1,
                        });
                        return [3, 6];
                    case 6: return [2];
                }
            });
        });
    };
    MovieCtrl.getMoviesWithUserRating = function (req, res) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var options, data, error_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        options = {
                            limit: (_a = req.query.limit) !== null && _a !== void 0 ? _a : 50,
                            query: (_b = req.query.query) !== null && _b !== void 0 ? _b : "",
                            order: (_c = req.query.order) !== null && _c !== void 0 ? _c : "ASC",
                            start: (_d = req.query.start) !== null && _d !== void 0 ? _d : 0,
                            user_id: req["user_id"],
                        };
                        console.log(req.query, "api films call");
                        return [4, movie_service_1.default.getMoviesWithUserRating(options)];
                    case 1:
                        data = _e.sent();
                        res.status(200).send(__assign(__assign({}, data), { msg: "Successfully retreived movies" }));
                        return [3, 3];
                    case 2:
                        error_2 = _e.sent();
                        res.status(400).send({
                            code: 400,
                            msg: "Something went wrong",
                            error: error_2,
                        });
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    MovieCtrl.getMyListOfMovies = function (req, res) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var options, data, error_3;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        options = {
                            limit: (_a = req.query.limit) !== null && _a !== void 0 ? _a : 50,
                            query: (_b = req.query.query) !== null && _b !== void 0 ? _b : "",
                            order: (_c = req.query.order) !== null && _c !== void 0 ? _c : "ASC",
                            start: (_d = req.query.start) !== null && _d !== void 0 ? _d : 0,
                            user_id: req["user_id"],
                        };
                        console.log(req.query, "api films call");
                        return [4, movie_service_1.default.getMyListOfMovies(options)];
                    case 1:
                        data = _e.sent();
                        res.status(200).send(__assign(__assign({}, data), { msg: "Successfully retreived movies" }));
                        return [3, 3];
                    case 2:
                        error_3 = _e.sent();
                        res.status(400).send({
                            code: 400,
                            msg: "Something went wrong",
                            error: error_3,
                        });
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    return MovieCtrl;
}());
exports.default = MovieCtrl;

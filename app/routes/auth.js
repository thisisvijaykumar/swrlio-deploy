"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
var express = require("express");
var auth_1 = require("../controllers/auth");
exports.authRoute = express.Router();
exports.authRoute.post("/login", auth_1.default.login);
exports.authRoute.post("/signup", auth_1.default.signup);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var Environment = function () {
    dotenv.config();
    dotenv.config({ path: process.env.ENV === "production" ? "../.env" : "../../.env" });
};
exports.default = Environment;

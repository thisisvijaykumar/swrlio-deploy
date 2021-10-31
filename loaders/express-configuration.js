"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ExpressConfiguration = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({
        extended: false,
    }));
};
exports.default = ExpressConfiguration;

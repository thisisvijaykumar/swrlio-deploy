"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compression = require("compression");
var cors = require("cors");
var helmet = require("helmet");
var Security = function (app) {
    app.use(cors());
    app.use(helmet());
    app.use(compression());
};
exports.default = Security;

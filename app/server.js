"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express = require("express");
var database_1 = require("../loaders/database");
var environment_1 = require("../loaders/environment");
var express_configuration_1 = require("../loaders/express-configuration");
var routers_1 = require("../loaders/routers");
var security_1 = require("../loaders/security");
console.time("Server Start time");
var path = require("path");
var static_path = path.join(__dirname, "../client");
var argv = require("minimist")(process.argv.slice(2));
var app = express();
var http = require("http");
var server = http.Server(app);
(0, environment_1.default)();
(0, express_configuration_1.default)(app);
(0, security_1.default)(app);
(0, database_1.default)();
(0, routers_1.default)(app);
app.use("/client", express.static(static_path));
app.use("*", express.static(static_path));
process.on("uncaughtException", function (e) {
    console.error(e);
    process.exit(1);
});
process.on("unhandledRejection", function (e) {
    console.error(e);
    process.exit(1);
});
var port = process.env.PORT || argv.port || 9090;
if (argv && argv.port) {
    port = argv.port;
}
if (process.env.APP_MODE === "dev") {
    server.listen(port, function () {
        console.timeEnd("Server Start time");
        console.info("Backend sever start at localhost:" + port);
    });
}
else {
    server.listen(port, function () {
        console.timeEnd("Server Start time");
        console.info("Backend sever start at localhost:" + port);
    });
}

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
var auth_service_1 = require("../services/auth.service");
var AuthCtrl = (function () {
    function AuthCtrl() {
    }
    AuthCtrl.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var schema, input, validateResult, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        schema = Joi.object({
                            email: Joi.string().required(),
                            password: Joi.string().required(),
                        });
                        input = {
                            email: req.body.email,
                            password: req.body.password,
                        };
                        validateResult = schema.validate(input);
                        if (!validateResult.error) return [3, 1];
                        res.status(401).send({
                            code: 401,
                            msg: "email and password is required",
                        });
                        return [3, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, auth_service_1.default.login(input)];
                    case 2:
                        data = _a.sent();
                        res.status(200).send(__assign(__assign({}, data), { message: "Successfully logged in" }));
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        res.status(400).send({
                            code: 400,
                            msg: "Bad Credentials",
                            error: error_1,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    AuthCtrl.signup = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var schema, input, validateResult, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        schema = Joi.object({
                            password: Joi.string().required(),
                            email: Joi.string().required(),
                            name: Joi.string().required(),
                            profile_photo: Joi.string().allow("", null),
                        });
                        input = {
                            password: req.body.password,
                            name: req.body.name,
                            email: req.body.email,
                            profile_photo: req.body.profile_photo,
                        };
                        console.log(input, "signup");
                        validateResult = schema.validate(input);
                        if (!validateResult.error) return [3, 1];
                        res.status(403).send({
                            code: 401,
                            msg: "Input details are wrong",
                            error: validateResult.error,
                        });
                        return [3, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, auth_service_1.default.signup(input)];
                    case 2:
                        data = _a.sent();
                        res.status(200).send(__assign(__assign({}, data), { msg: "Successfully user created" }));
                        return [3, 4];
                    case 3:
                        error_2 = _a.sent();
                        res.status(400).send({
                            code: 400,
                            msg: "Somthing went wrong",
                            error: error_2,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    return AuthCtrl;
}());
exports.default = AuthCtrl;

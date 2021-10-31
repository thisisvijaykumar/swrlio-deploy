"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var questions_1 = require("./questions");
var QuestionUser = (function (_super) {
    __extends(QuestionUser, _super);
    function QuestionUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], QuestionUser.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], QuestionUser.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return questions_1.default; }, function (questions) { return questions.user; }, { cascade: true }),
        __metadata("design:type", Array)
    ], QuestionUser.prototype, "questions", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp", default: function () { return "CURRENT_TIMESTAMP"; } }),
        __metadata("design:type", String)
    ], QuestionUser.prototype, "created_on", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Object)
    ], QuestionUser.prototype, "updated_on", void 0);
    QuestionUser = __decorate([
        (0, typeorm_1.Entity)()
    ], QuestionUser);
    return QuestionUser;
}(typeorm_1.BaseEntity));
exports.default = QuestionUser;

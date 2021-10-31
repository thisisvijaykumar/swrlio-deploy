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
var category_1 = require("./category");
var question_user_1 = require("./question_user");
var Question = (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Question.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Question.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function (type) { return category_1.default; }, function (categories) { return categories.questions; }, { cascade: true }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Question.prototype, "categories", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return question_user_1.default; }, function (questionuser) { return questionuser.questions; }),
        __metadata("design:type", question_user_1.default)
    ], Question.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp", default: function () { return "CURRENT_TIMESTAMP"; } }),
        __metadata("design:type", String)
    ], Question.prototype, "created_on", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Object)
    ], Question.prototype, "updated_on", void 0);
    Question = __decorate([
        (0, typeorm_1.Entity)()
    ], Question);
    return Question;
}(typeorm_1.BaseEntity));
exports.default = Question;

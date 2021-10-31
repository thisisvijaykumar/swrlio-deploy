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
var movie_1 = require("./movie");
var UserMovieRating = (function (_super) {
    __extends(UserMovieRating, _super);
    function UserMovieRating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], UserMovieRating.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "uuid" }),
        __metadata("design:type", String)
    ], UserMovieRating.prototype, "movie_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "uuid" }),
        __metadata("design:type", String)
    ], UserMovieRating.prototype, "user_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "float" }),
        __metadata("design:type", Number)
    ], UserMovieRating.prototype, "user_rating", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return movie_1.default; }, function (movie) { return movie.user_rating; }),
        __metadata("design:type", movie_1.default)
    ], UserMovieRating.prototype, "movie", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp", default: function () { return "CURRENT_TIMESTAMP"; } }),
        __metadata("design:type", String)
    ], UserMovieRating.prototype, "created_on", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Object)
    ], UserMovieRating.prototype, "updated_on", void 0);
    UserMovieRating = __decorate([
        (0, typeorm_1.Entity)()
    ], UserMovieRating);
    return UserMovieRating;
}(typeorm_1.BaseEntity));
exports.default = UserMovieRating;

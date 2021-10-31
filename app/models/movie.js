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
var genre_1 = require("./genre");
var movie_crew_1 = require("./movie_crew");
var user_movie_rating_1 = require("./user_movie_rating");
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Movie.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Movie.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Movie.prototype, "release_year", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Movie.prototype, "poster", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "float", default: 0 }),
        __metadata("design:type", Number)
    ], Movie.prototype, "average_rating", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Movie.prototype, "no_of_votes", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return genre_1.default; }, function (genres) { return genres.movies; }, { cascade: true }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Movie.prototype, "genres", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return movie_crew_1.default; }, function (crew) { return crew.movie; }, { cascade: true }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Movie.prototype, "crew", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return user_movie_rating_1.default; }, function (user) { return user.movie; }),
        __metadata("design:type", Array)
    ], Movie.prototype, "user_rating", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp", default: function () { return "CURRENT_TIMESTAMP"; } }),
        __metadata("design:type", String)
    ], Movie.prototype, "created_on", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Object)
    ], Movie.prototype, "updated_on", void 0);
    Movie = __decorate([
        (0, typeorm_1.Entity)()
    ], Movie);
    return Movie;
}(typeorm_1.BaseEntity));
exports.default = Movie;

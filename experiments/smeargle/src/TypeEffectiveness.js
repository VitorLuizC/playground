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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
exports.__esModule = true;
var Effectiveness_1 = __importDefault(require("./Effectiveness"));
var Type_1 = __importDefault(require("./Type"));
var NEUTRAL_EFFECTIVENESSES = Object.values(Type_1["default"]).reduce(function (effectivity, type) {
    var _a;
    return (__assign(__assign({}, effectivity), (_a = {}, _a[type] = Effectiveness_1["default"].EFFECTIVE, _a)));
}, {});
var TYPES_EFFECTIVENESSES = (_a = {},
    _a[Type_1["default"].NEUTRAL] = NEUTRAL_EFFECTIVENESSES,
    _a[Type_1["default"].NORMAL] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_b = {}, _b[Type_1["default"].ROCK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _b[Type_1["default"].GHOST] = Effectiveness_1["default"].NO_EFFECT, _b[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _b)),
    _a[Type_1["default"].FIRE] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_c = {}, _c[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _c[Type_1["default"].WATER] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _c[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _c[Type_1["default"].ICE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _c[Type_1["default"].BUG] = Effectiveness_1["default"].SUPER_EFFECTIVE, _c[Type_1["default"].ROCK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _c[Type_1["default"].DRAGON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _c[Type_1["default"].STEEL] = Effectiveness_1["default"].SUPER_EFFECTIVE, _c)),
    _a[Type_1["default"].WATER] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_d = {}, _d[Type_1["default"].FIRE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _d[Type_1["default"].WATER] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _d[Type_1["default"].GRASS] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _d[Type_1["default"].GROUND] = Effectiveness_1["default"].SUPER_EFFECTIVE, _d[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _d[Type_1["default"].DRAGON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _d)),
    _a[Type_1["default"].ELECTRIC] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_e = {}, _e[Type_1["default"].WATER] = Effectiveness_1["default"].SUPER_EFFECTIVE, _e[Type_1["default"].ELECTRIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _e[Type_1["default"].GRASS] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _e[Type_1["default"].GROUND] = Effectiveness_1["default"].NO_EFFECT, _e[Type_1["default"].FLYING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _e[Type_1["default"].DRAGON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _e)),
    _a[Type_1["default"].GRASS] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_f = {}, _f[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].WATER] = Effectiveness_1["default"].SUPER_EFFECTIVE, _f[Type_1["default"].GRASS] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].GROUND] = Effectiveness_1["default"].SUPER_EFFECTIVE, _f[Type_1["default"].FLYING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].BUG] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _f[Type_1["default"].DRAGON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f)),
    _a[Type_1["default"].ICE] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_g = {}, _g[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _g[Type_1["default"].WATER] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _g[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _g[Type_1["default"].ICE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _g[Type_1["default"].GROUND] = Effectiveness_1["default"].SUPER_EFFECTIVE, _g[Type_1["default"].FLYING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _g[Type_1["default"].DRAGON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _g[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _g)),
    _a[Type_1["default"].FIGHTING] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_h = {}, _h[Type_1["default"].NORMAL] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].ICE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h[Type_1["default"].FLYING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h[Type_1["default"].BUG] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].GHOST] = Effectiveness_1["default"].NO_EFFECT, _h[Type_1["default"].DARK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].STEEL] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].FAIRY] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h)),
    _a[Type_1["default"].POISON] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_j = {}, _j[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _j[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _j[Type_1["default"].GROUND] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _j[Type_1["default"].ROCK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _j[Type_1["default"].GHOST] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _j[Type_1["default"].STEEL] = Effectiveness_1["default"].NO_EFFECT, _j[Type_1["default"].FAIRY] = Effectiveness_1["default"].SUPER_EFFECTIVE, _j)),
    _a[Type_1["default"].GROUND] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_k = {}, _k[Type_1["default"].FIRE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k[Type_1["default"].ELECTRIC] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k[Type_1["default"].GRASS] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _k[Type_1["default"].POISON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k[Type_1["default"].FLYING] = Effectiveness_1["default"].NO_EFFECT, _k[Type_1["default"].BUG] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _k[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k[Type_1["default"].STEEL] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k)),
    _a[Type_1["default"].FLYING] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_l = {}, _l[Type_1["default"].ELECTRIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _l[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _l[Type_1["default"].FIGHTING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _l[Type_1["default"].BUG] = Effectiveness_1["default"].SUPER_EFFECTIVE, _l[Type_1["default"].ROCK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _l[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _l)),
    _a[Type_1["default"].PSYCHIC] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_m = {}, _m[Type_1["default"].FIGHTING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _m[Type_1["default"].POISON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _m[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _m[Type_1["default"].DARK] = Effectiveness_1["default"].NO_EFFECT, _m[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _m)),
    _a[Type_1["default"].BUG] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_o = {}, _o[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _o[Type_1["default"].FIGHTING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].FLYING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].SUPER_EFFECTIVE, _o[Type_1["default"].GHOST] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].DARK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _o[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o)),
    _a[Type_1["default"].ROCK] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_p = {}, _p[Type_1["default"].FIRE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _p[Type_1["default"].ICE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _p[Type_1["default"].FIGHTING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _p[Type_1["default"].GROUND] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _p[Type_1["default"].FLYING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _p[Type_1["default"].BUG] = Effectiveness_1["default"].SUPER_EFFECTIVE, _p[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _p)),
    _a[Type_1["default"].GHOST] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_q = {}, _q[Type_1["default"].NORMAL] = Effectiveness_1["default"].NO_EFFECT, _q[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].SUPER_EFFECTIVE, _q[Type_1["default"].GHOST] = Effectiveness_1["default"].SUPER_EFFECTIVE, _q[Type_1["default"].DARK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _q)),
    _a[Type_1["default"].DRAGON] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_r = {}, _r[Type_1["default"].DRAGON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _r[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _r[Type_1["default"].FAIRY] = Effectiveness_1["default"].NO_EFFECT, _r)),
    _a[Type_1["default"].DARK] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_s = {}, _s[Type_1["default"].FIGHTING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _s[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].SUPER_EFFECTIVE, _s[Type_1["default"].GHOST] = Effectiveness_1["default"].SUPER_EFFECTIVE, _s[Type_1["default"].DARK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _s[Type_1["default"].FAIRY] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _s)),
    _a[Type_1["default"].STEEL] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_t = {}, _t[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _t[Type_1["default"].WATER] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _t[Type_1["default"].ELECTRIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _t[Type_1["default"].ICE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _t[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _t[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _t[Type_1["default"].FAIRY] = Effectiveness_1["default"].SUPER_EFFECTIVE, _t)),
    _a[Type_1["default"].FAIRY] = __assign(__assign({}, NEUTRAL_EFFECTIVENESSES), (_u = {}, _u[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _u[Type_1["default"].FIGHTING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _u[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _u[Type_1["default"].DRAGON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _u[Type_1["default"].DARK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _u[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _u)),
    _a);
exports["default"] = TYPES_EFFECTIVENESSES;

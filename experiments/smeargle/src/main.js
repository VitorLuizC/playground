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
var NEUTRAL_EFFECTIVENESS = Object.values(Type_1["default"]).reduce(function (effectivity, type) {
    var _a;
    return (__assign(__assign({}, effectivity), (_a = {}, _a[type] = Effectiveness_1["default"].EFFECTIVE, _a)));
}, {});
var x = (_a = {},
    _a[Type_1["default"].NEUTRAL] = NEUTRAL_EFFECTIVENESS,
    _a[Type_1["default"].NORMAL] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_b = {}, _b[Type_1["default"].ROCK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _b[Type_1["default"].GHOST] = Effectiveness_1["default"].NO_EFFECT, _b[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _b)),
    _a[Type_1["default"].FIRE] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_c = {}, _c[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _c[Type_1["default"].WATER] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _c[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _c[Type_1["default"].ICE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _c[Type_1["default"].BUG] = Effectiveness_1["default"].SUPER_EFFECTIVE, _c[Type_1["default"].ROCK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _c[Type_1["default"].DRAGON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _c[Type_1["default"].STEEL] = Effectiveness_1["default"].SUPER_EFFECTIVE, _c)),
    _a[Type_1["default"].WATER] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_d = {}, _d[Type_1["default"].FIRE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _d[Type_1["default"].WATER] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _d[Type_1["default"].GRASS] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _d[Type_1["default"].GROUND] = Effectiveness_1["default"].SUPER_EFFECTIVE, _d[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _d[Type_1["default"].DRAGON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _d)),
    _a[Type_1["default"].ELECTRIC] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_e = {}, _e[Type_1["default"].WATER] = Effectiveness_1["default"].SUPER_EFFECTIVE, _e[Type_1["default"].ELECTRIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _e[Type_1["default"].GRASS] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _e[Type_1["default"].GROUND] = Effectiveness_1["default"].NO_EFFECT, _e[Type_1["default"].FLYING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _e[Type_1["default"].DRAGON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _e)),
    _a[Type_1["default"].GRASS] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_f = {}, _f[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].WATER] = Effectiveness_1["default"].SUPER_EFFECTIVE, _f[Type_1["default"].GRASS] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].GROUND] = Effectiveness_1["default"].SUPER_EFFECTIVE, _f[Type_1["default"].FLYING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].BUG] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _f[Type_1["default"].DRAGON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _f)),
    _a[Type_1["default"].ICE] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_g = {}, _g[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _g[Type_1["default"].WATER] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _g[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _g[Type_1["default"].ICE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _g[Type_1["default"].GROUND] = Effectiveness_1["default"].SUPER_EFFECTIVE, _g[Type_1["default"].FLYING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _g[Type_1["default"].DRAGON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _g[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _g)),
    _a[Type_1["default"].FIGHTING] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_h = {}, _h[Type_1["default"].NORMAL] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].ICE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h[Type_1["default"].FLYING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h[Type_1["default"].BUG] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].GHOST] = Effectiveness_1["default"].NO_EFFECT, _h[Type_1["default"].DARK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].STEEL] = Effectiveness_1["default"].SUPER_EFFECTIVE, _h[Type_1["default"].FAIRY] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _h)),
    _a[Type_1["default"].POISON] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_j = {}, _j[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _j[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _j[Type_1["default"].GROUND] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _j[Type_1["default"].ROCK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _j[Type_1["default"].GHOST] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _j[Type_1["default"].STEEL] = Effectiveness_1["default"].NO_EFFECT, _j[Type_1["default"].FAIRY] = Effectiveness_1["default"].SUPER_EFFECTIVE, _j)),
    _a[Type_1["default"].GROUND] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_k = {}, _k[Type_1["default"].FIRE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k[Type_1["default"].ELECTRIC] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k[Type_1["default"].GRASS] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _k[Type_1["default"].POISON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k[Type_1["default"].FLYING] = Effectiveness_1["default"].NO_EFFECT, _k[Type_1["default"].BUG] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _k[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k[Type_1["default"].STEEL] = Effectiveness_1["default"].SUPER_EFFECTIVE, _k)),
    _a[Type_1["default"].FLYING] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_l = {}, _l[Type_1["default"].ELECTRIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _l[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _l[Type_1["default"].FIGHTING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _l[Type_1["default"].BUG] = Effectiveness_1["default"].SUPER_EFFECTIVE, _l[Type_1["default"].ROCK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _l[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _l)),
    _a[Type_1["default"].PSYCHIC] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_m = {}, _m[Type_1["default"].FIGHTING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _m[Type_1["default"].POISON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _m[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _m[Type_1["default"].DARK] = Effectiveness_1["default"].NO_EFFECT, _m[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _m)),
    _a[Type_1["default"].BUG] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_o = {}, _o[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].GRASS] = Effectiveness_1["default"].SUPER_EFFECTIVE, _o[Type_1["default"].FIGHTING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].FLYING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].SUPER_EFFECTIVE, _o[Type_1["default"].GHOST] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o[Type_1["default"].DARK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _o[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _o)),
    _a[Type_1["default"].ROCK] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_p = {}, _p[Type_1["default"].FIRE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _p[Type_1["default"].ICE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _p[Type_1["default"].FIGHTING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _p[Type_1["default"].GROUND] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _p[Type_1["default"].FLYING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _p[Type_1["default"].BUG] = Effectiveness_1["default"].SUPER_EFFECTIVE, _p[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _p)),
    _a[Type_1["default"].GHOST] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_q = {}, _q[Type_1["default"].NORMAL] = Effectiveness_1["default"].NO_EFFECT, _q[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].SUPER_EFFECTIVE, _q[Type_1["default"].GHOST] = Effectiveness_1["default"].SUPER_EFFECTIVE, _q[Type_1["default"].DARK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _q)),
    _a[Type_1["default"].DRAGON] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_r = {}, _r[Type_1["default"].DRAGON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _r[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _r[Type_1["default"].FAIRY] = Effectiveness_1["default"].NO_EFFECT, _r)),
    _a[Type_1["default"].DARK] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_s = {}, _s[Type_1["default"].FIGHTING] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _s[Type_1["default"].PSYCHIC] = Effectiveness_1["default"].SUPER_EFFECTIVE, _s[Type_1["default"].GHOST] = Effectiveness_1["default"].SUPER_EFFECTIVE, _s[Type_1["default"].DARK] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _s[Type_1["default"].FAIRY] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _s)),
    _a[Type_1["default"].STEEL] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_t = {}, _t[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _t[Type_1["default"].WATER] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _t[Type_1["default"].ELECTRIC] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _t[Type_1["default"].ICE] = Effectiveness_1["default"].SUPER_EFFECTIVE, _t[Type_1["default"].ROCK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _t[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _t[Type_1["default"].FAIRY] = Effectiveness_1["default"].SUPER_EFFECTIVE, _t)),
    _a[Type_1["default"].FAIRY] = __assign(__assign({}, NEUTRAL_EFFECTIVENESS), (_u = {}, _u[Type_1["default"].FIRE] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _u[Type_1["default"].FIGHTING] = Effectiveness_1["default"].SUPER_EFFECTIVE, _u[Type_1["default"].POISON] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _u[Type_1["default"].DRAGON] = Effectiveness_1["default"].SUPER_EFFECTIVE, _u[Type_1["default"].DARK] = Effectiveness_1["default"].SUPER_EFFECTIVE, _u[Type_1["default"].STEEL] = Effectiveness_1["default"].NOT_VERY_EFFECTIVE, _u)),
    _a);
var entries = Object.entries(x);
function hasNoEffect(_a) {
    var effectiveness = _a[1];
    return Object.values(effectiveness).indexOf(Effectiveness_1["default"].NO_EFFECT) !== -1;
}
var TYPES_WITH_NO_EFFECT = entries.filter(hasNoEffect).map(function (_a) {
    var type = _a[0];
    return type;
});
console.log('Types with at least one no effect: ', TYPES_WITH_NO_EFFECT);
function calcEffectivity(effectivenesses) {
    return effectivenesses.reduce(function (sum, effectiveness) {
        switch (effectiveness) {
            case Effectiveness_1["default"].SUPER_EFFECTIVE:
                return sum + 2;
            case Effectiveness_1["default"].EFFECTIVE:
                return sum + 1;
            case Effectiveness_1["default"].NOT_VERY_EFFECTIVE:
                return sum - 1;
            case Effectiveness_1["default"].NO_EFFECT:
                return sum - 2;
            default:
                return sum;
        }
    }, 0);
}
function not(predicate) {
    return function (value) { return !predicate(value); };
}
var TYPES_SORTED_BY_EFFECTIVITY = entries.filter(not(hasNoEffect)).sort(function (_a, _b) {
    var effectivenessA = _a[1];
    var effectivenessB = _b[1];
    var valuesA = Object.values(effectivenessA);
    var valuesB = Object.values(effectivenessB);
    return calcEffectivity(valuesB) - calcEffectivity(valuesA);
}).map(function (_a) {
    var type = _a[0];
    return type;
});
console.log('Types sorted by effectivity: ', TYPES_SORTED_BY_EFFECTIVITY);

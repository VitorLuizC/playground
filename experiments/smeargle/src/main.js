"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Effectiveness_1 = __importDefault(require("./Effectiveness"));
var Type_1 = __importDefault(require("./Type"));
var TypeEffectiveness_1 = __importDefault(require("./TypeEffectiveness"));
var entries = Object.entries(TypeEffectiveness_1["default"]);
function getTypesByEffectivenessAgainst(type, effectiveness) {
    return Object.entries(TypeEffectiveness_1["default"])
        .filter(function (_a) {
        var effectivenesses = _a[1];
        return effectivenesses[type] === effectiveness;
    })
        .map(function (_a) {
        var type = _a[0];
        return type;
    });
}
console.log("\n  Types with at least one \"no effect\" againt it: ", entries
    .map(function (_a) {
    var type = _a[0];
    return ({
        type: type,
        noEffectAgainstIt: getTypesByEffectivenessAgainst(type, Effectiveness_1["default"].NO_EFFECT)
    });
})
    .filter(function (x) { return x.noEffectAgainstIt.length; })
    .map(function (x) {
    return "".concat(x.type, " (").concat(x.noEffectAgainstIt.join(', '), " does \"no effect\" on it)");
}));
function toAttackScore(effectiveness) {
    switch (effectiveness) {
        case Effectiveness_1["default"].SUPER_EFFECTIVE:
            return +2;
        case Effectiveness_1["default"].EFFECTIVE:
            return +1;
        case Effectiveness_1["default"].NOT_VERY_EFFECTIVE:
            return -1;
        case Effectiveness_1["default"].NO_EFFECT:
            return -2;
        default:
            throw new Error("Unknown effectiveness \"".concat(String(effectiveness), "\""));
    }
}
function not(predicate) {
    return function (value) { return !predicate(value); };
}
console.log("\n  Types sorted by effectivity against other types, where \"super effective\" means\n  +2; \"effective\" means +1; \"not very effective\" means -1; and \"no effect\" means\n  -2: ", __spreadArray([], entries, true).sort(function (_a, _b) {
    var effectivenessA = _a[1];
    var effectivenessB = _b[1];
    function calc(effectivenesses) {
        var count = 0;
        // The 'type' in here is the defender one
        for (var type in effectivenesses) {
            count += toAttackScore(effectivenesses[type]);
        }
        return count;
    }
    return calc(effectivenessB) - calc(effectivenessA);
})
    .map(function (_a) {
    var type = _a[0];
    return type;
}));
function toAttackWithDefenseScore(attack_effectiveness, defense_effectiveness) {
    // Attack effectiveness against another type.
    switch (attack_effectiveness) {
        case Effectiveness_1["default"].NO_EFFECT:
            switch (defense_effectiveness) {
                case Effectiveness_1["default"].NO_EFFECT:
                    return 1.0;
                // Doesn't work.
                case Effectiveness_1["default"].NOT_VERY_EFFECTIVE:
                case Effectiveness_1["default"].EFFECTIVE:
                case Effectiveness_1["default"].SUPER_EFFECTIVE:
                    return 0.0;
            }
        case Effectiveness_1["default"].NOT_VERY_EFFECTIVE:
            switch (defense_effectiveness) {
                case Effectiveness_1["default"].NO_EFFECT:
                    return 2.0;
                // Doesn't work.
                case Effectiveness_1["default"].NOT_VERY_EFFECTIVE:
                case Effectiveness_1["default"].EFFECTIVE:
                case Effectiveness_1["default"].SUPER_EFFECTIVE:
                    return 0.0;
            }
        case Effectiveness_1["default"].EFFECTIVE:
            switch (defense_effectiveness) {
                case Effectiveness_1["default"].NO_EFFECT:
                    return 2.0;
                case Effectiveness_1["default"].NOT_VERY_EFFECTIVE:
                    return 1.0;
                // Doesn't work.
                case Effectiveness_1["default"].EFFECTIVE:
                case Effectiveness_1["default"].SUPER_EFFECTIVE:
                    return 0;
            }
        case Effectiveness_1["default"].SUPER_EFFECTIVE:
            switch (defense_effectiveness) {
                case Effectiveness_1["default"].NO_EFFECT:
                    return 4.0;
                case Effectiveness_1["default"].NOT_VERY_EFFECTIVE:
                    return 3.0;
                case Effectiveness_1["default"].EFFECTIVE:
                    return 2.0;
                case Effectiveness_1["default"].SUPER_EFFECTIVE:
                    return 1.0;
            }
    }
}
var CLANS = {
    VULCANIC: [Type_1["default"].FIRE],
    NATURIA: [Type_1["default"].GRASS, Type_1["default"].BUG],
    WINGEON: [Type_1["default"].FLYING, Type_1["default"].DRAGON],
    SEAVELL: [Type_1["default"].WATER, Type_1["default"].ICE],
    OREBOUND: [Type_1["default"].ROCK, Type_1["default"].GROUND],
    PSYCRAFT: [Type_1["default"].PSYCHIC, Type_1["default"].FAIRY],
    MALEFIC: [Type_1["default"].GHOST, Type_1["default"].DARK, Type_1["default"].POISON],
    IRONHARD: [Type_1["default"].STEEL],
    GARDSTRIKE: [Type_1["default"].NORMAL, Type_1["default"].FIGHTING],
    RAIBOLT: [Type_1["default"].ELECTRIC]
};
console.log("\n  Same as before, but also considers other types effectivity against it, where\n  \"no effect\" means +2; \"not very effective\" means +1; \"effective\" means -1; and\n  \"super effective\" means -2: ", __spreadArray([], entries, true).map(function (_a) {
    var attacker_type = _a[0], effectivenesses = _a[1];
    return ({
        type: attacker_type,
        advantages: Object.fromEntries(Object.entries(effectivenesses).map(function (_a) {
            var defender_type = _a[0], attack_effectiveness = _a[1];
            return [
                defender_type,
                toAttackWithDefenseScore(attack_effectiveness, TypeEffectiveness_1["default"][defender_type][attacker_type]),
            ];
        })
            .filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value >= 2;
        }))
    });
})
    .sort(function (xA, xB) {
    var calc = function (advantages) {
        return Object.values(advantages).reduce(function (sum, value) { return sum + value; }, 0);
    };
    return calc(xB.advantages) - calc(xA.advantages);
})
    .map(function (x) {
    return "".concat(x.type, " (wins against ").concat(Object.entries(x.advantages)
        .filter(function (_a) {
        var value = _a[1];
        return value > 0;
    })
        .sort(function (x0, x1) { return x1[1] - x0[1]; })
        .map(function (_a) {
        var type = _a[0], value = _a[1];
        return "".concat(type).concat('+'.repeat(value - 1));
    })
        .join(', ') || 'nothing', ")");
}));
console.log("\n  cl\u00E3s: ", Object.entries(CLANS)
    .map(function (_a) {
    var clan = _a[0], types = _a[1];
    return ({
        clan: clan,
        types: types,
        advantages: Object.fromEntries(types.flatMap(function (attacker_type) { return Object.entries(TypeEffectiveness_1["default"][attacker_type]).map(function (_a) {
            var defender_type = _a[0], attack_effectiveness = _a[1];
            return [
                defender_type,
                toAttackWithDefenseScore(attack_effectiveness, TypeEffectiveness_1["default"][defender_type][attacker_type]),
            ];
        }); })
            .sort(function (_a, _b) {
            var valueA = _a[1];
            var valueB = _b[1];
            return valueA - valueB;
        })
            .filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value >= 2;
        }))
    });
})
    .sort(function (xA, xB) {
    var calc = function (advantages) {
        return Object.values(advantages).reduce(function (sum, value) { return sum + value; }, 0);
    };
    return calc(xB.advantages) - calc(xA.advantages);
})
    .map(function (x) {
    return "".concat(x.clan, " (wins against ").concat(Object.entries(x.advantages)
        .filter(function (_a) {
        var value = _a[1];
        return value > 0;
    })
        .sort(function (x0, x1) { return x1[1] - x0[1]; })
        .map(function (_a) {
        var type = _a[0], value = _a[1];
        return "".concat(type).concat('+'.repeat(value - 1));
    })
        .join(', ') || 'nothing', ")");
}));
console.log("cl\u00E3s em divis\u00E3o de hunt: ", Object.entries(CLANS)
    .map(function (_a) {
    var clan = _a[0], types = _a[1];
    return ({
        clan: clan,
        types: types,
        advantages: Object.fromEntries(types.flatMap(function (attacker_type) { return Object.entries(TypeEffectiveness_1["default"][attacker_type]).map(function (_a) {
            var defender_type = _a[0], attack_effectiveness = _a[1];
            return [
                defender_type,
                toAttackWithDefenseScore(attack_effectiveness, TypeEffectiveness_1["default"][defender_type][attacker_type]),
            ];
        }); })
            .sort(function (_a, _b) {
            var valueA = _a[1];
            var valueB = _b[1];
            return valueA - valueB;
        })
            .filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value >= 2;
        }))
    });
})
    .sort(function (xA, xB) {
    Object.keys(xA.advantages);
    var calc = function (advantages) {
        return Object.values(advantages).reduce(function (sum, value) { return sum + value; }, 0);
    };
    return calc(xB.advantages) - calc(xA.advantages);
})
    .map(function (x) {
    return "".concat(x.clan, " (wins against ").concat(Object.entries(x.advantages)
        .filter(function (_a) {
        var value = _a[1];
        return value > 0;
    })
        .sort(function (x0, x1) { return x1[1] - x0[1]; })
        .map(function (_a) {
        var type = _a[0], value = _a[1];
        return "".concat(type).concat('+'.repeat(value - 1));
    })
        .join(', ') || 'nothing', ")");
}));
// .map(([type]) => ({
//   type,
//   noEffectAgainstIt: getTypesByEffectivenessAgainst(
//     type,
//     Effectiveness.NO_EFFECT,
//   ),
// }))
// .filter((x) => x.noEffectAgainstIt.length)
// .map(
//   (x) =>
//     `${x.type} (${x.noEffectAgainstIt.join(', ')} does "no effect" on it)`,
// )

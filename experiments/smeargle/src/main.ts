import Effectiveness from './Effectiveness';
import Type from './Type';
import TYPES_EFFECTIVENESSES, {
  TypeEffectivenesses,
} from './TypeEffectiveness';

type Entry = [Type, TypeEffectivenesses];

const entries = Object.entries(TYPES_EFFECTIVENESSES) as Entry[];

function getTypesByEffectivenessAgainst(
  type: Type,
  effectiveness: Effectiveness,
) {
  return Object.entries(TYPES_EFFECTIVENESSES)
    .filter(([, effectivenesses]) => {
      return effectivenesses[type] === effectiveness;
    })
    .map(([type]) => type as Type);
}

console.log(
  `
  Types with at least one "no effect" againt it: `,
  entries
    .map(([type]) => ({
      type,
      noEffectAgainstIt: getTypesByEffectivenessAgainst(
        type,
        Effectiveness.NO_EFFECT,
      ),
    }))
    .filter((x) => x.noEffectAgainstIt.length)
    .map(
      (x) =>
        `${x.type} (${x.noEffectAgainstIt.join(', ')} does "no effect" on it)`,
    ),
);

function toAttackScore(effectiveness: Effectiveness): number {
  switch (effectiveness) {
    case Effectiveness.SUPER_EFFECTIVE:
      return +2;
    case Effectiveness.EFFECTIVE:
      return +1;
    case Effectiveness.NOT_VERY_EFFECTIVE:
      return -1;
    case Effectiveness.NO_EFFECT:
      return -2;
    default:
      throw new Error(`Unknown effectiveness "${String(effectiveness)}"`);
  }
}

function not<T>(predicate: (value: T) => boolean): (value: T) => boolean {
  return (value: T) => !predicate(value);
}

console.log(
  `
  Types sorted by effectivity against other types, where "super effective" means
  +2; "effective" means +1; "not very effective" means -1; and "no effect" means
  -2: `,
  [...entries]
    .sort(([, effectivenessA], [, effectivenessB]) => {
      function calc(effectivenesses: TypeEffectivenesses): number {
        let count = 0;

        // The 'type' in here is the defender one
        for (const type in effectivenesses) {
          count += toAttackScore(effectivenesses[type as Type]);
        }

        return count;
      }

      return calc(effectivenessB) - calc(effectivenessA);
    })
    .map(([type]) => type),
);

function toAttackWithDefenseScore(
  attack_effectiveness: Effectiveness,
  defense_effectiveness: Effectiveness,
) {
  // Attack effectiveness against another type.
  switch (attack_effectiveness) {
    case Effectiveness.NO_EFFECT:
      switch (defense_effectiveness) {
        case Effectiveness.NO_EFFECT:
          return 1.0;

        // Doesn't work.
        case Effectiveness.NOT_VERY_EFFECTIVE:
        case Effectiveness.EFFECTIVE:
        case Effectiveness.SUPER_EFFECTIVE:
          return 0.0;
      }

    case Effectiveness.NOT_VERY_EFFECTIVE:
      switch (defense_effectiveness) {
        case Effectiveness.NO_EFFECT:
          return 2.0;

        // Doesn't work.
        case Effectiveness.NOT_VERY_EFFECTIVE:
        case Effectiveness.EFFECTIVE:
        case Effectiveness.SUPER_EFFECTIVE:
          return 0.0;
      }

    case Effectiveness.EFFECTIVE:
      switch (defense_effectiveness) {
        case Effectiveness.NO_EFFECT:
          return 2.0;

        case Effectiveness.NOT_VERY_EFFECTIVE:
          return 1.0;

        // Doesn't work.
        case Effectiveness.EFFECTIVE:
        case Effectiveness.SUPER_EFFECTIVE:
          return 0;
      }

    case Effectiveness.SUPER_EFFECTIVE:
      switch (defense_effectiveness) {
        case Effectiveness.NO_EFFECT:
          return 4.0;

        case Effectiveness.NOT_VERY_EFFECTIVE:
          return 3.0;

        case Effectiveness.EFFECTIVE:
          return 2.0;

        case Effectiveness.SUPER_EFFECTIVE:
          return 1.0;
      }
  }
}

const CLANS = {
  VULCANIC: [Type.FIRE],
  NATURIA: [Type.GRASS, Type.BUG],
  WINGEON: [Type.FLYING, Type.DRAGON],
  SEAVELL: [Type.WATER, Type.ICE],
  OREBOUND: [Type.ROCK, Type.GROUND],
  PSYCRAFT: [Type.PSYCHIC, Type.FAIRY],
  MALEFIC: [Type.GHOST, Type.DARK, Type.POISON],
  IRONHARD: [Type.STEEL],
  GARDSTRIKE: [Type.NORMAL, Type.FIGHTING],
  RAIBOLT: [Type.ELECTRIC],
}

console.log(
  `
  Same as before, but also considers other types effectivity against it, where
  "no effect" means +2; "not very effective" means +1; "effective" means -1; and
  "super effective" means -2: `,
  [...entries]
    .map(([attacker_type, effectivenesses]) => ({
      type: attacker_type,
      advantages: Object.fromEntries(
        Object.entries(effectivenesses).map(
          ([defender_type, attack_effectiveness]) =>
            [
              defender_type,
              toAttackWithDefenseScore(
                attack_effectiveness,
                TYPES_EFFECTIVENESSES[defender_type as Type][attacker_type],
              ),
            ] as const,
        )
        .filter(([_, value]) => value >= 2),
      ),
    }))
    
    .sort((xA, xB) => {
      const calc = (advantages: Record<string, number>) =>
        Object.values(advantages).reduce((sum, value) => sum + value, 0);

      return calc(xB.advantages) - calc(xA.advantages);
    })
    .map(
      (x) =>
        `${x.type} (wins against ${
          Object.entries(x.advantages)
            .filter(([, value]) => value > 0)
            .sort((x0, x1) => x1[1] - x0[1])
            .map(([type, value]) => `${type}${'+'.repeat(value - 1)}`)
            .join(', ')||'nothing'
        })`,
    ),
);

console.log(
  `
  clãs: `,
  Object.entries(CLANS)
    .map(([clan, types]) => ({
      clan,
      types: types,
      advantages: Object.fromEntries(
          types.flatMap((attacker_type) => Object.entries(TYPES_EFFECTIVENESSES[attacker_type]).map(
            ([defender_type, attack_effectiveness]) =>
              [
                defender_type,
                toAttackWithDefenseScore(
                  attack_effectiveness,
                  TYPES_EFFECTIVENESSES[defender_type as Type][attacker_type],
                ),
              ] as const,
          ))
        .sort(([,valueA], [, valueB]) => valueA - valueB)
        .filter(([_, value]) => value >= 2)
      ),
    }))
    
    .sort((xA, xB) => {
      const calc = (advantages: Record<string, number>) =>
        Object.values(advantages).reduce((sum, value) => sum + value, 0);

      return calc(xB.advantages) - calc(xA.advantages);
    })
    .map(
      (x) =>
        `${x.clan} (wins against ${
          Object.entries(x.advantages)
            .filter(([, value]) => value > 0)
            .sort((x0, x1) => x1[1] - x0[1])
            .map(([type, value]) => `${type}${'+'.repeat(value - 1)}`)
            .join(', ')||'nothing'
        })`,
    ),
);

console.log(
  `clãs em divisão de hunt: `,
  Object.entries(CLANS)
    .map(([clan, types]) => ({
      clan,
      types: types,
      advantages: Object.fromEntries(
          types.flatMap((attacker_type) => Object.entries(TYPES_EFFECTIVENESSES[attacker_type]).map(
            ([defender_type, attack_effectiveness]) =>
              [
                defender_type,
                toAttackWithDefenseScore(
                  attack_effectiveness,
                  TYPES_EFFECTIVENESSES[defender_type as Type][attacker_type],
                ),
              ] as const,
          ))
        .sort(([,valueA], [, valueB]) => valueA - valueB)
        .filter(([_, value]) => value >= 2)
      ),
    }))
    
    .sort((xA, xB) => {
      Object.keys(xA.advantages)


      const calc = (advantages: Record<string, number>) =>
        Object.values(advantages).reduce((sum, value) => sum + value, 0);

      return calc(xB.advantages) - calc(xA.advantages);
    })
    .map(
      (x) =>
        `${x.clan} (wins against ${
          Object.entries(x.advantages)
            .filter(([, value]) => value > 0)
            .sort((x0, x1) => x1[1] - x0[1])
            .map(([type, value]) => `${type}${'+'.repeat(value - 1)}`)
            .join(', ')||'nothing'
        })`,
    ),
);

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

import Effectiveness from './Effectiveness';
import Type from './Type';

type TypeEffectiveness = Record<Type, Effectiveness>;

const NEUTRAL_EFFECTIVENESS = Object.values(Type).reduce((effectivity, type) => ({
  ...effectivity,
  [type]: Effectiveness.EFFECTIVE,
}), {} as TypeEffectiveness);

const x: Record<Type, TypeEffectiveness> = {
  [Type.NEUTRAL]: NEUTRAL_EFFECTIVENESS,
  [Type.NORMAL]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.ROCK]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GHOST]: Effectiveness.NO_EFFECT,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.FIRE]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIRE]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.WATER]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GRASS]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ICE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.BUG]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ROCK]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.DRAGON]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.STEEL]: Effectiveness.SUPER_EFFECTIVE,
  },
  [Type.WATER]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIRE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.WATER]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GRASS]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ROCK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DRAGON]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.ELECTRIC]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.WATER]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ELECTRIC]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GRASS]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.NO_EFFECT,
    [Type.FLYING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DRAGON]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.GRASS]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIRE]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.WATER]: Effectiveness.SUPER_EFFECTIVE,
    [Type.GRASS]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.POISON]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.SUPER_EFFECTIVE,
    [Type.FLYING]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.BUG]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.ROCK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DRAGON]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.ICE]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIRE]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.WATER]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GRASS]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ICE]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.SUPER_EFFECTIVE,
    [Type.FLYING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DRAGON]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.FIGHTING]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.NORMAL]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ICE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.POISON]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FLYING]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.PSYCHIC]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.BUG]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.ROCK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.GHOST]: Effectiveness.NO_EFFECT,
    [Type.DARK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.SUPER_EFFECTIVE,
    [Type.FAIRY]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.POISON]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.GRASS]: Effectiveness.SUPER_EFFECTIVE,
    [Type.POISON]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.ROCK]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GHOST]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NO_EFFECT,
    [Type.FAIRY]: Effectiveness.SUPER_EFFECTIVE,
  },
  [Type.GROUND]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIRE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ELECTRIC]: Effectiveness.SUPER_EFFECTIVE,
    [Type.GRASS]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.POISON]: Effectiveness.SUPER_EFFECTIVE,
    [Type.FLYING]: Effectiveness.NO_EFFECT,
    [Type.BUG]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.ROCK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.SUPER_EFFECTIVE,
  },
  [Type.FLYING]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.ELECTRIC]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GRASS]: Effectiveness.SUPER_EFFECTIVE,
    [Type.FIGHTING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.BUG]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ROCK]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.PSYCHIC]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIGHTING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.POISON]: Effectiveness.SUPER_EFFECTIVE,
    [Type.PSYCHIC]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.DARK]: Effectiveness.NO_EFFECT,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.BUG]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIRE]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GRASS]: Effectiveness.SUPER_EFFECTIVE,
    [Type.FIGHTING]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.POISON]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FLYING]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.PSYCHIC]: Effectiveness.SUPER_EFFECTIVE,
    [Type.GHOST]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.DARK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.ROCK]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIRE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ICE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.FIGHTING]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FLYING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.BUG]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.GHOST]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.NORMAL]: Effectiveness.NO_EFFECT,
    [Type.PSYCHIC]: Effectiveness.SUPER_EFFECTIVE,
    [Type.GHOST]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DARK]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.DRAGON]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.DRAGON]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FAIRY]: Effectiveness.NO_EFFECT,
  },
  [Type.DARK]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIGHTING]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.PSYCHIC]: Effectiveness.SUPER_EFFECTIVE,
    [Type.GHOST]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DARK]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FAIRY]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.STEEL]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIRE]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.WATER]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.ELECTRIC]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.ICE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ROCK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FAIRY]: Effectiveness.SUPER_EFFECTIVE,
  },
  [Type.FAIRY]: {
    ...NEUTRAL_EFFECTIVENESS,
    [Type.FIRE]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FIGHTING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.POISON]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.DRAGON]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DARK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
};

type Entry = [Type, TypeEffectiveness];

const entries = Object.entries(x) as Entry[];

function hasNoEffect([, effectiveness]: Entry): boolean {
  return Object.values(effectiveness).indexOf(Effectiveness.NO_EFFECT) !== -1;
}

const TYPES_WITH_NO_EFFECT = entries.filter(hasNoEffect).map(([type]) => type);

console.log('Types with at least one no effect: ', TYPES_WITH_NO_EFFECT);

function calcEffectivity(effectivenesses: Effectiveness[]): number {
  return effectivenesses.reduce((sum, effectiveness) => {
    switch (effectiveness) {
      case Effectiveness.SUPER_EFFECTIVE:
        return sum + 2;
      case Effectiveness.EFFECTIVE:
        return sum + 1;
      case Effectiveness.NOT_VERY_EFFECTIVE:
        return sum - 1;
      case Effectiveness.NO_EFFECT:
        return sum - 2;
      default:
        return sum;
    }
  }, 0);
}

function not<T>(predicate: (value: T) => boolean): (value: T) => boolean {
  return (value: T) => !predicate(value);
}

const TYPES_SORTED_BY_EFFECTIVITY = entries.filter(not(hasNoEffect)).sort(
  ([, effectivenessA], [, effectivenessB]) => {
    const valuesA = Object.values(effectivenessA);
    const valuesB = Object.values(effectivenessB);

    return calcEffectivity(valuesB) - calcEffectivity(valuesA);
  }
).map(([type]) => type);

console.log('Types sorted by effectivity: ', TYPES_SORTED_BY_EFFECTIVITY);



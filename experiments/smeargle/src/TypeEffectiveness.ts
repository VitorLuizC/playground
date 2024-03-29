import Effectiveness from './Effectiveness';
import Type from './Type';

export type TypeEffectivenesses = Record<Type, Effectiveness>;

const NEUTRAL_EFFECTIVENESSES = Object.values(Type).reduce((effectivity, type) => ({
  ...effectivity,
  [type]: Effectiveness.EFFECTIVE,
}), {} as TypeEffectivenesses);

export type TypesEffectivenesses = Record<Type, TypeEffectivenesses>;

const TYPES_EFFECTIVENESSES: TypesEffectivenesses = {
  [Type.NEUTRAL]: NEUTRAL_EFFECTIVENESSES,
  [Type.NORMAL]: {
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.ROCK]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GHOST]: Effectiveness.NO_EFFECT,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.FIRE]: {
    ...NEUTRAL_EFFECTIVENESSES,
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
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.FIRE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.WATER]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GRASS]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ROCK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DRAGON]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.ELECTRIC]: {
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.WATER]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ELECTRIC]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GRASS]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.NO_EFFECT,
    [Type.FLYING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DRAGON]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.GRASS]: {
    ...NEUTRAL_EFFECTIVENESSES,
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
    ...NEUTRAL_EFFECTIVENESSES,
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
    ...NEUTRAL_EFFECTIVENESSES,
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
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.GRASS]: Effectiveness.SUPER_EFFECTIVE,
    [Type.POISON]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.ROCK]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GHOST]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NO_EFFECT,
    [Type.FAIRY]: Effectiveness.SUPER_EFFECTIVE,
  },
  [Type.GROUND]: {
    ...NEUTRAL_EFFECTIVENESSES,
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
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.ELECTRIC]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GRASS]: Effectiveness.SUPER_EFFECTIVE,
    [Type.FIGHTING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.BUG]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ROCK]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.PSYCHIC]: {
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.FIGHTING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.POISON]: Effectiveness.SUPER_EFFECTIVE,
    [Type.PSYCHIC]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.DARK]: Effectiveness.NO_EFFECT,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.BUG]: {
    ...NEUTRAL_EFFECTIVENESSES,
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
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.FIRE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ICE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.FIGHTING]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.GROUND]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FLYING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.BUG]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.GHOST]: {
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.NORMAL]: Effectiveness.NO_EFFECT,
    [Type.PSYCHIC]: Effectiveness.SUPER_EFFECTIVE,
    [Type.GHOST]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DARK]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.DRAGON]: {
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.DRAGON]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FAIRY]: Effectiveness.NO_EFFECT,
  },
  [Type.DARK]: {
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.FIGHTING]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.PSYCHIC]: Effectiveness.SUPER_EFFECTIVE,
    [Type.GHOST]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DARK]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FAIRY]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
  [Type.STEEL]: {
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.FIRE]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.WATER]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.ELECTRIC]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.ICE]: Effectiveness.SUPER_EFFECTIVE,
    [Type.ROCK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FAIRY]: Effectiveness.SUPER_EFFECTIVE,
  },
  [Type.FAIRY]: {
    ...NEUTRAL_EFFECTIVENESSES,
    [Type.FIRE]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.FIGHTING]: Effectiveness.SUPER_EFFECTIVE,
    [Type.POISON]: Effectiveness.NOT_VERY_EFFECTIVE,
    [Type.DRAGON]: Effectiveness.SUPER_EFFECTIVE,
    [Type.DARK]: Effectiveness.SUPER_EFFECTIVE,
    [Type.STEEL]: Effectiveness.NOT_VERY_EFFECTIVE,
  },
};

export default TYPES_EFFECTIVENESSES

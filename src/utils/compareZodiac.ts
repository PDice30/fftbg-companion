// From SirBraneDamuj's Mustad.io: https://github.com/SirBraneDamuj/mustadio/blob/master/client/src/constants/zodiac.js

const [
  MINMAX, GOOD, BAD
] = ['minmax', 'good', 'bad'];
const [
  CAPRICORN,
  AQUARIUS,
  PISCES,
  ARIES,
  TAURUS,
  GEMINI,
  CANCER,
  LEO,
  VIRGO,
  LIBRA,
  SCORPIO,
  SAGITTARIUS,
  SERPENTARIUS,
] = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Serpentarius'];

export const zodiacMapping = {
  [CAPRICORN]: {
      [CANCER]: MINMAX,
      [TAURUS]: GOOD,
      [VIRGO]: GOOD,
      [LIBRA]: BAD,
      [ARIES]: BAD,
  },
  [AQUARIUS]: {
      [LEO]: MINMAX,
      [GEMINI]: GOOD,
      [LIBRA]: GOOD,
      [TAURUS]: BAD,
      [SCORPIO]: BAD,
  },
  [PISCES]: {
      [VIRGO]: MINMAX,
      [CANCER]: GOOD,
      [SCORPIO]: GOOD,
      [SAGITTARIUS]: BAD,
      [GEMINI]: BAD,
  },
  [ARIES]: {
      [LIBRA]: MINMAX,
      [SAGITTARIUS]: GOOD,
      [LEO]: GOOD,
      [CANCER]: BAD,
      [CAPRICORN]: BAD,
  },
  [TAURUS]: {
      [SCORPIO]: MINMAX,
      [VIRGO]: GOOD,
      [CAPRICORN]: GOOD,
      [LEO]: BAD,
      [AQUARIUS]: BAD,
  },
  [GEMINI]: {
      [SAGITTARIUS]: MINMAX,
      [LIBRA]: GOOD,
      [AQUARIUS]: GOOD,
      [VIRGO]: BAD,
      [PISCES]: BAD,
  },
  [CANCER]: {
      [CAPRICORN]: MINMAX,
      [SCORPIO]: GOOD,
      [PISCES]: GOOD,
      [LIBRA]: BAD,
      [ARIES]: BAD,
  },
  [LEO]: {
      [AQUARIUS]: MINMAX,
      [SAGITTARIUS]: GOOD,
      [ARIES]: GOOD,
      [SCORPIO]: BAD,
      [TAURUS]: BAD,
  },
  [VIRGO]: {
      [PISCES]: MINMAX,
      [CAPRICORN]: GOOD,
      [TAURUS]: GOOD,
      [SAGITTARIUS]: BAD,
      [GEMINI]: BAD,
  },
  [LIBRA]: {
      [ARIES]: MINMAX,
      [AQUARIUS]: GOOD,
      [GEMINI]: GOOD,
      [CAPRICORN]: BAD,
      [CANCER]: BAD,
  },
  [SCORPIO]: {
      [TAURUS]: MINMAX,
      [PISCES]: GOOD,
      [CANCER]: GOOD,
      [AQUARIUS]: BAD,
      [LEO]: BAD,
  },
  [SAGITTARIUS]: {
      [GEMINI]: MINMAX,
      [ARIES]: GOOD,
      [LEO]: GOOD,
      [PISCES]: BAD,
      [VIRGO]: BAD,
  },
  [SERPENTARIUS]: {},
};

export const compareZodiac = (z1: string, gender1: string, z2: string, gender2: string) => {
  const compat = zodiacMapping[z1][z2];
  if (compat !== zodiacMapping[z2][z1]) {
      throw new Error(`zodiac compatibility issue: ${z1} ${z2}`);
  }
  if (!compat) {
      return 3;
  } else if (compat === MINMAX) {
      if (gender1 === 'Monster' || gender2 === 'Monster') {
          return 2;
      } else if (gender1 === gender2) {
          return 1;
      } else {
          return 5;
      }
  } else if (compat === GOOD) {
      return 4;
  } else if (compat === BAD) {
      return 2;
  } else {
      throw new Error(`zodiac compatibility issue: ${z1} ${z2} ${gender1} ${gender2}`);
  }
}

export const zodiacInfo = (word: string) => `Zodiac compatibility with ${word}. 1 = worst, 2 = bad, 3 = neutral, 4 = good, 5 = best`;
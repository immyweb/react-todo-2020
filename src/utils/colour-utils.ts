const tinygradient = require('tinygradient');
import tinycolor = require('tinycolor2');

export const getColourRange = (steps: number, colour?: string[] | string) => {
  if (typeof colour === 'string') {
    const singleHex = Array(steps).fill(colour);

    return singleHex;
  }
  {
    const range = tinygradient(colour);
    const variantsRGB = range.rgb(steps);

    const variantsHex = variantsRGB.map((colourRGB: string, i: number) =>
      tinycolor(colourRGB).toHexString(),
    );
    return variantsHex;
  }
};

export const getLinearGradient = (themeRange: string[] | string) => {
  if (typeof themeRange === 'string') {
    const singleHex = Array(1).fill(themeRange);

    return singleHex;
  }
  {
    const gradientHex = tinygradient(themeRange);
    return gradientHex.css();
  }
};

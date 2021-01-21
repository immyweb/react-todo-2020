export interface IAlign {
  x: string;
  y?: string;
}

export const returnTransform = (alignment: IAlign) => {
  enum alignmentConfig {
    left = '0%',
    center = '50%',
    right = '100%',
    top = '0%',
    bottom = '100%',
  }

  return {
    x: alignmentConfig[alignment.x],
    y: alignment.y ? alignmentConfig[alignment.y] : alignmentConfig.top,
  };
};

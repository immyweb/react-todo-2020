import { colours } from '../styles/colours';

export const createIconArray = (steps: number, iconName?: string[] | string) => {
  if (typeof iconName === 'string') {
    const singleIcon = Array(steps).fill(iconName);
    return singleIcon;
  }
  {
    const variantsIcon = iconName;
    return variantsIcon;
  }
};

export const covertChartData = (data: any, barColour?: any) => {
  const _data = data.map((source: any, i: number) => {
    return {
      name: source.name ? source.name : null,
      value: source.value,
      dValue: source.dValue,
      fill: barColour ? barColour[i] : colours.$main,
    };
  });

  return _data;
};

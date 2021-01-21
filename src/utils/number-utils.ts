export const percentToPx = (percentageValue: number, totalValue: number, invert: boolean) => {
  let value = (percentageValue / 100) * totalValue;

  if (invert) {
    value = -value;
  }
  return value;
};

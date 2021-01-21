let imgLoaded = 0;

export const imgsLoaded = (imgAmt: number) => {
  imgLoaded += 1;
  if (imgLoaded >= imgAmt) {
    return true;
  }
  return false;
};

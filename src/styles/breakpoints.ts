export const breakPoints = {
  $smallMobile: 411,
  $mobile: 675,
  $mobileInner: 660,
  $tabletPortrait: 980,
  $tabletLandscape: 1024,
};

export const mediaQueries = {
  smallMobile: `@media only screen and (max-width: ${breakPoints.$smallMobile}px)`,
  mobile: `@media only screen and (min-width: ${breakPoints.$mobile}px)`,
  mobileInner: `@media only screen and (min-width: ${breakPoints.$mobileInner}px)`,
  tabletPortrait: `@media only screen and (min-width: ${breakPoints.$tabletPortrait}px)`,
  tabletLandscape: `@media only screen and (min-width: ${breakPoints.$tabletLandscape}px)`,
};

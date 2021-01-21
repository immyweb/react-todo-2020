import glamorous from 'glamorous';

import { BtnNoStyle } from '../../styles/globals';
import { mediaQueries } from '../../styles/breakpoints';
import { fonts } from '../../styles/fonts';
import { colours } from '../../styles/colours';
import { ArrowPosition } from './label';

interface IGProps {
  bkgColour: string;
  bkgHoverColour?: string;
  txtColour?: string;
  arrowSide?: string;
  fontfamily?: string;
  uppercase?: boolean;
  fontSizeMobile?: number;
  fontSizeDesktop?: number;
  oneLine?: boolean;
}

export const LabelContainer = glamorous.div({
  label: 'label-container',
  position: 'relative',
});

export const LabelButton = glamorous(BtnNoStyle)<IGProps>(
  {
    label: 'label',
    position: 'relative',
    margin: 0,
    zIndex: 5,
    padding: '3px 15px',
  },
  ({ bkgColour, txtColour, fontfamily, uppercase, fontSizeMobile, fontSizeDesktop, oneLine }) => ({
    background: bkgColour,
    color: txtColour ? txtColour : colours.$white,
    textTransform: uppercase ? 'uppercase' : 'none',
    fontFamily: fontfamily ? fontfamily : fonts.$theSunHeavyCondensed,
    fontSize: fontSizeMobile ? fontSizeMobile : 16,
    whiteSpace: oneLine ? 'nowrap' : 'normal',
    [mediaQueries.tabletPortrait]: {
      fontSize: fontSizeDesktop ? fontSizeDesktop : 16,
    },
    ':hover': {
      background: bkgColour,
      cursor: 'pointer',
    },
  }),
);

export const LabelSubText = glamorous.span({
  label: 'label-sub-text',
  display: 'block',
  fontFamily: fonts.$Roboto,
  fontSize: 12,
  textTransform: 'none',
  maxWidth: 125,
  paddingBottom: 7,
});

export const LabelArrow = glamorous.div<{ arrowPosition: string; colour: string }>({
  label: 'label-arrow',
  position: 'absolute',
  zIndex: 5,
  display: 'block',
  width: 0,
  height: 0,
  borderLeft: '5px solid transparent',
  borderRight: '5px solid transparent',
  [mediaQueries.tabletPortrait]: {
    borderLeft: '7px solid transparent',
    borderRight: '7px solid transparent',
  },
});

export const LabelArrowBottom = glamorous(LabelArrow)(
  {
    label: 'label-arrow-bottom',
  },
  ({ arrowPosition, colour }) => ({
    bottom: -10,
    transform: arrowPosition === ArrowPosition.CENTER ? 'translateX(-50%)' : 'translateX(0%)',
    left: arrowPosition === ArrowPosition.LEFT ? 15 : arrowPosition === ArrowPosition.CENTER ? '50%' : 'auto',
    right: arrowPosition === ArrowPosition.RIGHT ? 15 : arrowPosition === ArrowPosition.CENTER ? '50%' : 'auto',
    borderTop: colour ? `10px solid ${colour}` : `10px solid ${colours.$black}`,
    [mediaQueries.tabletPortrait]: {
      bottom: -14,
      borderTop: colour ? `14px solid ${colour}` : `14px solid ${colours.$black}`,
    },
  }),
);

export const LabelArrowTop = glamorous(LabelArrow)(
  {
    label: 'label-arrow-top',
  },
  ({ arrowPosition, colour }) => ({
    top: -10,
    transform: arrowPosition === ArrowPosition.CENTER ? 'translateX(-50%)' : 'translateX(0%)',
    left: arrowPosition === ArrowPosition.LEFT ? 15 : arrowPosition === ArrowPosition.CENTER ? '50%' : 'auto',
    right: arrowPosition === ArrowPosition.RIGHT ? 15 : arrowPosition === ArrowPosition.CENTER ? '50%' : 'auto',
    borderBottom: colour ? `10px solid ${colour}` : `10px solid ${colours.$black}`,
    [mediaQueries.tabletPortrait]: {
      top: -14,
      borderBottom: colour ? `14px solid ${colour}` : `14px solid ${colours.$black}`,
    },
  }),
);

export const LabelArrowLeft = glamorous(LabelArrow)(
  {
    label: 'label-arrow-left',
  },
  ({ arrowPosition, colour }) => ({
    left: -10,
    transform: `rotate(-90deg) ${arrowPosition === ArrowPosition.CENTER ? 'translateX(50%)' : 'translateX(0%)'}`,
    top: arrowPosition === ArrowPosition.TOP ? 15 : arrowPosition === ArrowPosition.CENTER ? '50%' : 'auto',
    bottom: arrowPosition === ArrowPosition.BOTTOM ? 15 : arrowPosition === ArrowPosition.CENTER ? '50%' : 'auto',
    borderBottom: colour ? `10px solid ${colour}` : `10px solid ${colours.$black}`,
    [mediaQueries.tabletPortrait]: {
      left: -14,
      borderBottom: colour ? `14px solid ${colour}` : `14px solid ${colours.$black}`,
    },
  }),
);

export const LabelArrowRight = glamorous(LabelArrow)(
  {
    label: 'label-arrow-right',
  },
  ({ arrowPosition, colour }) => ({
    right: -10,
    transform: `rotate(90deg) ${arrowPosition === ArrowPosition.CENTER ? 'translateX(-50%)' : 'translateX(0%)'}`,
    top: arrowPosition === ArrowPosition.TOP ? 15 : arrowPosition === ArrowPosition.CENTER ? '50%' : 'auto',
    bottom: arrowPosition === ArrowPosition.BOTTOM ? 15 : arrowPosition === ArrowPosition.CENTER ? '50%' : 'auto',
    borderBottom: colour ? `10px solid ${colour}` : `10px solid ${colours.$black}`,
    [mediaQueries.tabletPortrait]: {
      right: -14,
      borderBottom: colour ? `14px solid ${colour}` : `14px solid ${colours.$black}`,
    },
  }),
);

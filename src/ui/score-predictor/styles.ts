import glamorous from 'glamorous';

import { colours } from '../../styles/colours';
import { transparentize } from 'polished';
import { H3, H2 } from '../typography/typography';
import { fonts } from '../../styles/fonts';
import { mediaQueries } from '../../styles/breakpoints';

interface IGProps {
  fontName?: string;
  fontAlignment?: string;
  definedWidth?: string | number;
  definedHeight?: number;
  borderLeft?: boolean;
  borderRight?: boolean;
  width?: number;
  disabled?: boolean;
  draw?: boolean;
  lose?: boolean;
  marginBottom?: number;
  errorScreen?: boolean;
  fontsize?: number;
  fontbold?: boolean;
  align?: string;
  lineheight?: number;
  tableType?: string;
}

// Predictor
export const FixtureTable = glamorous.table({
  label: 'fixture-table',
  width: '100%',
  borderSpacing: 0,
});

export const THead = glamorous.thead({
  label: 'fixture-thead',
  background: colours.$offBlack,
  color: colours.$white,
  fontSize: 14,
  fontWeight: 'normal',
});

export const THeading = glamorous.th<IGProps>(
  {
    label: 'fixture-theading',
    padding: '5px 0',
    fontFamily: fonts.$Roboto,
    textAlign: 'center',
    position: 'relative',
  },
  ({ fontAlignment, borderLeft, borderRight, definedWidth }: any) => ({
    textAlign: fontAlignment,
    borderLeft: borderLeft ? `1px solid ${colours.$white}` : 'none',
    borderRight: borderRight ? `1px solid ${colours.$white}` : 'none',
    width: definedWidth,
  }),
);

export const THBorder = glamorous.span({
  label: 'fixture-th-border',
  position: 'absolute',
  right: 0,
  color: colours.$midGrey,
  fontFamily: fonts.$Roboto,
});

export const Badge = glamorous.img<IGProps>(
  {
    label: 'fixture-badge',
    height: 30,
    width: 'auto',
    display: 'block',
    margin: '0 auto',
  },
  ({ definedWidth, draw, lose }) => ({
    width: definedWidth,
    opacity: draw || lose ? 0.3 : 1,
  }),
);

export const BadgeLabel = glamorous.span<IGProps>(
  {
    label: 'fixture-badge-label',
  },
  ({ draw, lose }) => ({
    opacity: draw || lose ? 0.3 : 1,
  }),
);

export const TrTeam = glamorous.tr<IGProps>(
  {
    label: 'fixture-tr-team',
    backgroundColor: colours.$white,
    height: 58,
    borderBottom: `1px solid ${colours.$midLightGrey}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  ({ definedHeight }: any) => ({
    height: definedHeight,
  }),
);

export const TrPrem = glamorous(TrTeam)({
  '&:nth-child(-n+5)': {
    backgroundColor: colours.$lightGrey,
  },
  '&:nth-child(4)': {
    borderBottom: `1px dashed ${colours.$midGrey}`,
  },
  '&:nth-child(5)': {
    backgroundColor: colours.$ultraLightGrey,
    borderBottom: `1px dashed ${colours.$midGrey}`,
  },
  '&:first-child': {
    backgroundColor: colours.$midLightGrey,
  },
  '&:nth-last-child(-n+3)': {
    backgroundColor: colours.$lightGrey,
  },
  '&:nth-child(17)': {
    borderBottom: `1px dashed ${colours.$midGrey}`,
  },
  '&:last-child': {
    borderBottom: `3px solid ${colours.$darkGrey}`,
  },
});

export const TrChamp = glamorous(TrTeam)({
  '&:nth-child(-n+6)': {
    backgroundColor: colours.$lightGrey,
  },
  '&:nth-child(2)': {
    backgroundColor: colours.$midLightGrey,
    borderBottom: `1px dashed ${colours.$midGrey}`,
  },
  '&:nth-child(6)': {
    borderBottom: `1px dashed ${colours.$midGrey}`,
  },
  '&:first-child': {
    backgroundColor: colours.$midLightGrey,
    borderBottom: `1px solid ${colours.$midGrey}`,
  },
  '&:nth-last-child(-n+3)': {
    backgroundColor: colours.$lightGrey,
  },
  '&:nth-child(21)': {
    borderBottom: `1px dashed ${colours.$midGrey}`,
  },
  '&:last-child': {
    borderBottom: `3px solid ${colours.$darkGrey}`,
  },
});

export const TdTeam = glamorous.td<IGProps>(
  {
    label: 'fixture-td-team',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.$theSunMedium,
    padding: '1px 0',
  },
  ({ fontAlignment, definedWidth, fontName }: any) => ({
    textAlign: fontAlignment,
    width: definedWidth,
    fontFamily: fontName,
  }),
);

export const TdCta = glamorous.td<IGProps>(
  {
    label: 'fixture-td-cta',
    textAlign: 'center',
  },
  ({ align }: any) => ({
    textAlign: align,
    [mediaQueries.tabletPortrait]: {
      textAlign: 'center',
    },
  }),
);

// Controls
export const NavHolder = glamorous.div({
  label: 'fixture-nav-holder',
  display: 'flex',
});

export const Nav = glamorous.button<IGProps>(
  {
    label: 'fixture-nav',
    textShadow: 'none',
    textDecoration: 'none',
    WebkitFontSmoothing: 'antialiased',
    background: 'none',
    display: 'inline-block',
    boxShadow: 'none',
    padding: 0,
    border: 'none',
    flexGrow: 1,
    ':focus': {
      outline: 0,
    },
  },
  ({ disabled }) => ({
    cursor: disabled ? 'default' : 'pointer',
  }),
);

export const PageIndex = glamorous.div({
  label: 'fixture-nav-index',
  textAlign: 'center',
  fontSize: 14,
  color: colours.$darkGrey,
  flexGrow: 2,
});

export const CurrentNum = glamorous.span({
  label: 'fixture-nav-index-current',
  color: colours.$football,
  fontWeight: 'bold',
});

export const SlideCount = glamorous.span({
  label: 'fixture-nav-index-total',
});

// Slides
export const SlidesContainer = glamorous.div({
  label: 'slides-container',
  width: '100%',
  overflow: 'hidden',
  borderBottom: `3px solid ${colours.$darkGrey}`,
  marginBottom: 15,
  position: 'relative',
});

// Confirmation and Error screen
export const MessageContainer = glamorous.section<IGProps>(
  {
    label: 'confirmation',
    background: transparentize(0.1, colours.$white),
    top: 0,
    textAlign: 'center',
    padding: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  ({ width, errorScreen }) => ({
    width: width ? width : '100%',
    position: errorScreen ? 'relative' : 'absolute',
  }),
);

export const Heading = glamorous(H3)<IGProps>(
  {
    fontFamily: fonts.$theSunHeavyCondensed,
    textAlign: 'center',
    fontSize: 22,
  },
  ({ marginBottom }) => ({
    marginBottom: marginBottom ? marginBottom : 5,
  }),
);

export const Copy = glamorous.p<IGProps>(
  {
    fontFamily: fonts.$theSunMedium,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  ({ fontsize, fontbold, lineheight }) => ({
    fontSize: fontsize ? fontsize : 16,
    fontWeight: fontbold ? 'bold' : 'normal',
    lineHeight: lineheight,
  }),
);

export const Graphic = glamorous.img({
  label: 'graphic',
  width: 68,
  height: 'auto',
  margin: '0 auto 10px auto',
});

// Final table

export const Headline = glamorous(H2)({
  label: 'final-table-heading',
  padding: '10px 20px',
  color: colours.$white,
  position: 'relative',
  background: colours.$football,
  marginBottom: 0,
});

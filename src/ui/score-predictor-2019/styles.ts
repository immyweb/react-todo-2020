import glamorous from 'glamorous';

import { colours } from '../../styles/colours';
import { H2 } from '../typography/typography';
import { fonts } from '../../styles/fonts';
import { BtnNoStyle } from '../../styles/globals';
import { mediaQueries } from '../../styles/breakpoints';

// Score Predictor

export const Container = glamorous.div<{ loaded: boolean }>(
  {
    position: 'relative',
    marginBottom: 40,
  },
  ({ loaded }) => ({
    height: loaded ? 'auto' : 660,
    overflow: loaded ? 'auto' : 'hidden',
  }),
);

// Intro Screen

export const MessageContainer = glamorous.section<{ width: number }>(
  {
    top: 0,
    height: '100%',
    zIndex: 10,
    position: 'absolute',
    background: colours.$white,
  },
  ({ width }) => ({
    width,
  }),
);

export const IntroBox = glamorous.div<{ background: string }>(
  {
    padding: 20,
    [mediaQueries.tabletPortrait]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  ({ background }) => ({
    background,
  }),
);

export const Heading = glamorous(H2)({
  color: colours.$white,
});

export const Copy = glamorous.p({
  fontFamily: fonts.$theSunRegular,
  marginBottom: 10,
  marginTop: 10,
  fontSize: 16,
  color: colours.$white,
});

export const Cta = glamorous(BtnNoStyle)<{
  colour: { colour: string; background: string };
  hover: { colour: string; background: string };
}>(
  {
    fontFamily: fonts.$theSunHeavyNarrow,
    fontSize: 22,
    padding: '8px 20px',
    textTransform: 'uppercase',
    minWidth: 135,
    ':hover': {
      cursor: 'pointer',
    },
  },
  ({ colour, hover }) => ({
    color: colour.colour,
    background: colour.background,
    ':hover': {
      color: hover.colour,
      background: hover.background,
    },
  }),
);

export const IntroCta = glamorous(Cta)({
  [mediaQueries.tabletPortrait]: {
    marginLeft: 20,
  },
});

export const SubmitCtaHolder = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: 20,
});

// Slides

export const SlidesContainer = glamorous.div({
  width: '100%',
  overflow: 'hidden',
  borderBottom: `3px solid ${colours.$darkGrey}`,
  marginBottom: 15,
  position: 'relative',
});

export const SlidesInner = glamorous.div<{ width?: number; currentPos?: number }>(
  {
    transitionDuration: '.5s',
    transitionTimingFunction: 'ease',
    transitionProperty: 'all',
  },
  ({ width, currentPos }) => ({
    width: width ? width : '100%',
    transform: `translate3d(${currentPos ? -currentPos : 0}px, 0, 0)`,
  }),
);

export const SlidePane = glamorous.div<{ width: number }>(
  {
    display: 'inline-block',
    verticalAlign: 'top',
  },
  ({ width }) => ({
    width: width ? width : '100%',
  }),
);

// Slide

export const SlidesHeader = glamorous.header({
  width: '100%',
  display: 'flex',
  background: colours.$black,
  padding: 7,
  color: colours.$white,
  justifyContent: 'space-around',
  fontSize: 14,
  fontFamily: fonts.$theSunRegular,
});

// Match Round

export const DateHeader = glamorous.h3<{ background: string }>(
  {
    width: '100%',
    padding: 7,
    color: colours.$white,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.$theSunRegular,
    fontWeight: 'normal',
    marginBottom: 0,
  },
  ({ background }) => ({
    background,
  }),
);

// Fixture

export const FixtureTdTeam = glamorous.td({
  textAlign: 'center',
  fontSize: 14,
  fontFamily: fonts.$theSunMedium,
  padding: '8px 0',
  width: '25%',
});

export const FixtureTdVs = glamorous.td({
  textAlign: 'center',
  fontSize: 20,
  fontFamily: fonts.$theSunRegular,
  fontStyle: 'italic',
});

export const FixtureBadge = glamorous.img({
  height: 30,
  width: 'auto',
  display: 'block',
  margin: '0 auto',
});

export const FixtureScore = glamorous.td({
  textAlign: 'center',
});

export const FixtureSelect = glamorous.select({
  width: 50,
  height: 40,
  borderRadius: 8,
  boxShadow: 'none',
  outline: 'none',
  textAlign: 'center',
  fontSize: 17,
  backgroundColor: '#F9F9F9',
  border: '1px solid #979797',
  color: '#242527',
  fontFamily: fonts.$theSunRegular,
  paddingLeft: 15,
  [mediaQueries.tabletPortrait]: {
    paddingLeft: 0,
  },
});

// Controls

export const NavHolder = glamorous.div({
  display: 'flex',
});

export const Nav = glamorous.button<{ disabled: boolean }>(
  {
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
  textAlign: 'center',
  fontSize: 14,
  color: colours.$darkGrey,
  flexGrow: 2,
});

export const CurrentNum = glamorous.span<{ colour: string }>(
  {
    fontWeight: 'bold',
  },
  ({ colour }) => ({
    color: colour,
  }),
);

// Final Table

export const Headline = glamorous(H2)<{ background: string }>(
  {
    padding: '10px 20px',
    color: colours.$white,
    position: 'relative',
    marginBottom: 0,
  },
  ({ background }) => ({
    background,
  }),
);

export const Table = glamorous.table({
  width: '100%',
  borderSpacing: 0,
});

export const THead = glamorous.thead({
  background: colours.$offBlack,
  color: colours.$white,
  fontSize: 14,
  fontWeight: 'normal',
});

export const Badge = glamorous.img({
  height: 30,
  width: 'auto',
  display: 'block',
  margin: '0 auto',
});

export const THeading = glamorous.th(
  {
    padding: '5px 0',
    fontFamily: fonts.$theSunRegular,
    textAlign: 'center',
    position: 'relative',
  },
  ({ fontAlignment, borderLeft, borderRight, definedWidth, hideMobile }: any) => ({
    textAlign: fontAlignment,
    borderLeft: borderLeft ? `1px solid ${colours.$white}` : 'none',
    borderRight: borderRight ? `1px solid ${colours.$white}` : 'none',
    width: definedWidth,
    display: hideMobile ? 'none' : 'table-cell',
    [mediaQueries.tabletPortrait]: {
      display: 'table-cell',
    },
  }),
);

export const THBorder = glamorous.span({
  position: 'absolute',
  right: 0,
  color: colours.$midGrey,
  fontFamily: fonts.$Roboto,
});

export const TdTeam = glamorous.td(
  {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.$theSunMedium,
    padding: '1px 0',
  },
  ({ fontAlignment, definedWidth, hideMobile }: any) => ({
    textAlign: fontAlignment,
    width: definedWidth,
    display: hideMobile ? 'none' : 'table-cell',
    [mediaQueries.tabletPortrait]: {
      display: 'table-cell',
    },
  }),
);

export const TrTeam = glamorous.tr<{ definedHeight?: number }>(
  {
    backgroundColor: colours.$white,
    height: 58,
    borderBottom: `1px solid ${colours.$midLightGrey}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  ({ definedHeight }) => ({
    height: definedHeight,
  }),
);

export const TrPrem = glamorous(TrTeam)({
  '&:first-child': {
    backgroundColor: colours.$midLightGrey,
    borderBottom: `1px solid ${colours.$midGrey}`,
  },
  '&:nth-child(2)': {
    backgroundColor: colours.$midLightGrey,
  },
  '&:nth-child(3)': {
    backgroundColor: colours.$lightGrey,
    borderBottom: `1px dashed ${colours.$midGrey}`,
  },
  '&:nth-child(4)': {
    backgroundColor: colours.$white,
    borderBottom: `1px solid ${colours.$midLightGrey}`,
  },
});

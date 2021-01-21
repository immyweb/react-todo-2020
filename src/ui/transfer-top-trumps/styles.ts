import glamorous, { Span, Div } from 'glamorous';
import { colours } from '../../styles/colours';
import { fonts } from '../../styles/fonts';
import { H3, H2, P } from '../typography/typography';
import Button from '../buttons/buttons';
import { mediaQueries } from '../../styles/breakpoints';

// Common Elements

export const TTContainer = glamorous.section({
  label: 'ttt-container',
  background: `linear-gradient(to bottom, ${colours.$black} 0%, ${colours.$offBlack} 20%, ${
    colours.$offBlack
  } 50%, ${colours.$black} 81%, ${colours.$black} 100%)`,
  width: '100%',
  position: 'relative',
  marginBottom: 15,
  [mediaQueries.tabletPortrait]: {
    minHeight: 'auto',
  },
});

export const TTTopGradient = glamorous.div({
  label: 'ttt-top-gradient',
  width: '100%',
  height: 84,
  background: `linear-gradient(to bottom, ${colours.$offBlack}, transparent)`,
  position: 'absolute',
  top: 0,
  zIndex: 2,
});

export const TTBottomGradient = glamorous.div({
  label: 'ttt-top-gradient',
  width: '100%',
  height: 130,
  background: `linear-gradient(rgba(34, 37, 38, 0.9), rgba(34, 37, 38, 0.9))`,
  position: 'absolute',
  bottom: 0,
  zIndex: 2,
});

export const Inner = glamorous(Div)({
  label: 'ttt-inner',
  margin: '0 45px',
  padding: '20px 0',
  position: 'relative',
  zIndex: 3,
});

// Headline

export const TTHeadline = glamorous(H3)({
  label: 'ttt-card-first-name',
  fontSize: 18,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: 0,
  fontFamily: fonts.$theSunHeavyCondensed,
  [mediaQueries.tabletPortrait]: {
    fontSize: 18,
  },
});

export const TTSubHeadline = glamorous(H2)({
  label: 'ttt-card-surname',
  fontSize: 48,
  textTransform: 'uppercase',
  textAlign: 'center',
  [mediaQueries.tabletPortrait]: {
    fontSize: 46,
  },
});

// Buttons

export const TTRoundBtn = glamorous(Button)<{
  size?: number;
  bkgndTop: string;
  bkgndBottom: string;
  borderWidth?: number;
}>(
  {
    label: 'ttt-round-button',
    padding: 0,
    borderRadius: '50%',
    margin: '0 15px',
    boxShadow: '0 0 2px 0 rgba(27, 27, 27, 0.5)',
    pointerEvents: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ size, bkgndTop, bkgndBottom, borderWidth }) => ({
    width: size ? size : 76,
    height: size ? size : 76,
    border: borderWidth
      ? `${borderWidth}px solid ${colours.$white}`
      : `3px solid ${colours.$white}`,
    backgroundImage: `linear-gradient(to bottom, ${bkgndTop}, ${bkgndBottom})`,
    ':hover:enabled': {
      backgroundImage: `linear-gradient(to bottom, ${bkgndBottom}, ${bkgndTop})`,
    },
    ':hover:disabled': {
      backgroundImage: `linear-gradient(to bottom, ${bkgndTop}, ${bkgndBottom})`,
      cursor: 'default',
    },
  }),
);

export const TTLozengeBtn = glamorous(Button)<{
  bkgndTop: string;
  bkgndBottom: string;
}>(
  {
    label: 'ttt-lozenge-button',
    padding: 0,
    height: 60,
    width: '100%',
    borderRadius: 30,
    border: `2px solid ${colours.$white}`,
    textTransform: 'uppercase',
    fontSize: 22,
    display: 'flex',
    justifyContent: 'center',
    [mediaQueries.tabletPortrait]: {
      fontSize: 18,
      height: 40,
    },
  },
  ({ bkgndTop, bkgndBottom }) => ({
    backgroundImage: `linear-gradient(to bottom, ${bkgndTop}, ${bkgndBottom})`,
    ':hover:enabled': {
      backgroundImage: `linear-gradient(to bottom, ${bkgndBottom}, ${bkgndTop})`,
    },
  }),
);

export const TTLozengeBtnIcon = glamorous.img({
  label: 'ttt-lozenge-button-icon',
  display: 'inline-block',
  width: 30,
  height: 30,
  marginRight: 10,
  [mediaQueries.tabletPortrait]: {
    width: 20,
    height: 20,
  },
});

export const BtnHolder = glamorous.div({
  label: 'ttt-btn-holder',
  [mediaQueries.tabletPortrait]: {
    width: 200,
    margin: '0 auto',
  },
});

export const Divider = glamorous.div<{
  height?: number;
  offsetTop?: number;
  mobileHide?: boolean;
}>(
  {
    label: 'ttt-divider',
    width: 1,
    opacity: 0.5,
    background: colours.$white,
  },
  ({ height, offsetTop, mobileHide }) => ({
    height: height ? height : 71,
    marginTop: offsetTop ? offsetTop : 0,
    display: mobileHide ? 'none' : 'inline-block',
    [mediaQueries.tabletPortrait]: {
      display: 'inline-block',
    },
  }),
);

// Gradient

export const GradientContainer = glamorous.div<{
  size?: number;
  top?: number;
  opacity?: number;
}>(
  {
    label: 'ttt-gradient-container',
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    left: '50%',
    transform: `translateX(-50%)`,
    [mediaQueries.tabletPortrait]: {
      width: 300,
    },
  },
  ({ size, top, opacity }) => ({
    width: size ? size : '100%',
    top: top ? top : 10,
    opacity: opacity ? opacity : 1.0,
  }),
);

export const GradientGroup = glamorous.div<{ width: string }>(
  {
    label: 'ttt-gradient-group',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 auto',
  },
  ({ width }) => ({
    width,
  }),
);

export const GradientLine = glamorous.div<{
  direction: string;
  teamColour: string;
  height?: number;
}>(
  {
    label: 'ttt-gradient',
    width: 145,
    marginBottom: 3,
  },
  ({ direction, teamColour, height }) => ({
    backgroundImage: `linear-gradient(to ${direction}, rgba(32, 32, 32, 0), ${teamColour})`,
    height: height ? height : 8,
  }),
);

export const BadgeImageHolder = glamorous.div({
  label: 'ttt-card-badge-image-holder',
  width: '100%',
  textAlign: 'center',
  position: 'relative',
  minHeight: 50,
});

export const Badge = glamorous.div<{ size?: number }>(
  {
    label: 'ttt-card-badge',
    margin: '0 auto',
    position: 'relative',
    top: 0,
    minHeight: 50,
  },
  ({ size }) => ({
    width: size ? size : 50,
  }),
);

export const BadgeImage = glamorous.img({
  label: 'ttt-card-badge-image',
  display: 'inline-block',
});

// Intro Screen

export const IntroHeader = glamorous(H3)({
  label: 'ttt-intro-header',
  color: colours.$white,
  textTransform: 'uppercase',
  fontFamily: fonts.$theSunMedium,
  fontSize: 30,
  textAlign: 'center',
  marginBottom: 7,
  [mediaQueries.tabletPortrait]: {
    fontSize: 22,
  },
});

export const IntroContent = glamorous(P)({
  label: 'ttt-intro-content',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: 18,
  lineHeight: 1.11,
  fontFamily: fonts.$theSunMedium,
  [mediaQueries.tabletPortrait]: {
    width: 250,
    margin: '0 auto',
    fontSize: 14,
    lineHeight: 1.21,
  },
});

export const IntroInstructions = glamorous.div({
  label: 'ttt-intro-instructions',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  margin: '25px 0',
  [mediaQueries.tabletPortrait]: {
    justifyContent: 'center',
  },
});

export const IntroInstructionsContent = glamorous.div<{ reverse?: boolean }>(
  {
    label: 'ttt-intro-instructions-content',
    [mediaQueries.tabletPortrait]: {
      display: 'flex',
    },
  },
  ({ reverse }) => ({
    [mediaQueries.tabletPortrait]: {
      flexDirection: reverse ? 'row-reverse' : 'row',
    },
  }),
);

export const IntroInstructionsContentP = glamorous(P)({
  label: 'ttt-intro-instructions-content-p',
  color: colours.$white,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: 10,
  fontSize: 14,
  width: 94,
  [mediaQueries.tabletPortrait]: {
    fontSize: 14,
    width: 'auto',
    marginTop: 33,
  },
});

// Card

export const Game = glamorous.section({
  label: 'ttt-game',
});

export const CardContainer = glamorous.div<{ voted?: boolean }>(
  {
    label: 'ttt-card',
    width: '100%',
    position: 'relative',
    paddingTop: 14,
    cursor: 'pointer',
    zIndex: 3,
    minHeight: 485,
    background: colours.$black,
    [mediaQueries.mobileInner]: {
      minHeight: 352,
    },
  },
  ({ voted }) => ({
    display: voted ? 'none' : 'block',
  }),
);

export const CardProfileImage = glamorous.div<{
  imageMobile: string;
  imageDesktop: string;
}>(
  {
    label: 'ttt-card-profile-image',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 497,
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    [mediaQueries.mobileInner]: {
      height: 364,
    },
  },
  ({ imageMobile, imageDesktop }) => ({
    backgroundImage: `url(${imageMobile}), linear-gradient(to bottom, ${
      colours.$offBlack
    } 0%, transparent 20%, transparent 50%, ${colours.$offBlack} 81%, ${colours.$offBlack} 100%)`,
    [mediaQueries.mobileInner]: {
      backgroundImage: `url(${imageDesktop}), linear-gradient(to bottom, ${
        colours.$offBlack
      } 0%, transparent 20%, transparent 50%, ${colours.$offBlack} 81%, ${colours.$offBlack} 100%)`,
    },
  }),
);

export const CardHeader = glamorous.div({
  label: 'ttt-card-header',
  position: 'relative',
  zIndex: 2,
  minHeight: 75,
});

export const CardFirstname = glamorous(H3)({
  label: 'ttt-card-first-name',
  fontSize: 18,
  textTransform: 'uppercase',
  textAlign: 'center',
  fontFamily: fonts.$theSunHeavyCondensed,
  [mediaQueries.tabletPortrait]: {
    fontSize: 18,
  },
});

export const CardSurname = glamorous(H2)({
  label: 'ttt-card-surname',
  fontSize: 48,
  textTransform: 'uppercase',
  textAlign: 'center',
  lineHeight: 0.96,
  [mediaQueries.tabletPortrait]: {
    fontSize: 48,
    lineHeight: 0.96,
  },
});

export const CardInfo = glamorous.div({
  label: 'ttt-card-info',
  width: '100%',
  padding: 10,
  position: 'absolute',
  bottom: 0,
  zIndex: 2,
});

export const CardLabel = glamorous(Span)({
  label: 'ttt-card-label',
  textTransform: 'uppercase',
  fontFamily: fonts.$theSunRegular,
  textAlign: 'center',
  display: 'block',
  fontSize: 14,
  lineHeight: 1,
});

export const CardContent = glamorous(Span)({
  label: 'ttt-card-content',
  color: colours.$white,
  textTransform: 'uppercase',
  fontFamily: fonts.$theSunMedium,
  display: 'block',
  fontSize: 30,
  lineHeight: '30px',
  textAlign: 'center',
});

export const CardStats = glamorous.div({
  label: 'ttt-card-stats',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  marginTop: 13,
  [mediaQueries.tabletPortrait]: {
    width: 'auto',
    marginTop: 10,
  },
});

export const CardClub = glamorous.div({
  label: 'ttt-card-club',
  display: 'inline-block',
  width: '100%',
  marginBottom: 15,
  [mediaQueries.tabletPortrait]: {
    width: 'auto',
    marginBottom: 0,
  },
});

export const CardPlayer = glamorous.div({
  label: 'ttt-card-player',
  display: 'inline-block',
  padding: '0 20px',
  flex: 1,
  [mediaQueries.tabletPortrait]: {
    flex: 'none',
    padding: 0,
  },
});

// Controls

export const ControlsHolder = glamorous.div({
  label: 'ttt-nav-holder',
  position: 'absolute',
  top: '36%',
  zIndex: 5,
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  pointerEvents: 'none',
  [mediaQueries.tabletPortrait]: {
    justifyContent: 'space-between',
  },
});

// Progress Bar

export const ProgressBarContainer = glamorous.div<{ bkgnd: string }>(
  {
    label: 'ttt-progress-bar',
    width: '100%',
    padding: '15px 0',
    textAlign: 'center',
    borderTop: `1px solid ${colours.$white}`,
  },
  ({ bkgnd }) => ({
    background: bkgnd,
  }),
);

export const ProgressBarInner = glamorous.div({
  label: 'ttt-progress-bar-inner',
  display: 'inline-block',
  position: 'relative',
});

export const ProgressBarIcon = glamorous.div({
  label: 'ttt-progress-bar-icon',
  position: 'absolute',
  bottom: 0,
  right: -10,
});

export const ProgressBarImage = glamorous.div<{
  voted?: boolean;
  active?: boolean;
  selected?: boolean;
}>(
  {
    label: 'ttt-progress-bar-image',
    width: 58,
    height: 58,
    borderRadius: '50%',
    overflow: 'hidden',
    background: colours.$offBlack,
    display: 'inline-block',
    margin: '0 3px',
    [mediaQueries.tabletPortrait]: {
      margin: '0 7px',
    },
  },
  ({ voted, active }) => ({
    opacity: voted || active ? 1.0 : 0.3,
    border: active ? `4px solid ${colours.$white}` : `2px solid ${colours.$white}`,
  }),
);

// Results

export const ResultsInner = glamorous.div({
  label: 'ttt-results-inner',
  margin: '0 15px',
  padding: '20px 0 0',
  position: 'relative',
  zIndex: 3,
  textAlign: 'center',
});

export const Ribbon = glamorous(H3)({
  label: 'ttt-ribbon',
  position: 'relative',
  color: colours.$white,
  textTransform: 'uppercase',
  margin: '0 auto 18px',
  padding: '10px 25px',
  textAlign: 'center',
  backgroundColor: colours.$mainSecondary,
  display: 'inline-block',
  fontSize: 20,
  fontFamily: fonts.$theSunHeavyCondensed,
  [mediaQueries.tabletPortrait]: {
    display: 'none',
  },
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    display: 'block',
    border: `17px solid ${colours.$mainSecondary}`,
    opacity: 0.8,
    top: 4,
  },
  '&::before': {
    left: '-28px',
    borderRightWidth: '17px',
    borderLeftColor: 'transparent',
  },
  '&::after': {
    right: '-28px',
    borderLeftWidth: '17px',
    borderRightColor: 'transparent',
  },
});

// Chart

export const BarWrapper = glamorous.div({
  label: 'bar-wrapper',
  position: 'relative',
  maxWidth: 320,
  margin: '0 auto',
  [mediaQueries.tabletPortrait]: {
    maxWidth: 'none',
    margin: '0 50px',
  },
});

export const BarContainer = glamorous.div({
  label: 'bar-container',
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const ResultsCharts = glamorous.div({
  label: 'ttt-results-charts',
  position: 'relative',
});

export const ResultsProfileImageContainer = glamorous.div({
  label: 'ttt-results-profile-image-container',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  left: 0,
  zIndex: 1,
  [mediaQueries.tabletPortrait]: {
    left: 40,
  },
});

export const ResultsProfileImage = glamorous.div({
  label: 'ttt-results-profile-image',
  width: 54,
  height: 54,
  borderRadius: '50%',
  overflow: 'hidden',
  background: colours.$offBlack,
  display: 'inline-block',
  margin: '6px 0',
  border: `2px solid ${colours.$white}`,
});

export const ResultsProfileInner = glamorous.div({
  label: 'ttt-results-profile-inner',
  position: 'relative',
});

export const ResultsProfileIcon = glamorous.div({
  label: 'ttt-results-profile-icon',
  position: 'absolute',
  bottom: 6,
  right: -15,
});

export const ResultsProfileLabelContainer = glamorous.div({
  label: 'ttt-results-profile-label-container',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  left: 63,
  zIndex: 1,
  [mediaQueries.tabletPortrait]: {
    left: 110,
  },
});

export const ResultsProfileLabel = glamorous.div({
  label: 'ttt-results-profile-label',
  color: colours.$white,
  textTransform: 'uppercase',
  fontFamily: fonts.$theSunHeavyNarrow,
  fontSize: 16,
  textAlign: 'left',
  margin: '6px 0 42px',
});

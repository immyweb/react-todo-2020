import glamorous from 'glamorous';
import { colours } from '../../styles/colours';
import { fonts } from '../../styles/fonts';
import { H3, H2 } from '../typography/typography';
import { mediaQueries } from '../../styles/breakpoints';

export const TTContainer = glamorous.section({
  label: 'tt-container',
  width: '100%',
  paddingTop: '134.9%',
  minHeight: 400,
  minWidth: 280,
  backgroundColor: colours.$black,
  position: 'relative',
  [mediaQueries.mobileInner]: {
    paddingTop: '72.9%',
  },
});

export const TTIntroInner = glamorous.div<{
  imageMobile: string;
  imageDesktop: string;
}>(
  {
    label: 'tt-intro-inner',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  },
  ({ imageMobile, imageDesktop }) => ({
    backgroundImage: `url(${imageMobile})`,
    [mediaQueries.mobileInner]: {
      backgroundImage: `url(${imageDesktop})`,
    },
  }),
);

export const TTDefaultInner = glamorous.div<{
  imageMobile: string;
  imageDesktop: string;
}>(
  {
    label: 'tt-default-inner',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  },
  ({ imageMobile, imageDesktop }) => ({
    backgroundImage: `url(${imageMobile})`,
    [mediaQueries.mobileInner]: {
      backgroundImage: `url(${imageDesktop})`,
    },
  }),
);

export const TTVoteWrapper = glamorous.div<{}>({
  label: 'tt-vote-wrapper',
  display: 'flex',
});

export const TTWrapper = glamorous.section({
  label: 'tt-wrapper',
  margin: '0 5%',
  height: '100%',
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  [mediaQueries.mobileInner]: {
    margin: '0 5%',
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

export const TTHeadline = glamorous(H3)({
  label: 'ttt-card-first-name',
  fontSize: 18,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: 0,
  fontFamily: fonts.$theSunHeavyCondensed,
  [mediaQueries.mobileInner]: {
    fontSize: 18,
  },
});

export const TTSubHeadline = glamorous(H2)({
  label: 'ttt-card-surname',
  fontSize: 48,
  textTransform: 'uppercase',
  textAlign: 'center',
  [mediaQueries.mobileInner]: {
    fontSize: 46,
  },
});

export const TTButton = glamorous.div<{
  backgroundColour: string;
  hoverBackgroundColour: string;
}>(
  {
    label: 'tt-intro-button',
    display: 'flex',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.$theSunMedium,
    textAlign: 'center',
    height: 44,
    color: colours.$white,
    [mediaQueries.mobileInner]: {
      width: 250,
    },
  },
  ({ backgroundColour, hoverBackgroundColour }) => ({
    backgroundColor: backgroundColour,
    ':hover': {
      backgroundColor: hoverBackgroundColour,
    },
  }),
);

export const TTIntroButtonHolder = glamorous.div({
  label: 'tt-intro-button-holder',
  position: 'absolute',
  width: '100%',
  bottom: 15,
  cursor: 'pointer',
});

export const TTGame = glamorous.section({
  label: 'tt-game',
});

export const TTCard = glamorous.div<{
  imageMobile: string;
  imageDesktop: string;
}>(
  {
    label: 'tt-card',
    width: '100%',
    height: '91.5%',
    position: 'absolute',
    top: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    [mediaQueries.mobileInner]: {},
  },
  ({ imageMobile, imageDesktop }) => ({
    backgroundImage: `url(${imageMobile})`,
    [mediaQueries.mobileInner]: {
      backgroundImage: `url(${imageDesktop})`,
    },
  }),
);

export const TTProgressBarCircle = glamorous.div<{
  viewed: boolean;
  inactiveColour: string;
}>(
  {
    label: 'tt-progress_bar-circle',
    display: 'inline-block',
    borderRadius: '50%',
  },
  ({ viewed, inactiveColour }) => ({
    backgroundColor: viewed ? colours.$white : inactiveColour,
    width: viewed ? 11 : 7,
    height: viewed ? 11 : 7,
  }),
);

export const TTProgressBarContainer = glamorous.div<{
  bkgnd: string;
  borderColour: string;
}>(
  {
    label: 'tt-progress_bar-container',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    height: '8.5%',
    width: '100%',
    textAlign: 'center',
  },
  ({ bkgnd, borderColour }) => ({
    background: bkgnd,
    borderTop: `1px solid ${borderColour}`,
  }),
);

export const TTProgressBarInnerContainer = glamorous.div({
  label: 'tt-progress_bar-inner-container',
  width: 130,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});

export const TTProgressBarArrowContainer = glamorous.div<{
  right: boolean;
}>(
  {
    label: 'tt-progress_bar-arrow-container',
    padding: 15,
    width: 45,
    display: 'flex',
    cursor: 'pointer',
  },
  ({ right }) => ({
    [right ? 'marginRight' : 'marginLeft']: 15,
  }),
);

export const TTProgressBarArrow = glamorous.div<{
  right: boolean;
  disabled: boolean;
}>(
  {
    label: 'tt-progress_bar-arrow',
  },
  ({ right, disabled }) => ({
    border: `solid ${colours.$white}`,
    opacity: disabled ? 0.2 : 1,
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: 5,
    alignSelf: 'center',
    transform: right ? 'rotate(-45deg)' : 'rotate(135deg)',
  }),
);

export const TTVoteContainer = glamorous.div({
  label: 'tt-vote-container',
  height: '100%',
  width: '100%',
  display: 'flex',
  position: 'absolute',
  top: 0,
  backgroundColor: colours.$black,
  flexDirection: 'column',
  alignItems: 'center',
});

export const TTVoteHeadline = glamorous.div<{
  colour: string;
}>(
  {
    label: 'tt-vote-headline',
    fontFamily: fonts.$theSunMedium,
    textTransform: 'uppercase',
    marginTop: 10,
    fontSize: 18,
  },
  ({ colour }) => ({
    color: colour,
  }),
);

export const TTVoteSubHeadline = glamorous.div({
  label: 'tt-vote-sub_headline',
  fontFamily: fonts.$theSunHeavyNarrow,
  color: colours.$white,
  textTransform: 'uppercase',
  fontSize: '38px',
  flex: 2,
  width: '80%',
  textAlign: 'center',
  lineHeight: '40px',
  marginTop: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [mediaQueries.mobileInner]: {
    flex: 1,
  },
});

export const TTVoteBottomCopy = glamorous.div({
  label: 'tt-vote-bottom_copy',
  fontFamily: fonts.$theSunRegular,
  color: colours.$midGrey,
  fontSize: 16,
  width: '80%',
  flex: 1,
  textAlign: 'center',
  margin: '10px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const TTVoteButtonContainer = glamorous.div({
  label: 'tt-vote-button_container',
  display: 'flex',
  flexDirection: 'column',
  height: '60%',
  width: '100%',
  cursor: 'pointer',
  marginTop: '38%',
  [mediaQueries.mobileInner]: {
    marginTop: '18%',
  },
});

export const TTVoteButtonWrapper = glamorous.div({
  label: 'tt-vote-button-wrapper',
});

export const TTVoteButton = glamorous.a<{
  colour: string;
  hoverBackgroundColour: string;
}>(
  {
    label: 'tt-vote-button',
    display: 'flex',
    border: 0,
    padding: 0,
    height: '20%',
    marginTop: 10,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  ({ colour, hoverBackgroundColour }) => ({
    backgroundColor: colour,
    ':hover': {
      backgroundColor: hoverBackgroundColour,
    },
  }),
);

export const TTVoteButtonThumbContainer = glamorous.div({
  label: 'tt-vote-button_thumb_container',
  flexBasis: '19%',
  [mediaQueries.mobileInner]: {
    flexBasis: '9%',
  },
});

export const TTVoteButtonThumb = glamorous.img({
  label: 'tt-vote-button_thumb',
  width: 'auto',
  height: '100%',
  display: 'block',
  border: `1px solid ${colours.$darkGrey}`,
});

export const TTVoteButtonText = glamorous.div<{ colour: string }>(
  {
    label: 'tt-vote-button_text',
    fontFamily: fonts.$theSunMedium,
    fontSize: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    cursor: 'pointer',
  },
  ({ colour }) => ({
    color: colour,
  }),
);

export const TTResultsButtonLink = glamorous.div<{
  colour: string;
  hoverBackgroundColour: string;
}>(
  {
    label: 'tt-results-button_link',
    fontFamily: fonts.$theSunMedium,
    color: colours.$white,
    position: 'absolute',
    bottom: 15,
    fontSize: 16,
    height: 44,
    maxHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    width: '100%',
    cursor: 'pointer',
    [mediaQueries.mobileInner]: {
      width: 250,
    },
  },
  ({ colour, hoverBackgroundColour }) => ({
    backgroundColor: colour,
    ':hover': {
      backgroundColor: hoverBackgroundColour,
    },
  }),
);

export const TTResultsChartContainer = glamorous.div({
  label: 'tt-results-chart-container',
  width: '100%',
  height: '60%',
  marginTop: '39%',
  [mediaQueries.mobileInner]: {
    marginTop: '19%',
  },
});

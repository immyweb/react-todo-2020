import glamorous from 'glamorous';

import { colours } from '../../styles/colours';
import { mediaQueries } from '../../styles/breakpoints';
import { fonts } from '../../styles/fonts';
import { H2, P } from '../typography/typography';

// Typography

export const APHeadline = glamorous(H2)({
  label: 'AP-headline',
  fontSize: 42,
  textTransform: 'uppercase',
  textAlign: 'center',
  color: colours.$white,
  [mediaQueries.tabletPortrait]: {
    fontSize: 60,
    lineHeight: 1,
  },
});

export const APCopy = glamorous(P)({
  label: 'AP-copy',
  fontSize: 16,
  textAlign: 'center',
  color: colours.$white,
  lineHeight: 1.13,
  marginBottom: 25,
  [mediaQueries.tabletPortrait]: {
    fontSize: 24,
  },
});

// Animated Polls

export const APoll = glamorous.section({
  label: 'AP',
  position: 'relative',
});

// Modal

export const ModalContainer = glamorous.div<{ open: boolean }>(
  {
    label: 'modal-container',
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 160,
    [mediaQueries.tabletPortrait]: {
      position: 'absolute',
      height: 900,
      zIndex: 40,
    },
  },
  ({ open }) => ({
    visibility: open ? 'visible' : 'hidden',
  }),
);

export const ModalInner = glamorous.div({
  label: 'modal-inner',
  position: 'relative',
  height: '100vh',
  width: '100%',
  top: 0,
  background: colours.$black,
  overflowY: 'hidden',
  msOverflowStyle: '-ms-autohiding-scrollbar',
  [mediaQueries.tabletPortrait]: {
    height: 900,
  },
});

export const ModalContent = glamorous.div({
  label: 'modal-content',
  position: 'relative',
  overflowY: 'auto',
  msOverflowStyle: '-ms-autohiding-scrollbar',
  height: '100%',
});

export const ModalHeadline = glamorous.h2({
  label: 'modal-headline',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: 24,
  fontFamily: fonts.$theSunHeavyCondensed,
  marginBottom: 20,
  lineHeight: 1.1,
  padding: '0 25px',
  [mediaQueries.tabletPortrait]: {
    padding: 0,
  },
});

export const BtnClose = glamorous.div({
  label: 'modal-btn-close',
  textAlign: 'center',
  position: 'absolute',
  top: 23,
  right: 16,
  height: 28,
  background: 'none',
  borderRadius: '50%',
  ':hover': {
    cursor: 'pointer',
  },
  [mediaQueries.tabletPortrait]: {
    top: 35,
    right: 35,
  },
});

// Teaser screen

export const APTeaser = glamorous.section({
  label: 'AP-teaser',
  width: '100%',
  position: 'relative',
  minHeight: 520,
  [mediaQueries.tabletPortrait]: {
    height: 900,
    overflow: 'hidden',
  },
});

export const APTeaserLogo = glamorous.img<{ backgroundColour: string }>(
  {
    label: 'AP-teaser-logo',
    position: 'absolute',
    zIndex: 3,
    top: 8,
    left: 8,
    width: 72,
    padding: '8px 4px',
    [mediaQueries.mobileInner]: {
      top: 20,
      left: 20,
    },
  },
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour,
  }),
);

export const APTeaserImage = glamorous.div({
  label: 'AP-teaser-image',
  width: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '100%',
  backgroundBlendMode: 'multiply',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `linear-gradient(to bottom, ${
    colours.$black
  } 0%, transparent 20%, transparent 50%, ${colours.$black} 81%, ${colours.$black} 100%)`,
  [mediaQueries.mobileInner]: {
    backgroundImage: `linear-gradient(to bottom, ${
      colours.$black
    } 0%, transparent 20%, transparent 50%, ${colours.$black} 81%, ${colours.$black} 100%)`,
  },
});

export const APTeaserVideo = glamorous.video({
  label: 'AP-teaser-video',
  width: '100%',
});

export const APTeaserInner = glamorous.div({
  label: 'AP-teaser-inner',
  position: 'absolute',
  bottom: 20,
  margin: '0 40px',
  [mediaQueries.mobileInner]: {
    bottom: 40,
    margin: '0 100px',
  },
});

// Intro Screen

export const APIntro = glamorous.section({
  label: 'AP-intro',
  width: '100%',
  position: 'relative',
  height: '100vh',
  background: colours.$black,
  [mediaQueries.mobileInner]: {
    height: 900,
    background: 'none',
  },
});

export const APIntroImg = glamorous.div<{
  imageMobile: string;
  imageDesktop: string;
}>(
  {
    label: 'AP-intro-img',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    height: 520,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  },
  ({ imageMobile, imageDesktop }) => ({
    backgroundImage: `url(${imageMobile})`,
    [mediaQueries.mobileInner]: {
      backgroundImage: `url(${imageDesktop})`,
      height: 900,
    },
  }),
);

export const APIntroCopy = glamorous.div({
  label: 'AP-intro-copy',
  position: 'absolute',
  width: '100%',
  bottom: 0,
  padding: '0 40px 30px',
  background: colours.$black,
  [mediaQueries.mobileInner]: {
    paddingBottom: 15,
    background: 'none',
  },
});

export const APIntroLink = glamorous.a({
  label: 'AP-intro-link',
  color: colours.$midGrey,
  textDecoration: 'none',
});

export const APIntroHashTag = glamorous.span({
  label: 'AP-intro-hashtag',
  color: colours.$white,
  letterSpacing: 1.4,
});

// Card Screen

export const APCard = glamorous(APIntro)({
  label: 'AP-card',
});

export const APCardImg = glamorous(APIntroImg)({
  label: 'AP-card-image',
  height: '100vh',
  [mediaQueries.mobileInner]: {
    height: 900,
  },
});

export const APCardCopy = glamorous(APIntroCopy)({
  label: 'AP-card-copy',
  background: colours.$black,
  paddingTop: 15,
  minHeight: 165,
  ':before': {
    content: ' ',
    position: 'absolute',
    width: '100%',
    left: 0,
    top: -100,
    height: 100,
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), ${colours.$black})`,
  },
  [mediaQueries.mobileInner]: {
    background: colours.$black,
    minHeight: 'initial',
  },
});

// Vote Screen

export const APVote = glamorous(APIntro)({
  label: 'AP-vote',
  marginBottom: 0,
});

export const APVoteImgBkgnd = glamorous.div<{
  imageMobile: string;
  imageDesktop: string;
}>(
  {
    label: 'AP-vote-img-bkgnd',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    height: '100vh',
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

export const APVoteImgBkgndCover = glamorous.div({
  label: 'AP-vote-img-bkgnd-cover',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: colours.$black,
  opacity: 0.8,
});

export const APVoteImgBkgndCoverGradient = glamorous.div({
  label: 'AP-vote-img-bkgnd-cover-gradient',
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '60%',
  background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%)`,
});

export const APVoteHeadline = glamorous(APHeadline)({
  label: 'AP-vote-headline',
  textTransform: 'none',
  textAlign: 'left',
  fontSize: 38,
});

export const APVoteContent = glamorous.div({
  label: 'AP-vote-content',
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '90px 20px 0',
});

export const APVoteSubHeadline = glamorous(APVoteHeadline)({
  label: 'AP-vote-sub-headline',
  [mediaQueries.mobileInner]: {
    textAlign: 'center',
    fontSize: 40,
    padding: '25px 0',
  },
});

// Option bar

export const APOptionBar = glamorous.div({
  label: 'AP-option-bar',
  position: 'relative',
  marginBottom: 12,
  display: 'flex',
});

export const APOptionBarLabel = glamorous.div<{ bkgnd: string }>(
  {
    label: 'AP-option-bar-label',
    display: 'flex',
    alignItems: 'center',
    height: 44,
    width: '100%',
    paddingLeft: 8,
  },
  ({ bkgnd }) => ({
    background: bkgnd,
  }),
);

export const APOptionBarIcon = glamorous.img({
  label: 'AP-option-bar-icon',
  width: 35,
  display: 'inline-block',
  marginRight: 20,
});

export const APOptionBarIconLabel = glamorous(P)({
  label: 'AP-option-bar-icon-label',
  display: 'inline-block',
  color: colours.$white,
  marginBottom: 0,
});

export const APOptionBarCta = glamorous.div<{ bkgnd: string }>(
  {
    label: 'AP-option-bar-cta',
    display: 'inline-block',
    width: 52,
    height: 44,
    marginLeft: 5,
  },
  ({ bkgnd }) => ({
    background: bkgnd,
  }),
);

export const APOptionBarCtaIcon = glamorous.span({
  label: 'AP-option-bar-cta-icon',
  display: 'inline-block',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

// Results Screen

export const APResultsHeadline = glamorous(APVoteHeadline)({
  label: 'AP-results-headline',
  textTransform: 'none',
  textAlign: 'center',
  fontSize: 38,
  [mediaQueries.mobileInner]: {
    fontSize: 40,
    padding: '25px 0',
  },
});

export const APChartHolder = glamorous.div({
  label: 'AP-option-bar-cta-icon',
  width: '100%',
  height: 330,
  marginBottom: 10,
});

// Progress bar

export const APProgressBar = glamorous.div({
  label: 'AP-progress-bar',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '0 13px',
  [mediaQueries.tabletPortrait]: {
    padding: '0 25px',
  },
});

export const APProgressBarItem = glamorous.div<{ viewed: boolean }>(
  {
    label: 'AP-progress-bar-item',
    background: colours.$white,
    height: 4,
    margin: '0 3px',
    flexGrow: 1,
    [mediaQueries.tabletPortrait]: {
      height: 6,
    },
  },
  ({ viewed }) => ({
    opacity: viewed ? 1.0 : 0.5,
  }),
);

// Navigation

export const APNav = glamorous.div({
  label: 'AP-nav',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const APNavIcon = glamorous.div<{ disabled: boolean }>(
  {
    label: 'AP-nav-icon',
    border: `3px solid ${colours.$white}`,
    width: 35,
    height: 35,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ disabled }) => ({
    opacity: disabled ? 0.5 : 1.0,
  }),
);

// Poll Container

export const APNavHolder = glamorous.div({
  label: 'AP-nav-holder',
  width: 'calc(100% - 32px)',
  position: 'absolute',
  bottom: 110,
  left: 16,
  // right: 16,
  zIndex: 5,
  [mediaQueries.tabletPortrait]: {
    width: '100%',
    left: 0,
    bottom: 16,
    right: 'auto',
    padding: '0 12px',
  },
});

export const APProgressHolder = glamorous.div({
  label: 'AP-progress-holder',
  width: '100%',
  position: 'absolute',
  top: 8,
  left: 0,
  zIndex: 5,
  [mediaQueries.tabletPortrait]: {
    top: 12,
  },
});

export const APNavIntroHolder = glamorous(APNavHolder)({
  label: 'AP-nav-intro-holder',
  width: 'auto',
  right: 16,
  left: 'auto',
  bottom: 185,
  [mediaQueries.tabletPortrait]: {
    left: 'auto',
    right: 0,
    width: 105,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

import glamorous from 'glamorous';
import { css } from 'glamor';
import { fonts } from '../../styles/fonts';
import { mediaQueries } from '../../styles/breakpoints';

// animations
const shimmy = (css as any).keyframes({
  '0%, 100%': { transform: 'rotateY(0deg) skewX(0deg)' },
  '50%': { transform: 'rotateY(30deg) skewX(3deg)' },
});

const shine = (css as any).keyframes({
  '0%, 100%': { marginTop: '-100px' },
  '50%': { marginTop: '800px' },
});

const angle = (css as any).keyframes({
  '0%, 100%': { height: '5px' },
  '50%': {
    height: '15px',
    width: '260px',
    borderRadius: '30% 90% 90% 30%',
    transform: 'skew(50deg,-10deg) translateX(13px)',
  },
});

// card and effects
export const Card = glamorous.div<{ cardImage: string }>(
  {
    width: '270px',
    height: '405px',
    border: '1px solid rgba(150,150,150,0.2)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '16px',
    margin: '40px 20px',
    marginLeft: '15px',
    textAlign: 'center',
    lineHeight: '400px',
    boxShadow: 'inset 5px 5px 20px rgba(255,255,255,0.1)',
    WebkitAnimation: `${shimmy} 6s ease-in-out infinite`,
    [mediaQueries.mobile]: {
      margin: '40px 20px',
    },
  },
  ({ cardImage }) => ({
    backgroundImage: `url("${cardImage}")`,
  }),
);

export const Wrapper = glamorous.div<{ backgroundImageUrl: string }>(
  {
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: '#242527',
    marginTop: '4px',
    marginBottom: '8px',
    [mediaQueries.mobile]: {
      minHeight: '500px',
      flexDirection: 'row',
    },
  },
  ({ backgroundImageUrl }) => ({
    [mediaQueries.mobile]: {
      backgroundImage: `url("${backgroundImageUrl}")`,
    },
  }),
);

export const Shadow = glamorous.div({
  width: '270px',
  height: '5px',
  background: 'rgba(0,0,0,0.3)',
  filter: 'blur(5px)',
  margin: '-24px 20px',
  marginLeft: '15px',
  boxShadow: '0px 0px 20px rgba(50,50,50,0.1)',
  WebkitAnimation: `${angle} 6s ease-in-out infinite`,
  [mediaQueries.mobile]: {
    margin: '-24px 20px',
  },
});

export const Coating = glamorous.div({
  width: '1000px',
  height: '100px',
  marginLeft: '-100px',
  transform: 'rotate(30deg)',
  background: '-webkit-linear-gradient(top, transparent, rgba(200,200,200,0.1),transparent)',
  position: 'absolute',
  WebkitAnimation: `${shine} 6s ease-in-out infinite`,
});

export const Text = glamorous.div({
  fontFamily: fonts.$theSunRegular,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '10px',
  marginBottom: '50px',
  color: 'white',
  width: '80%',
  flexDirection: 'column',
  display: 'flex',
  [mediaQueries.mobile]: {
    marginTop: '20px',
    marginLeft: '10px',
    marginRight: '20px',
  },
});

export const Name = glamorous.h3({
  fontFamily: fonts.$theSunHeavyNarrow,
  marginBottom: '9px',
  textTransform: 'uppercase',
});

export const CardContainer = glamorous.div<{ backgroundImageUrl: string }>(
  {
    height: '500px',
    width: '100%',
    backgroundPosition: 'center',
    [mediaQueries.mobile]: {
      width: '300px',
      backgroundImage: 'none',
    },
  },
  ({ backgroundImageUrl }) => ({
    backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0) 95%, #242527), url("${backgroundImageUrl}")`,
  }),
);

export const CardWrapper = glamorous.div({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '300px',
  [mediaQueries.mobile]: {
    marginLeft: '0px',
    marginRight: '0px',
  },
});

export const StatName = glamorous.span({
  float: 'left',
});

export const StatValue = glamorous.span({
  float: 'right',
  fontFamily: fonts.$theSunMedium,
});

export const Stat = glamorous.div({
  marginTop: '0px',
  marginBottom: '5px',
});

export const Copy = glamorous.div({
  marginTop: '10px',
  marginBottom: '10px',
});

export const SectionTitle = glamorous.div({
  fontFamily: fonts.$theSunMedium,
  fontWeight: 'bold',
});

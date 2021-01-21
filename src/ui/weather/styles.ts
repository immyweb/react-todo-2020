import glamorous from 'glamorous';

import { fonts } from '../../styles/fonts';
import { AnchorButton } from '../../styles/globals';
import { colours } from '../../styles/colours';
import { Direction } from './enums';
import { mediaQueries } from '../../styles/breakpoints';

// Labels

export const WeatherLabelContainer = glamorous.div<{
  direction: Direction;
  mTop: string;
  mLeft: string;
  dTop: string;
  dLeft: string;
}>(
  {
    label: 'weather-label-container',
    display: 'flex',
    height: 24,
    position: 'absolute',
    zIndex: 4,
  },
  ({ direction, mTop, mLeft, dTop, dLeft }) => ({
    flexDirection: direction === Direction.LEFT ? 'row' : 'row-reverse',
    top: mTop,
    left: mLeft,
    [mediaQueries.tabletPortrait]: {
      top: dTop,
      left: dLeft,
    },
  }),
);

export const WeatherNameContainer = glamorous.div<{ direction: Direction }>(
  {
    display: 'flex',
    position: 'relative',
  },
  ({ direction }) => ({
    flexDirection: direction === Direction.LEFT ? 'row' : 'row-reverse',
  }),
);

export const WeatherName = glamorous.div<{
  labelColour: string;
  labelBackgroundColour: string;
}>(
  {
    label: 'weather-label-name',
    display: 'flex',
    alignItems: 'center',
    padding: '0 4px',
    fontFamily: fonts.$theSunHeavyNarrow,
    fontSize: 14,
    [mediaQueries.tabletPortrait]: {
      fontSize: 18,
    },
  },
  ({ labelColour, labelBackgroundColour }) => ({
    color: labelColour,
    backgroundColor: labelBackgroundColour,
  }),
);

export const WeatherArrow = glamorous.div<{
  backgroundColour: string;
  direction: Direction;
}>(
  {
    label: 'weather-label-arrow',
    borderTop: '12px solid transparent',
    borderBottom: '12px solid transparent',
  },
  ({ backgroundColour, direction }) => {
    const borderDirection = direction === Direction.LEFT ? 'borderRight' : 'borderLeft';
    return {
      [borderDirection]: `9px solid ${backgroundColour}`,
    };
  },
);

export const WeatherArrowBottom = glamorous.div<{ backgroundColour: string }>(
  {
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    position: 'absolute',
    bottom: -12,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  ({ backgroundColour }) => ({
    borderTop: `12px solid ${backgroundColour}`,
  }),
);

export const WeatherArrowTop = glamorous.div<{ backgroundColour: string }>(
  {
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  ({ backgroundColour }) => ({
    borderBottom: `12px solid ${backgroundColour}`,
  }),
);

export const WeatherTemperature = glamorous.div<{
  temperatureColour: string;
  temperatureBackgroundColour: string;
}>(
  {
    label: 'weather-label-temperature',
    display: 'flex',
    alignItems: 'center',
    fontFamily: fonts.$theSunMedium,
    padding: '0 5px',
    margin: '0',
    minWidth: 25,
    justifyContent: 'center',
    fontSize: 14,
    [mediaQueries.tabletPortrait]: {
      fontSize: 18,
    },
  },
  ({ temperatureColour, temperatureBackgroundColour }) => ({
    color: temperatureColour,
    backgroundColor: temperatureBackgroundColour,
  }),
);

export const WeatherTempHolder = glamorous.div({
  display: 'flex',
});

// Tabs

export const WeatherTabRowContainer = glamorous.div({
  fontFamily: fonts.$theSunMedium,
  display: 'flex',
  flexDirection: 'row',
  [mediaQueries.tabletPortrait]: {
    flexDirection: 'column',
  },
});

export const WeatherRowContainer = glamorous.div({
  label: 'weather-row-container',
  position: 'absolute',
  zIndex: 4,
  bottom: 60,
  left: '50%',
  transform: 'translateX(-50%)',
  [mediaQueries.tabletPortrait]: {
    left: 10,
    transform: 'translateX(0)',
    bottom: 'auto',
    top: 10,
  },
});

export const WeatherTabContainer = glamorous.div({
  margin: 1,
  cursor: 'pointer',
  position: 'relative',
});

export const WeatherTabBody = glamorous.div<{
  selected: boolean;
  backgroundColour: string;
}>(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minWidth: 65,
    height: 75,
    [mediaQueries.tabletPortrait]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour,
  }),
);

export const WeatherTabArrow = glamorous.div<{
  backgroundColour: string;
  visible: boolean;
}>(
  {
    label: 'weather-label-arrow',
    position: 'absolute',
    borderLeft: '33px solid transparent',
    borderRight: '33px solid transparent',
    top: -5,
    [mediaQueries.tabletPortrait]: {
      right: -42,
      top: 32,
      transform: 'rotate(90deg) translateX(0%)',
      borderLeft: '37px solid transparent',
      borderRight: '37px solid transparent',
    },
  },
  ({ backgroundColour, visible }) => ({
    borderBottom: `5px solid ${backgroundColour}`,
    visibility: visible ? 'hidden' : 'initial',
    [mediaQueries.tabletPortrait]: {
      borderBottom: `10px solid ${backgroundColour}`,
    },
  }),
);

export const WeatherTabDay = glamorous.div<{ colour: string }>(
  {
    fontFamily: fonts.$theSunHeavyNarrow,
    textTransform: 'uppercase',
    [mediaQueries.tabletPortrait]: {
      width: '100%',
      textAlign: 'center',
      fontSize: 18,
    },
  },
  ({ colour }) => ({
    color: colour,
  }),
);

export const WeatherTabDate = glamorous.div({
  label: 'weather-tab-date',
  display: 'none',
  [mediaQueries.tabletPortrait]: {
    display: 'inline-block',
  },
});

export const WeatherTabTemperature = glamorous.div<{ colour: string }>(
  {
    fontFamily: fonts.$theSunMedium,
    [mediaQueries.tabletPortrait]: {
      marginLeft: 10,
      fontSize: 18,
    },
  },
  ({ colour }) => ({
    color: colour,
  }),
);

// Background & CTA

export const WeatherBkgndContainer = glamorous.div({
  label: 'weather-bkgnd',
  width: '100%',
  minHeight: 510,
  position: 'relative',
  [mediaQueries.tabletPortrait]: {
    minHeight: 480,
  },
});

export const WeatherImg = glamorous.div<{ background: string }>(
  {
    width: '100%',
    minHeight: 510,
    position: 'absolute',
    [mediaQueries.tabletPortrait]: {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      minHeight: 480,
    },
  },
  ({ background }) => ({
    backgroundImage: `url(${background})`,
  }),
);

export const WeatherAtmosphere = glamorous(WeatherImg)({
  label: 'weather-atmosphere',
  zIndex: 1,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  [mediaQueries.tabletPortrait]: {
    backgroundSize: 'cover',
  },
});

export const WeatherIsland = glamorous(WeatherImg)({
  label: 'weather-island',
  zIndex: 2,
  height: 365,
  backgroundPositionX: '25%',
  backgroundSize: '75%',
  backgroundRepeat: 'no-repeat',
  [mediaQueries.tabletPortrait]: {
    backgroundSize: 'contain',
    backgroundPositionX: '65%',
    backgroundPositionY: '5%',
    minHeight: 400,
  },
});

export const WeatherCtaContainer = glamorous(AnchorButton)({
  label: 'weather-cta',
  position: 'absolute',
  bottom: 17,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 3,
  backgroundColor: colours.$newsSecondary,
  color: colours.$white,
  padding: '8px 12px',
  fontSize: 14,
  display: 'flex',
  justifyContent: 'content',
  alignItems: 'center',
  [mediaQueries.tabletPortrait]: {
    padding: '10px 25px',
  },
});

export const WeatherCtaIcon = glamorous.img({
  label: 'weather-cta-icon',
  width: 22,
  height: 22,
  marginRight: 10,
});

// Weather Icon

export const WeatherIcon = glamorous.div<{
  iconUrl: string;
}>(
  {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 23,
    height: 23,
    margin: '0 1px',
    filter: `drop-shadow(4px 4px 4px ${colours.$darkGrey})`,
    [mediaQueries.tabletPortrait]: {
      width: 30,
      height: 30,
    },
  },
  ({ iconUrl }) => ({
    backgroundImage: `url(${iconUrl})`,
  }),
);

export const WeatherIconBottom = glamorous(WeatherIcon)({
  position: 'absolute',
  bottom: -37,
  left: '50%',
  transform: 'translateX(-50%)',
  [mediaQueries.tabletPortrait]: {
    bottom: -43,
  },
});

export const WeatherIconTop = glamorous(WeatherIcon)({
  position: 'absolute',
  top: -37,
  left: '50%',
  transform: 'translateX(-50%)',
  [mediaQueries.tabletPortrait]: {
    top: -43,
  },
});

export const WeatherIconTab = glamorous(WeatherIcon)({
  width: 25,
  height: 25,
});

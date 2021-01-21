import glamorous from 'glamorous';
import { P } from '../typography/typography';
import { mediaQueries } from '../../styles/breakpoints';

import { colours } from '../../styles/colours';
import { ITheme } from '../../types/theme';
import { fonts } from '../../styles/fonts';
import { css } from 'glamor';

// animations
const wiggle = (css as any).keyframes({
  '0%, 60%, 70%, 80% , 90%, 100%': { left: '50%' },
  '65%, 85%': { left: '60%' },
  '75%, 95%': { left: '40%' },
});

const fadeOut = (css as any).keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const loadTransition = `all ${500}ms linear`;

function hexToRgb(hex: string, opacity: number) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16,
      )}, ${opacity})`
    : 'transparent';
}

export const RevealerWrapper = glamorous.div<{ loaded: boolean }>(
  {
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 20,
    transition: loadTransition,
    '& img': {
      width: '100%',
      display: 'block',
    },
  },
  ({ loaded }) => ({
    opacity: loaded ? 1 : 0,
  }),
);

export const RevealerContainer = glamorous.div({
  position: 'relative',
  overflow: 'hidden',
});

export const LabelContainer = glamorous.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 10,
});

export const Label = glamorous(P)<{ opacity: number }>(
  {
    fontSize: 14,
    color: colours.$darkGrey,
    [mediaQueries.tabletPortrait]: {
      fontSize: 14,
    },
  },
  ({ opacity }) => ({
    opacity: opacity ? opacity : 0,
  }),
);

export const Modified = glamorous.div<{ src: string }>(
  {
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  ({ src }) => ({
    background: `url(${src})`,
  }),
);

export const Handle = glamorous.div({
  width: 45,
  height: 45,
  borderRadius: '50%',
  position: 'absolute',
  zIndex: 10,
  top: 'calc(50% - 22.5px)',
  ':before': {
    position: 'absolute',
    content: `""`,
    border: `1px solid ${colours.$white}`,
    height: 1000,
    left: 21,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  ':hover': {
    cursor: 'pointer',
  },
});

export const IconHolder = glamorous.div<{ theme: ITheme; endAnimation: boolean }>(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    zIndex: 11,
    borderRadius: 30,
  },
  ({ theme, endAnimation }) => ({
    background: theme.primary,
    WebkitAnimation: endAnimation ? '' : `${wiggle} 2s linear infinite`,
  }),
);

export const Footer = glamorous.div<{ theme: ITheme; disappear: boolean }>(
  {
    position: 'absolute',
    bottom: 0,
    zIndex: 99,
    width: '100%',
    color: 'white',
    textAlign: 'center',
    fontFamily: fonts.$theSunHeavyCondensed,
    padding: 5,
    fontSize: 24,
    transition: 'width 2s',
  },
  ({ theme, disappear }) => ({
    background: hexToRgb(theme.primary, 0.7),
    WebkitAnimation: disappear ? `${fadeOut} 1s linear 1` : '',
    opacity: disappear ? 0 : 1,
  }),
);

import glamorous from 'glamorous';
import { H1, H2, P } from '../typography/typography';
import { mediaQueries } from '../../styles/breakpoints';
import { fonts } from '../../styles/fonts';

import { IAlign } from '../../utils/alignment-utils';

export const CountdownWrapper = glamorous.div<{
  backgroundImage?: string;
}>(
  {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: 185,
  },
  ({ backgroundImage }) => ({
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : '',
  }),
);

export const CountdownContent = glamorous.div<{ alignment?: IAlign }>(
  {
    position: 'absolute',
    width: '100%',
    padding: 10,
  },
  ({ alignment }) => ({
    top: alignment ? alignment.y : 0,
    left: alignment ? alignment.x : 0,
    transform: `translate(-${alignment ? alignment.x : 0}, -${alignment ? alignment.y : 0})`,
  }),
);

export const CountdownFrame = glamorous.div({
  minHeight: 80,
  position: 'relative',
});

export const CountdownAligner = glamorous.div<{ alignment?: IAlign }>(
  {
    position: 'absolute',
    width: '100%',
    top: '50%',
  },
  ({ alignment }) => ({
    left: alignment ? alignment.x : 0,
    transform: `translate(-${alignment ? alignment.x : 0}, -50%)`,
  }),
);

export const HeaderWrapper = glamorous.div({
  label: 'header-wrapper',
});

export const Title = glamorous(H2)<{ alignment?: IAlign; textColour: string }>(
  {
    marginBottom: 2,
    textTransform: 'uppercase',
    [mediaQueries.tabletPortrait]: {
      lineHeight: 1,
    },
  },
  ({ alignment, textColour }: any) => ({
    textAlign: alignment ? alignment.x : 'left',
    color: textColour,
  }),
);

export const SubTitle = glamorous(P)<{
  alignment?: IAlign;
  textColour: string;
}>(
  {
    fontSize: 14,
    lineHeight: 1.25,
    marginBottom: 5,
    [mediaQueries.tabletPortrait]: {
      fontSize: 14,
      lineHeight: 1.25,
    },
  },
  ({ alignment, textColour }: any) => ({
    textAlign: alignment ? alignment.x : 'left',
    color: textColour,
  }),
);

export const UnitWrapper = glamorous.div<{
  alignment?: IAlign;
  opacity?: number;
}>(
  {
    transition: `opacity ${500}ms linear`,
    transitionDelay: `${1000}ms`,
    ':nth-child(n) > div': {
      marginRight: 3,
    },
  },
  ({ alignment, opacity }: any) => ({
    opacity: opacity ? opacity : 0,
    textAlign: alignment ? alignment.x : 'left',
  }),
);

export const UnitInstance = glamorous.div({
  display: 'inline-block',
});

export const UnitValue = glamorous(H1)<{ textColour: string }>(
  {
    fontSize: 42,
    lineHeight: 1.17,
    fontFamily: fonts.$theSunHeavyNarrow,
    textAlign: 'center',
    marginBottom: 0,
    minWidth: 47,
    [mediaQueries.tabletPortrait]: {
      fontSize: 48,
      lineHeight: 1.17,
    },
    [mediaQueries.mobile]: {
      minWidth: 62,
      fontSize: 48,
      lineHeight: 1.17,
    },
  },
  ({ textColour }) => ({
    color: textColour,
  }),
);

export const UnitLabel = glamorous(P)<{ textColour: string }>(
  {
    fontSize: 12,
    lineHeight: 1.25,
    marginBottom: 0,
    textAlign: 'center',
    [mediaQueries.tabletPortrait]: {
      fontSize: 14,
      lineHeight: 1.25,
    },
    [mediaQueries.mobile]: {
      fontSize: 14,
      lineHeight: 1.25,
    },
  },
  ({ textColour }) => ({
    color: textColour,
  }),
);

export const DigitContainer = glamorous.div({
  width: 29,
  display: 'inline-block',
  textAlign: 'center',
});

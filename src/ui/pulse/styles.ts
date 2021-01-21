import glamorous from 'glamorous';

import { ArrowPosition } from '../label/label';
import { keyframes } from 'glamor';
import { colours } from '../../styles/colours';
import { mediaQueries } from '../../styles/breakpoints';

const pulsate = () => {
  return keyframes({
    '0%': { opacity: 0, transform: 'scale(0.1, 0.1)' },
    '50%': { opacity: 1 },
    '100%': { opacity: 0, transform: 'scale(1.2, 1.2)' },
  });
};

interface IGProps {
  labelSide?: string;
  labelPosition?: string;
  colour?: string;
  withMap?: boolean;
  size?: number;
}

export const PulseContainer = glamorous.div<IGProps>(
  {
    label: 'pulse-container',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  ({ withMap }) => ({
    transform: withMap ? `rotateX(55deg)` : 'rotateX(0deg)',
  }),
);

export const PulseInnerContainer = glamorous.div({
  label: 'pulse-inner-container',
  width: 38,
  height: 38,
  [mediaQueries.tabletPortrait]: {
    width: 48,
    height: 48,
  },
});

export const PulseInner = glamorous.div<IGProps>(
  {
    label: 'pulse-inner',
    borderRadius: '50%',
    position: 'absolute',
    animation: `${pulsate()} 1s ease-out`,
    animationIterationCount: 'infinite',
    animationDelay: '1.1s',
    opacity: 0,
    width: 30,
    height: 30,
    [mediaQueries.tabletPortrait]: {
      width: 40,
      height: 40,
    },
  },
  ({ colour }) => ({
    boxShadow: colour ? `0 0 1px 2px ${colour}` : `0 0 1px 2px ${colours.$main}`,
  }),
);

export const PulseNoLabel = glamorous(PulseInner)(
  {
    label: 'pulse-no-label',
    position: 'relative',
  },
  ({ size }) => ({
    height: size ? size : 30,
    width: size ? size : 30,
    [mediaQueries.tabletPortrait]: {
      height: size ? size : 40,
      width: size ? size : 40,
    },
  }),
);

export const PulseTop = glamorous(PulseInner)(
  {
    label: 'pulse-top',
  },
  ({ labelPosition, withMap }) => ({
    top: withMap ? -50 : -22,
    transform: labelPosition === ArrowPosition.CENTER ? 'translateX(-50%)' : 'translateX(0%)',
    left:
      labelPosition === ArrowPosition.LEFT
        ? 5
        : labelPosition === ArrowPosition.CENTER
        ? 'calc(50% - 15px)'
        : 'auto',
    right:
      labelPosition === ArrowPosition.RIGHT
        ? 5
        : labelPosition === ArrowPosition.CENTER
        ? '50%'
        : 'auto',
    [mediaQueries.tabletPortrait]: {
      top: withMap ? -50 : -32,
      left:
        labelPosition === ArrowPosition.LEFT
          ? 2
          : labelPosition === ArrowPosition.CENTER
          ? 'calc(50% - 20px)'
          : 'auto',
      right:
        labelPosition === ArrowPosition.RIGHT
          ? 2
          : labelPosition === ArrowPosition.CENTER
          ? '50%'
          : 'auto',
    },
  }),
);

export const PulseBottom = glamorous(PulseInner)(
  {
    label: 'pulse-bottom',
  },
  ({ labelPosition, withMap }) => ({
    bottom: withMap ? -50 : -22,
    transform: labelPosition === ArrowPosition.CENTER ? 'translateX(-50%)' : 'translateX(0%)',
    left:
      labelPosition === ArrowPosition.LEFT
        ? 5
        : labelPosition === ArrowPosition.CENTER
        ? 'calc(50% - 15px)'
        : 'auto',
    right:
      labelPosition === ArrowPosition.RIGHT
        ? 5
        : labelPosition === ArrowPosition.CENTER
        ? '50%'
        : 'auto',
    [mediaQueries.tabletPortrait]: {
      bottom: withMap ? -50 : -32,
      left:
        labelPosition === ArrowPosition.LEFT
          ? 2
          : labelPosition === ArrowPosition.CENTER
          ? 'calc(50% - 20px)'
          : 'auto',
      right:
        labelPosition === ArrowPosition.RIGHT
          ? 2
          : labelPosition === ArrowPosition.CENTER
          ? '50%'
          : 'auto',
    },
  }),
);

export const PulseLeft = glamorous(PulseInner)(
  {
    label: 'pulse-left',
  },
  ({ labelPosition, withMap }) => ({
    left: withMap ? -35 : -22,
    transform: labelPosition === ArrowPosition.CENTER ? 'translateY(-50%)' : 'translateY(0%)',
    top:
      labelPosition === ArrowPosition.TOP
        ? 5
        : labelPosition === ArrowPosition.CENTER
        ? 'calc(50% - 15px)'
        : 'auto',
    bottom:
      labelPosition === ArrowPosition.BOTTOM
        ? 5
        : labelPosition === ArrowPosition.CENTER
        ? '50%'
        : 'auto',
    [mediaQueries.tabletPortrait]: {
      left: withMap ? -35 : -32,
      top:
        labelPosition === ArrowPosition.TOP
          ? 2
          : labelPosition === ArrowPosition.CENTER
          ? 'calc(50% - 20px)'
          : 'auto',
      bottom:
        labelPosition === ArrowPosition.BOTTOM
          ? 2
          : labelPosition === ArrowPosition.CENTER
          ? '50%'
          : 'auto',
    },
  }),
);

export const PulseRight = glamorous(PulseInner)(
  {
    label: 'pulse-right',
  },
  ({ labelPosition, withMap }) => ({
    right: withMap ? -35 : -22,
    transform: labelPosition === ArrowPosition.CENTER ? 'translateY(-50%)' : 'translateY(0%)',
    top:
      labelPosition === ArrowPosition.TOP
        ? 5
        : labelPosition === ArrowPosition.CENTER
        ? 'calc(50% - 15px)'
        : 'auto',
    bottom:
      labelPosition === ArrowPosition.BOTTOM
        ? 5
        : labelPosition === ArrowPosition.CENTER
        ? '50%'
        : 'auto',
    [mediaQueries.tabletPortrait]: {
      right: withMap ? -35 : -32,
      top:
        labelPosition === ArrowPosition.TOP
          ? 2
          : labelPosition === ArrowPosition.CENTER
          ? 'calc(50% - 20px)'
          : 'auto',
      bottom:
        labelPosition === ArrowPosition.BOTTOM
          ? 2
          : labelPosition === ArrowPosition.CENTER
          ? '50%'
          : 'auto',
    },
  }),
);

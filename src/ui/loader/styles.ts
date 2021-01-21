import glamorous from 'glamorous';
import { keyframes } from 'glamor';

interface IGProps {
  backgroundColour?: string;
  dotColour?: string;
}

export const LoaderWrapper = glamorous.div<IGProps>(
  {
    label: 'loader-wrapper',
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour,
  }),
);

const slideKeyframes = keyframes({
  '0%': {
    opacity: 0,
    transform: `translateX(-300px)`,
  },
  '33%': {
    opacity: 1,
    transform: `translateX(0px)`,
  },
  '66%': {
    opacity: 1,
    transform: `translateX(0px)`,
  },
  '100%': {
    opacity: 0,
    transform: `translateX(300px)`,
  },
});

const slideTime = '3s';
const slideSettings = 'infinite ease-in-out';

export const Dot = glamorous.span<IGProps>(
  {
    label: 'dot',
    fontSize: 20,
    opacity: 0,
    '&:nth-child(6)': {
      animation: `${slideKeyframes} ${slideTime} ${slideSettings}`,
    },
    '&:nth-child(5)': {
      animation: `${slideKeyframes} ${slideTime} 100ms ${slideSettings}`,
    },
    '&:nth-child(4)': {
      animation: `${slideKeyframes} ${slideTime} 200ms ${slideSettings}`,
    },
    '&:nth-child(3)': {
      animation: `${slideKeyframes} ${slideTime} 300ms ${slideSettings}`,
    },
    '&:nth-child(2)': {
      animation: `${slideKeyframes} ${slideTime} 400ms ${slideSettings}`,
    },
    '&:nth-child(1)': {
      animation: `${slideKeyframes} ${slideTime} 500ms ${slideSettings}`,
    },
  },
  ({ dotColour }) => ({
    color: dotColour,
  }),
);

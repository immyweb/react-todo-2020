import glamorous from 'glamorous';

import { mediaQueries } from '../../styles/breakpoints';

export const InteractiveImageContainer = glamorous.section({
  label: 'interactive-image-container',
  width: '100%',
  height: '100%',
});

export const InteractiveImageInner = glamorous.div({
  label: 'interactive-image-inner',
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const Image = glamorous.img({
  label: 'interactive-image',
  position: 'relative',
  width: '100%',
});

export const Hotspot = glamorous.div<{
  top: number;
  left: number;
}>(
  {
    label: 'interactive-hotspot',
    position: 'absolute',
    zIndex: 5,
  },
  ({ top, left }) => ({
    top: `${top}%`,
    left: `${left}%`,
    [mediaQueries.tabletPortrait]: {
      top: `${top}%`,
      left: `${left}%`,
    },
  }),
);

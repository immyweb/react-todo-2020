import glamorous from 'glamorous';

import { colours } from '../../styles/colours';
import { fonts } from '../../styles/fonts';
import { BtnNoStyle } from '../../styles/globals';
import { Direction } from './types';

export const CarouselContainer = glamorous.section({
  label: 'carousel-container',
  paddingBottom: 33,
  marginBottom: 25,
  position: 'relative',
  width: '100%',
});

export const Slide = glamorous.div({
  label: 'carousel-slide',
  cursor: 'pointer',
  padding: '0 10px',
  ':focus': {
    outline: 'none',
  },
});

export const SlideLink = glamorous.a({
  label: 'carousel-link',
  display: 'inline-block',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  textDecoration: 'none',
});

export const SlideImg = glamorous.img<{ borderColour: string }>(
  {
    label: 'carousel-image',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  ({ borderColour }) => ({
    borderBottom: `3px solid ${borderColour}`,
  }),
);

export const SlideLabel = glamorous.p<{ txtColour: string }>(
  {
    label: 'carousel-label',
    textAlign: 'center',
    fontFamily: fonts.$theSunHeavyNarrow,
    fontSize: 18,
    paddingTop: 8,
  },
  ({ txtColour }) => ({
    color: txtColour,
  }),
);

export const SlideNav = glamorous(BtnNoStyle)<{ direction: Direction }>(
  {
    label: 'carousel-nav',
    position: 'absolute',
    zIndex: 3,
    bottom: -47,
    width: 48,
    height: 48,
    ':hover': {
      cursor: 'pointer',
    },
  },
  ({ direction }) => ({
    left: direction === Direction.PREV ? 25 : 'auto',
    right: direction === Direction.NEXT ? 25 : 'auto',
  }),
);

// Pagination

export const PaginationContainer = glamorous.div({
  label: 'pagination-container',
  position: 'absolute',
  bottom: 0,
  zIndex: 2,
  width: '100%',
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Dot = glamorous.span<{ colour?: string; label?: string }>(
  {
    display: 'inline-block',
    borderRadius: '50%',
    margin: '0 5px',
  },
  ({ colour, label }) => ({
    label,
    background: colour ? colour : colours.$news,
  }),
);

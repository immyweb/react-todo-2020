import glamorous from 'glamorous';

import Button from '../buttons/buttons';
import { colours } from '../../styles/colours';
import { mediaQueries } from '../../styles/breakpoints';
import { fonts } from '../../styles/fonts';

import { rgba, transparentize } from 'polished';

interface IGProps {
  open?: boolean;
  height?: string;
  innerTaller?: boolean;
}

export const ModalContainer = glamorous.div<IGProps>(
  {
    label: 'modal-container',
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: rgba(colours.$black, 0.5),
    top: 0,
    left: 0,
    zIndex: 160,
  },
  ({ open }) => ({
    visibility: open ? 'visible' : 'hidden',
  }),
);

export const ModalInner = glamorous.div<IGProps>(
  {
    label: 'modal-inner',
    position: 'relative',
    height: '95%',
    width: '90%',
    top: '50%',
    transform: 'translateY(-50%)',
    background: colours.$white,
    margin: '0 auto',
    padding: '20px 20px 30px 20px',
    overflowY: 'hidden',
    msOverflowStyle: '-ms-autohiding-scrollbar',
    borderRadius: 2,
    [mediaQueries.tabletPortrait]: {
      width: 620,
    },
  },
  ({ innerTaller }) => ({
    height: innerTaller ? '95%' : 'auto',
    [mediaQueries.tabletPortrait]: {
      height: innerTaller ? '80%' : 'auto',
    },
  }),
);

export const ModalContent = glamorous.div<IGProps>(
  {
    label: 'modal-content',
    position: 'relative',
    overflowY: 'auto',
    msOverflowStyle: '-ms-autohiding-scrollbar',
    height: '100%',
    ':after': {
      content: ' ',
      width: '100%',
      position: 'fixed',
      left: 0,
      bottom: 28,
      background: `linear-gradient(to top, ${transparentize(0, colours.$white)} 20%, ${transparentize(
        1,
        colours.$white,
      )})`,
      zIndex: 161,
    },
  },
  ({ innerTaller }) => ({
    paddingBottom: innerTaller ? 60 : 0,
    ':after': {
      height: innerTaller ? 60 : 0,
    },
  }),
);

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
  top: 10,
  right: 10,
  height: 28,
  width: 28,
  background: colours.$white,
  borderRadius: '50%',
  ':hover': {
    cursor: 'pointer',
  },
});

export const BtnOpen = glamorous(Button)({
  label: 'modal-btn-open',
});

import * as React from 'react';
import glamorous from 'glamorous';

import Button from '../buttons/buttons';
import { mediaQueries } from '../../styles/breakpoints';
import { Copy } from './styles';
import { colours } from '../../styles/colours';
import { transparentize } from 'polished';
import { fonts } from '../../styles/fonts';

interface IProps {
  onCloseScreen(): void;
  onGoToUrl(): void;
}

export const EndScreen: React.SFC<IProps> = ({ onCloseScreen, onGoToUrl }) => {
  return (
    <EndScreenContainer>
      <EndScreenInner>
        <Image
          src="https://www.thesun.co.uk/wp-content/uploads/2018/03/ianwright.png"
          alt="The Sun Six"
        />
        <Copy>
          Get six scores right
          <br />
          this weekend &amp;
        </Copy>
        <Copy fontsize={34} fontbold={true} lineheight={1.2}>
          WIN £1 MILLION
        </Copy>
        <Button background={colours.$football} fullWidth={true} onClick={onGoToUrl}>
          Play now for free
        </Button>
        <Link onClick={onCloseScreen}>No thanks</Link>
      </EndScreenInner>
    </EndScreenContainer>
  );
};

const EndScreenContainer = glamorous.div({
  label: 'end-screen-container',
  width: '100vw',
  height: '100vh',
  background: transparentize(0.5, colours.$black),
  top: 0,
  left: 0,
  textAlign: 'center',
  position: 'fixed',
  zIndex: 17,
});

const EndScreenInner = glamorous.div({
  label: 'end-screen-inner',
  width: '90%',
  height: 'auto',
  background: colours.$white,
  padding: '10px 35px',
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 16,
  [mediaQueries.tabletPortrait]: {
    width: 360,
  },
});

const Image = glamorous.img({
  label: 'end-screen-image',
  margin: '0 auto',
});

export const Link = glamorous.a({
  label: 'end-screen-no',
  color: colours.$football,
  fontFamily: fonts.$theSunMedium,
  marginTop: 10,
  marginBottom: 5,
  display: 'block',
  fontSize: 16,
  ':hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

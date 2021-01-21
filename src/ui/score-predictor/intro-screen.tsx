import * as React from 'react';
import glamorous from 'glamorous';

import Button from '../buttons/buttons';
import { MessageContainer, Heading, Copy } from './styles';
import { colours } from '../../styles/colours';

interface IProps {
  slideWidth: number;
  introHeadline: string;
  introTxt: string;
  onStartGame(): void;
}

const IntroScreen: React.SFC<IProps> = ({ slideWidth, introHeadline, introTxt, onStartGame }) => {
  return (
    <MessageContainer width={slideWidth}>
      <Inner className={'ttt-inner'}>
        <Heading fontColour={colours.$football}>{introHeadline}</Heading>
        <Copy>{introTxt}</Copy>
        <Button background={colours.$football} onClick={onStartGame} fullWidth={true}>
          Play Now
        </Button>
      </Inner>
    </MessageContainer>
  );
};

const Inner = glamorous.div({
  label: 'intro-inner',
  width: 300,
  margin: '0 auto',
});

export default IntroScreen;

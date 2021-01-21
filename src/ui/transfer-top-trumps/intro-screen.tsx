import * as React from 'react';

import { Gradient } from './gradient';
import ButtonCta from './button-cta';

import {
  TTLozengeBtn,
  BadgeImageHolder,
  Badge,
  Inner,
  TTHeadline,
  TTSubHeadline,
  IntroHeader,
  IntroInstructions,
  IntroContent,
  IntroInstructionsContent,
  IntroInstructionsContentP,
  BtnHolder,
  Divider,
  BadgeImage,
} from './styles';
import { colours } from '../../styles/colours';

import { IIntro, IClub } from './types';
import { ITheme } from '../../types/theme';

interface IProps extends IIntro {
  className?: string;
  theme: ITheme;
  targetClub: IClub;
  onStartGame(): void;
}

export const IntroScreen: React.SFC<IProps> = ({
  headline,
  subHeadline,
  introHeadline,
  introCopy,
  no,
  yes,
  playBtn,
  theme,
  targetClub,
  onStartGame,
}) => {
  return (
    <div>
      <Inner className={'ttt-intro'}>
        <TTHeadline className={'ttt-intro-headline'} fontColour={theme.primary}>
          {headline}
        </TTHeadline>
        <TTSubHeadline className={'ttt-intro-subheadline'} fontColour={colours.$white}>
          {subHeadline}
        </TTSubHeadline>
        <BadgeImageHolder className={'ttt-intro-badge'}>
          <Gradient colour={targetClub.teamColours} top={30} />
          <Badge size={85}>
            <BadgeImage src={targetClub.badge} alt={targetClub.name} />
          </Badge>
        </BadgeImageHolder>
        <IntroHeader className={'ttt-intro-header'}>{introHeadline}</IntroHeader>
        <IntroContent className={'ttt-intro-content'} color={theme.primary}>
          {introCopy}
        </IntroContent>
        <IntroInstructions className={'ttt-intro-instructions'}>
          <IntroInstructionsContent reverse={true}>
            <ButtonCta
              bkgndTop={colours.$lightRed}
              bkgndBottom={colours.$darkRed}
              iconName={'cross-solid'}
              disabled={true}
            />
            <IntroInstructionsContentP>{no}</IntroInstructionsContentP>
          </IntroInstructionsContent>
          <Divider />
          <IntroInstructionsContent>
            <ButtonCta
              bkgndTop={colours.$lightGreen}
              bkgndBottom={colours.$darkGreen}
              iconName={'tick-solid'}
              disabled={true}
            />
            <IntroInstructionsContentP>{yes}</IntroInstructionsContentP>
          </IntroInstructionsContent>
        </IntroInstructions>
        <BtnHolder className={'ttt-intro-button'}>
          <TTLozengeBtn
            bkgndTop={theme.primary}
            bkgndBottom={theme.secondary}
            onClick={onStartGame}
          >
            {playBtn}
          </TTLozengeBtn>
        </BtnHolder>
      </Inner>
    </div>
  );
};

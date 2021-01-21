import * as React from 'react';

import { TTIntroInner, TTWrapper, TTButton, TTIntroButtonHolder } from './styles';

import { IIntroScreen } from './types';
import { ITheme } from '../../types/theme';

interface IProps extends IIntroScreen {
  className?: string;
  theme: ITheme;
  onStartGame(): void;
}

export const IntroScreen: React.SFC<IProps> = ({
  playButtonText,
  theme,
  onStartGame,
  imageMobile,
  imageDesktop,
}) => {
  return (
    <TTIntroInner
      className={'tt-intro-inner'}
      imageMobile={imageMobile}
      imageDesktop={imageDesktop}
    >
      <TTWrapper>
        <TTIntroButtonHolder className={'tt-intro-button-holder'}>
          <TTButton
            className="tt-intro-button"
            backgroundColour={theme.primary}
            hoverBackgroundColour={theme.secondary}
            onClick={onStartGame}
          >
            {playButtonText}
          </TTButton>
        </TTIntroButtonHolder>
      </TTWrapper>
    </TTIntroInner>
  );
};

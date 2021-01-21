import * as React from 'react';

import { IVoteScreen } from './types';
import { ITheme } from '../../types/theme';
import {
  TTDefaultInner,
  TTVoteButtonContainer,
  TTVoteButton,
  TTVoteButtonThumb,
  TTVoteButtonThumbContainer,
  TTVoteButtonText,
  TTWrapper,
} from './styles';

interface IProps extends IVoteScreen {
  className: string;
  theme: ITheme;
  clickVote: (cardIds: string[]) => void;
}

export const Vote: React.SFC<IProps> = ({ theme, cards, clickVote, imageMobile, imageDesktop }) => {
  return (
    <TTDefaultInner imageMobile={imageMobile} imageDesktop={imageDesktop}>
      <TTWrapper>
        <TTVoteButtonContainer>
          {cards.map(({ id, fName, sName, imageThumb }) => (
            <TTVoteButton
              key={sName}
              onClick={() => clickVote([id])}
              colour={theme.primary}
              hoverBackgroundColour={theme.secondary}
            >
              <TTVoteButtonThumbContainer>
                <TTVoteButtonThumb src={imageThumb} />
              </TTVoteButtonThumbContainer>
              <TTVoteButtonText colour={theme.secondary}>{`${fName} ${sName}`}</TTVoteButtonText>
            </TTVoteButton>
          ))}
        </TTVoteButtonContainer>
      </TTWrapper>
    </TTDefaultInner>
  );
};

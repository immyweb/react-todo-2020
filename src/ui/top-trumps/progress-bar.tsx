import * as React from 'react';

import { ICard } from './types';
import { ITheme } from '../../types/theme';
import {
  TTProgressBarContainer,
  TTProgressBarInnerContainer,
  TTProgressBarCircle,
  TTProgressBarArrowContainer,
  TTProgressBarArrow,
} from './styles';

interface IProps {
  className: string;
  cards: ICard[];
  theme: ITheme;
  currentCardIndex: number;
  onClickRight: () => void;
  onClickLeft: () => void;
}

const onClickConditional = (disabled: boolean, func: IProps['onClickLeft']) => {
  if (!disabled) {
    func();
  }
};

export const ProgressBar: React.SFC<IProps> = ({
  cards,
  theme,
  onClickLeft,
  onClickRight,
  currentCardIndex,
}) => {
  const items = cards.map((card, i) => {
    const { id } = card;

    return (
      <TTProgressBarCircle
        viewed={i === currentCardIndex}
        inactiveColour={theme.primary}
        className={'tt-progress'}
        key={id}
      />
    );
  });

  const firstArrowDisabled = currentCardIndex === 0;

  return (
    <TTProgressBarContainer
      className="tt-progress_bar-container"
      borderColour={theme.primary}
      bkgnd={theme.secondary}
    >
      <TTProgressBarArrowContainer
        right={false}
        onClick={() => onClickConditional(firstArrowDisabled, onClickLeft)}
      >
        <TTProgressBarArrow disabled={firstArrowDisabled} right={false} />
      </TTProgressBarArrowContainer>
      <TTProgressBarInnerContainer>{items}</TTProgressBarInnerContainer>
      <TTProgressBarArrowContainer right={true} onClick={onClickRight}>
        <TTProgressBarArrow disabled={false} right={true} />
      </TTProgressBarArrowContainer>
    </TTProgressBarContainer>
  );
};

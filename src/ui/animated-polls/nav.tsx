import * as React from 'react';

import Icon from '../icon/icon';
import { colours } from '../../styles/colours';
import { APNavIcon, APNav } from './styles';

interface IProps {
  onClickRight: () => void;
  onClickLeft: () => void;
  currentCardIndex: number;
}

const onClickConditional = (disabled: boolean, func: IProps['onClickLeft']) => {
  if (!disabled) {
    func();
  }
};

export const Nav: React.SFC<IProps> = ({ onClickLeft, onClickRight, currentCardIndex }) => {
  const firstArrowDisabled = currentCardIndex === 0;
  return (
    <APNav>
      <APNavIcon
        disabled={firstArrowDisabled}
        onClick={() => onClickConditional(firstArrowDisabled, onClickLeft)}
      >
        <Icon iconName={'chevron-solid-left'} iconSize={14} iconColour={colours.$white} />
      </APNavIcon>
      <APNavIcon disabled={false} onClick={onClickRight}>
        <Icon iconName={'chevron-solid-right'} iconSize={14} iconColour={colours.$white} />
      </APNavIcon>
    </APNav>
  );
};

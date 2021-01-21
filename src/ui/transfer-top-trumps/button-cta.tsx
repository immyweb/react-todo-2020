import * as React from 'react';

import Icon from '../icon/icon';
import { colours } from '../../styles/colours';

import { TTRoundBtn } from './styles';

interface IProps {
  size?: number;
  bkgndTop: string;
  bkgndBottom: string;
  borderWidth?: number;
  iconName: string;
  iconSize?: number;
  disabled?: boolean;
  className?: string;
  onClick?(): void;
}

const ButtonCta: React.SFC<IProps> = ({
  size,
  bkgndTop,
  bkgndBottom,
  borderWidth,
  iconName,
  iconSize,
  disabled,
  onClick,
  className,
}) => {
  return (
    <TTRoundBtn
      className={className}
      size={size}
      borderWidth={borderWidth}
      bkgndTop={bkgndTop}
      bkgndBottom={bkgndBottom}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon iconName={iconName} iconColour={colours.$white} iconSize={iconSize ? iconSize : 32} />
    </TTRoundBtn>
  );
};

export default ButtonCta;

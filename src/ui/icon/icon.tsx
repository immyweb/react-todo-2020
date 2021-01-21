import * as React from 'react';

import { colours } from '../../styles/colours';

interface IProps {
  iconName: string;
  iconColour?: string;
  iconSize?: number;
}

const Icon: React.FC<IProps> = ({ iconName, iconColour, iconSize }) => {
  return (
    <i
      style={{
        color: iconColour,
        fontSize: `${iconSize}px`,
        height: `${iconSize}px`,
        display: 'inline-block',
      }}
      className={`sunicon sunicon-${iconName}`}
    />
  );
};

Icon.defaultProps = {
  iconColour: colours.$main,
  iconSize: 16,
};

export default Icon;

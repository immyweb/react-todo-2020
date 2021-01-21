import * as React from 'react';

import { TTCard } from './styles';

import { ITheme } from '../../types/theme';
import { ICard } from './types';

interface IProps {
  theme: ITheme;
  className?: string;
  card: ICard;
}

export const Card: React.SFC<IProps> = ({ card: { imageMobile, imageDesktop } }) => {
  return <TTCard className={'tt-card'} imageMobile={imageMobile} imageDesktop={imageDesktop} />;
};

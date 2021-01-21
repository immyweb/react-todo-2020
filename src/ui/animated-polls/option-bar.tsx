import * as React from 'react';

import Icon from '../icon/icon';
import {
  APOptionBar,
  APOptionBarLabel,
  APOptionBarCta,
  APOptionBarIcon,
  APOptionBarIconLabel,
  APOptionBarCtaIcon,
} from './styles';

import { ICard } from './types';
import { colours } from '../../styles/colours';

interface IProps extends ICard {
  primary: string;
  secondary: string;
  clickVote: (cardIds: string[]) => void;
}

export const OptionBar: React.SFC<IProps> = ({
  id,
  iconImg,
  title,
  primary,
  secondary,
  clickVote,
}) => {
  return (
    <APOptionBar onClick={() => clickVote([id])}>
      <APOptionBarLabel bkgnd={primary}>
        <APOptionBarIcon src={iconImg} alt={title} />
        <APOptionBarIconLabel>{title}</APOptionBarIconLabel>
      </APOptionBarLabel>
      <APOptionBarCta bkgnd={secondary}>
        <APOptionBarCtaIcon>
          <Icon iconName={'plus-solo'} iconSize={20} iconColour={colours.$white} />
        </APOptionBarCtaIcon>
      </APOptionBarCta>
    </APOptionBar>
  );
};

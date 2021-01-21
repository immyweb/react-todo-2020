import * as React from 'react';

import ButtonCta from './button-cta';
import { colours } from '../../styles/colours';
import { IPlayer } from './types';
import { ITheme } from '../../types/theme';
import {
  ProgressBarImage,
  ProgressBarContainer,
  ProgressBarInner,
  ProgressBarIcon,
} from './styles';

interface IProps {
  players: IPlayer[];
  theme: ITheme;
}

export const ProgressBar: React.SFC<IProps> = ({ players, theme }) => {
  const items = players.map(player => {
    const { id, imageMobile, sName, voted, active, selected } = player;

    return (
      <ProgressBarInner className={'ttt-progress'} key={player.sName}>
        {voted && selected && (
          <ProgressBarIcon>
            <ButtonCta
              bkgndTop={colours.$lightGreen}
              bkgndBottom={colours.$darkGreen}
              iconName={'tick-solid'}
              size={20}
              borderWidth={1}
              iconSize={8}
              disabled={true}
            />
          </ProgressBarIcon>
        )}
        {voted && !selected && (
          <ProgressBarIcon>
            <ButtonCta
              bkgndTop={colours.$lightRed}
              bkgndBottom={colours.$darkRed}
              iconName={'cross-solid'}
              size={20}
              borderWidth={1}
              iconSize={7}
              disabled={true}
            />
          </ProgressBarIcon>
        )}
        <ProgressBarImage key={id} voted={voted} active={active} selected={selected}>
          <img src={imageMobile} alt={sName} />
        </ProgressBarImage>
      </ProgressBarInner>
    );
  });
  return <ProgressBarContainer bkgnd={theme.secondary}>{items}</ProgressBarContainer>;
};

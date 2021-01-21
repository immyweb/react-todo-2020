import * as React from 'react';

import ButtonCta from './button-cta';

import { colours } from '../../styles/colours';
import { ControlsHolder } from './styles';

import { Vote, IPlayer } from './types';

interface IProps {
  currentPlayer: IPlayer;
  className?: string;
  onCastVote(player: IPlayer, vote: Vote): void;
}

export const Controls: React.SFC<IProps> = ({ currentPlayer, onCastVote }) => {
  return (
    <ControlsHolder>
      <ButtonCta
        className={'ttt-button-no'}
        bkgndTop={colours.$lightRed}
        bkgndBottom={colours.$darkRed}
        iconName={'cross-solid'}
        onClick={() => onCastVote(currentPlayer, Vote.no)}
      />
      <ButtonCta
        className={'ttt-button-yes'}
        bkgndTop={colours.$lightGreen}
        bkgndBottom={colours.$darkGreen}
        iconName={'tick-solid'}
        onClick={() => onCastVote(currentPlayer, Vote.yes)}
      />
    </ControlsHolder>
  );
};

import * as React from 'react';

import { APProgressBar, APProgressBarItem } from './styles';

import { ICard } from './types';

interface IProps {
  options: ICard[];
  currentCardIndex: number;
}

export const ProgressBar: React.SFC<IProps> = ({ options, currentCardIndex }) => {
  const items = options.map((option, i) => {
    const { id } = option;

    return <APProgressBarItem viewed={i === currentCardIndex} key={id} />;
  });
  return <APProgressBar>{items}</APProgressBar>;
};

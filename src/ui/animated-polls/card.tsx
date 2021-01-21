import * as React from 'react';

import { APCard, APHeadline, APCopy, APCardImg, APCardCopy } from './styles';

import { ICard } from './types';

export const CardScreen: React.SFC<ICard> = ({ imageMobile, imageDesktop, title, copy }) => {
  return (
    <APCard>
      <APCardImg imageMobile={imageMobile} imageDesktop={imageDesktop} />
      <APCardCopy>
        <APHeadline>{title}</APHeadline>
        <APCopy>{copy}</APCopy>
      </APCardCopy>
    </APCard>
  );
};

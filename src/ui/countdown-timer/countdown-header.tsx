import * as React from 'react';

import { IDetails } from './types';

import { HeaderWrapper, Title, SubTitle } from './styles';
import { fonts } from '../../styles/fonts';
import { IAlign } from '../../utils/alignment-utils';

interface IProps {
  details: IDetails;
  titleColour: string;
  subTitleColour: string;
  alignment: IAlign;
}

export const CountdownHeader: React.FC<IProps> = ({ details, titleColour, subTitleColour, alignment }) => {
  return (
    <HeaderWrapper>
      {details.title && (
        <Title
          className={'countdown-timer-title'}
          alignment={alignment}
          textColour={titleColour}
          fontName={fonts.$theSunHeavyCondensed}
        >
          {details.title}
        </Title>
      )}
      {details.subTitle && (
        <SubTitle className={'countdown-timer-subtitle'} alignment={alignment} textColour={subTitleColour}>
          {details.subTitle}
        </SubTitle>
      )}
    </HeaderWrapper>
  );
};

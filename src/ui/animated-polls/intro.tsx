import * as React from 'react';

import {
  APIntro,
  APHeadline,
  APCopy,
  APIntroCopy,
  APIntroImg,
  APIntroLink,
  APIntroHashTag,
} from './styles';

import { IIntroScreen } from './types';

export const IntroScreen: React.SFC<IIntroScreen> = ({
  imageMobile,
  imageDesktop,
  title,
  introText,
  cta,
  ctaLink,
  ctaUrl,
}) => {
  return (
    <APIntro>
      <APIntroImg imageMobile={imageMobile} imageDesktop={imageDesktop} />
      <APIntroCopy>
        <APHeadline>{title}</APHeadline>
        {introText.map((text, i) => (
          <APCopy key={i}>{text}</APCopy>
        ))}
        <APCopy>
          <APIntroLink href={ctaUrl}>
            {cta} <APIntroHashTag>{ctaLink}</APIntroHashTag>
          </APIntroLink>
        </APCopy>
      </APIntroCopy>
    </APIntro>
  );
};

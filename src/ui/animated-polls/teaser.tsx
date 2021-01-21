import * as React from 'react';

import Button from '../buttons/buttons';
import { breakPoints } from '../../styles/breakpoints';

import {
  APTeaser,
  APTeaserImage,
  APTeaserLogo,
  APTeaserVideo,
  APTeaserInner,
  APHeadline,
  APCopy,
} from './styles';

import { ITheme } from '../../types';
import { ITeaserScreen } from './types';

interface IProps extends ITeaserScreen {
  theme: ITheme;
  onOpenModal(id: string, children: React.ReactNode): void;
}

export const TeaserScreen: React.SFC<IProps> = ({
  theme,
  iconImage,
  iconImageAlt,
  title,
  copy,
  cta,
  mp4Mobile,
  mp4Desktop,
  onOpenModal,
  children,
}) => {
  return (
    <APTeaser>
      <APTeaserLogo src={iconImage} alt={iconImageAlt} backgroundColour={theme.primary} />
      <APTeaserImage />
      <APTeaserVideo loop autoPlay muted playsInline>
        <source
          src={mp4Mobile}
          type="video/mp4"
          media={`all and (max-width: ${breakPoints.$mobileInner}px)`}
        />
        <source src={mp4Desktop} type="video/mp4" />
        Your browser does not support the video tag.
      </APTeaserVideo>
      <APTeaserInner>
        <APHeadline>{title}</APHeadline>
        <APCopy>{copy}</APCopy>
        <Button
          background={theme.primary}
          fullWidth
          onClick={() => onOpenModal('animated-polls-modal', children)}
        >
          {cta}
        </Button>
      </APTeaserInner>
    </APTeaser>
  );
};

import * as React from 'react';

import { TitleWrapper, Highlight, Title, SubTitle } from './styles';
import { fonts } from '../../styles/fonts';

import { colours } from '../../styles/colours';
import { ITheme } from '../../types/theme';

import { IAlign } from '../../utils/alignment-utils';
import { dangerouslySet } from '../../utils/html-utils';

interface IProps {
  className?: string;
  inline?: boolean;
  highlight?: string;
  title?: string;
  subTitle?: string;
  theme?: ITheme;
  alignment?: IAlign;
  background?: boolean;
}

const defaultProps = {
  inline: false,
  theme: {
    primary: colours.$main,
    secondary: colours.$mainSecondary,
  },
  alignment: {
    x: 'left',
  },
  background: false,
};

export const ComponentHeader: React.SFC<IProps> = ({
  className,
  inline,
  highlight,
  title,
  subTitle,
  theme,
  alignment,
  background,
}) => {
  const _inline = inline ? inline : defaultProps.inline;
  const _theme = theme ? theme : defaultProps.theme;
  const _alignment = alignment ? alignment : defaultProps.alignment;
  const _background = background ? background : defaultProps.background;

  const returnText = () => {
    if (background) {
      return (
        <Title
          fontName={fonts.$theSunHeavyCondensed}
          inline={_inline}
          alignment={_alignment}
          background={_background}
        >
          {title}
        </Title>
      );
    }

    return (
      <div>
        {highlight && (
          <Highlight
            fontName={fonts.$theSunHeavyCondensed}
            fontColour={_theme.primary}
            inline={_inline}
            alignment={_alignment}
            background={_background}
          >
            {highlight}
          </Highlight>
        )}
        <Title
          fontName={fonts.$theSunHeavyCondensed}
          inline={_inline}
          alignment={_alignment}
          background={_background}
        >
          {title}
        </Title>
      </div>
    );
  };

  return (
    <div className={className}>
      <TitleWrapper
        theme={theme}
        inline={_inline}
        alignment={_alignment}
        background={_background}
        className={`${className}-inner`}
      >
        {returnText()}
      </TitleWrapper>
      {subTitle && !background && (
        <SubTitle
          className={`${className}-subtitle`}
          linkColour={_theme.primary}
          alignment={_alignment}
          dangerouslySetInnerHTML={dangerouslySet(`${subTitle}`)}
          hasBackground={_background}
        />
      )}
    </div>
  );
};

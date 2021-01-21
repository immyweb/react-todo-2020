import glamorous from 'glamorous';

import { P, H2 } from '../typography/typography';
import { colours } from '../../styles/colours';

import { mediaQueries } from '../../styles/breakpoints';
import { IAlign } from '../../utils/alignment-utils';

interface IGProps {
  inline?: boolean;
  alignment?: IAlign;
  linkColour?: string;
  background?: boolean;
  hasBackground?: boolean;
}

const styles = {
  fontSizeLarge: 28,
  fontSizeSmall: 24,
  inlineHighlight: 16,
  marginBottomLarge: 12,
  h2LineHeight: 1.14,
  pLineHeight: 1.38,
};

export const TitleWrapper = glamorous.div<IGProps>(
  {
    label: 'title-wrapper',
  },
  ({ alignment, background, theme }: any) => ({
    textAlign: alignment.x,
    background: background ? theme.primary : 'none',
    padding: background ? '13px 20px 13px 15px' : 0,
    borderLeftStyle: background ? 'solid' : 'none',
    borderLeftWidth: '5px',
    borderLeftColor: theme.secondary,
  }),
);

export const Title = glamorous(H2)<IGProps>(
  {
    label: 'title',
    fontSize: styles.fontSizeSmall,
    lineHeight: styles.h2LineHeight,
    [mediaQueries.tabletPortrait]: {
      fontSize: styles.fontSizeLarge,
      lineHeight: styles.h2LineHeight,
    },
  },
  ({ inline, alignment, background }: any) => ({
    display: inline ? 'inline-block' : 'block',
    textTransform: background ? 'unset' : inline ? 'unset' : 'uppercase',
    marginBottom: background ? 0 : styles.marginBottomLarge,
    textAlign: alignment.x,
    color: background ? colours.$white : colours.$offBlack,
  }),
);

export const Highlight = glamorous(Title)<IGProps>(
  {
    label: 'highlight',
    marginBottom: 0,
    fontSize: styles.fontSizeSmall,
    [mediaQueries.tabletPortrait]: {
      fontSize: styles.fontSizeLarge,
      marginBottom: 0,
    },
  },
  ({ inline, alignment, fontColour, background }: any) => ({
    fontSize: inline ? styles.fontSizeSmall : styles.inlineHighlight,
    textTransform: 'uppercase',
    textAlign: alignment.x,
    color: fontColour,
    marginRight: inline ? 4 : 0,
    [mediaQueries.tabletPortrait]: {
      fontSize: inline ? styles.fontSizeLarge : styles.inlineHighlight,
    },
  }),
);

export const SubTitle = glamorous(P)<IGProps>(
  {
    label: 'sub-title',
    lineHeight: styles.pLineHeight,
    textTransform: 'lowercase',
    marginBottom: 20,
    [mediaQueries.tabletPortrait]: {
      lineHeight: styles.pLineHeight,
    },
  },
  ({ alignment, linkColour, hasBackground }: any) => ({
    textAlign: alignment.x,
    marginTop: hasBackground ? 20 : 0,
    '& a': {
      color: linkColour,
      textDecoration: 'none',
    },

    '& a:hover': {
      textDecoration: 'underline',
    },
  }),
);

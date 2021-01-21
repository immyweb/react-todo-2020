import glamorous from 'glamorous';
import { colours } from '../../styles/colours';
import { mediaQueries } from '../../styles/breakpoints';
import { transparentize } from 'polished';

import { H4, H5, A } from '../../ui/typography/typography';

import { ITheme } from '../../types/theme';

// Accordion

export const AccordionContainer = glamorous.section({
  label: 'accordion-container',
  position: 'relative',
  marginBottom: 25,
  background: colours.$white,
  ':after': {
    clear: 'both',
    content: '""',
    display: 'table',
  },
});

export const Border = glamorous.div<{ colour: string }>(
  {
    label: 'border',
    left: 0,
    content: '""',
    position: 'absolute',
    top: 0,
    height: '100%',
    width: 5,
    zIndex: 10,
  },
  ({ colour }) => ({
    background: colour,
  }),
);

// Accordion Item

export const Item = glamorous.div<{
  open: boolean;
  index: number;
  theme: ITheme;
  border?: boolean;
}>(
  {
    label: 'accordion-item',
    position: 'relative',
    overflowY: 'hidden',
    transition: 'border-color 250ms ease',
    ':before': {
      content: '""',
      position: 'absolute',
      height: 0,
      width: 0,
      top: 22,
      left: 5,
      border: '4px solid transparent',
    },
    ':last-child': {
      borderBottom: 0,
    },
  },
  ({ open, index, theme, border }) => ({
    borderLeft: border ? `5px solid ${theme.secondary}` : 'none',
    borderBottom: open
      ? `2px solid ${transparentize(0.8, theme.primary)}`
      : `2px solid ${colours.$white}`,
    label: `${index}--accordion-item`,
  }),
);

// Accordion Item Head

export const Header = glamorous.header<{ open: boolean; colour: string }>(
  {
    label: 'accordion-header',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '15px 20px',
    minHeight: 80,
    color: colours.$offBlack,
    ':hover': {
      cursor: 'pointer',
    },
  },
  ({ open, colour }) => ({
    background: open ? colours.$white : transparentize(0.8, colour),
  }),
);

export const BadgeHolder = glamorous.div({
  label: 'badge-holder',
  display: 'flex',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
});

export const Badge = glamorous.img({
  label: 'badge',
  width: 50,
  height: 50,
});

export const TextHolder = glamorous.div<{ hasBadge?: boolean }>(
  {
    label: 'title-text',
    flexDirection: 'column',
    position: 'relative',
    paddingRight: 15,
  },
  ({ hasBadge }) => ({
    paddingLeft: hasBadge ? 15 : 0,
    flexBasis: hasBadge ? `calc(100% - 65px)` : '100%',
  }),
);

export const SubTitle = glamorous(H5)({
  label: 'accordion-date',
  marginBottom: 0,
});

export const Title = glamorous(H4)<{ index: number }>(
  {
    label: 'heading',
    marginBottom: 0,
    position: 'relative',
  },
  ({ index }) => ({
    label: `${index}--accordion-h4`,
  }),
);

// Accordion Item Body

export const defaultStyle = {
  transition: `opacity ${150}ms ease-out`,
  opacity: 0,
};

export const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

export const Panel = glamorous.article<{ open: boolean }>(
  {
    label: 'accordion-panel',
    padding: '0 20px',
    overflowY: 'hidden',
    [mediaQueries.tabletPortrait]: {
      borderBottom: 0,
    },
  },
  ({ open }) => ({
    display: open ? 'block' : 'none',
  }),
);

export const Copy = glamorous.div<{ colour: string }>(
  {
    label: 'accordion-copy',
    margin: '0 0 15px',
    '& a': {
      textDecoration: 'none',
    },
  },
  ({ colour }) => ({
    '& a': {
      color: colour,
    },
  }),
);

export const Link = glamorous(A)<{ colour: string }>(
  {
    label: 'accordion-link',
    display: 'inline-block',
  },
  ({ colour }) => ({
    color: colour,
  }),
);

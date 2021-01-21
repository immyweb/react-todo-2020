import glamorous, { CSSProperties } from 'glamorous';
import { breakPoints, mediaQueries } from './breakpoints';

export const FullWidth: CSSProperties = {
  width: '100%',
};

export const FixedWidth: CSSProperties = {
  position: 'relative',
  margin: '0 auto',
  maxWidth: breakPoints.$mobileInner,
  [mediaQueries.tabletPortrait]: {
    maxWidth: breakPoints.$tabletPortrait,
  },
};

export const ClearFix: CSSProperties = {
  '&::before, &::after': {
    content: `""`,
    display: 'table',
  },
  '&::after': {
    clear: 'both',
  },
};

export const Col: CSSProperties = {
  label: 'col',
  position: 'relative',
  float: 'left',
  padding: 10,
  boxSizing: 'border-box',
  background: 'white',
};

export const SunRow = glamorous.div({
  label: 'row',
  margin: '0px -10px',
  ...ClearFix,
});

export const SunColTwo = glamorous.div({
  label: 'sun-col-two',
  ...Col,
  width: '100%',
  [mediaQueries.tabletPortrait]: {
    width: '33.33333%',
  },
});

export const SunColSix = glamorous.div({
  label: 'sun-col-six',
  ...Col,
  width: '100%',
  [mediaQueries.tabletPortrait]: {
    width: '50%',
  },
});

export const SunColFour = glamorous.div({
  label: 'sun-col-four',
  ...Col,
  width: '100%',
  [mediaQueries.tabletPortrait]: {
    width: '66.66667%',
  },
});

export const HelpBlock = glamorous.div({
  label: 'help-block',
  width: '100%',
  height: 20,
});

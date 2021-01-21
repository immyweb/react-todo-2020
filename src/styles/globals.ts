import { css } from 'glamor';
import glamorous, { Img } from 'glamorous';

export const Image = glamorous(Img)({
  label: 'image',
  width: '100%',
  maxWidth: '100%',
  display: 'block',
  height: 'auto',
});

export const BtnNoStyle = glamorous.button({
  textShadow: 'none',
  textDecoration: 'none',
  WebkitFontSmoothing: 'antialiased',
  background: 'none',
  display: 'inline-block',
  boxShadow: 'none',
  padding: 0,
  border: 'none',
  ':focus': {
    outline: 0,
  },
});

export const AnchorButton = glamorous.a({
  textShadow: 'none',
  textDecoration: 'none',
  WebkitFontSmoothing: 'antialiased',
  background: 'none',
  display: 'inline-block',
  boxShadow: 'none',
  padding: 0,
  border: 'none',
  fontFamily: 'system-ui',
  ':focus': {
    outline: 0,
  },
});

css.global('*, *:after, *:before', {
  boxSizing: 'border-box',
});
css.global('body, html', {
  margin: 0,
  padding: 0,
  touchAction: 'manipulation',
  WebkitTapHighlightColor: 'transparent',
});
css.global('img', {
  maxWidth: '100%',
  display: 'block',
  height: 'auto',
});

import glamorous, { CSSProperties, P as Para } from 'glamorous';
import { colours } from '../../styles/colours';
import { mediaQueries } from '../../styles/breakpoints';
import { fonts } from '../../styles/fonts';

interface IFontProps {
  fontColour?: string;
  fontName?: string;
  pointSize?: number;
  txtalign?: string;
  uppercase?: string;
}

const sunTheme: CSSProperties = {
  textAlign: 'left',
  color: colours.$offBlack,
  marginTop: 0,
  marginBottom: '12px',
  fontWeight: 'normal',
  WebkitFontSmoothing: 'antialiased',
};

export const H1 = glamorous.h1<IFontProps>(
  {
    fontFamily: fonts.$theSunBold,
    fontSize: 24,
    lineHeight: 1.1,
    ...sunTheme,
    [mediaQueries.tabletPortrait]: {
      fontSize: 36,
      lineHeight: 1.17,
    },
  },
  ({ fontColour }) => ({
    color: fontColour,
  }),
);

export const H2 = glamorous.h2<IFontProps>(
  {
    fontSize: 22,
    lineHeight: '1',
    ...sunTheme,
    [mediaQueries.tabletPortrait]: {
      fontSize: 28,
      lineHeight: '1.17',
    },
  },
  ({ fontColour, fontName }) => ({
    color: fontColour,
    fontFamily: fontName ? `${fontName}` : fonts.$theSunHeavyCondensed,
  }),
);

export const H3 = glamorous.h3<IFontProps>(
  {
    fontFamily: fonts.$theSunBold,
    fontSize: 20,
    lineHeight: 1.1,
    ...sunTheme,
    marginBottom: 0,
    [mediaQueries.tabletPortrait]: {
      fontSize: 24,
      lineHeight: 1.17,
    },
  },
  ({ fontColour }) => ({
    color: fontColour,
  }),
);

export const H4 = glamorous.h4<IFontProps>(
  {
    fontFamily: fonts.$theSunBold,
    fontSize: 16,
    lineHeight: '1.38',
    ...sunTheme,
  },
  ({ fontColour }) => ({
    color: fontColour,
  }),
);

export const H5 = glamorous.h5<IFontProps>(
  {
    fontFamily: fonts.$theSunSlabRegular,
    fontSize: 16,
    lineHeight: '1.38',
    ...sunTheme,
  },
  ({ fontColour }) => ({
    color: fontColour,
  }),
);

export const P = glamorous(Para)<IFontProps>(
  {
    fontFamily: fonts.$theSunRegular,
    fontSize: 16,
    lineHeight: 1.5,
    ...sunTheme,
    [mediaQueries.tabletPortrait]: {
      fontSize: 16,
      lineHeight: 1.25,
    },
  },
  ({ fontColour, fontName, pointSize, txtalign }: any) => ({
    color: fontColour,
    fontFamily: fontName,
    fontSize: pointSize,
    textAlign: txtalign ? txtalign : 'left',
  }),
);

export const Span = glamorous.span<IFontProps>(
  {
    fontFamily: fonts.$theSunRegular,
    fontSize: 16,
    lineHeight: 1.5,
    ...sunTheme,
    [mediaQueries.tabletPortrait]: {
      fontSize: 16,
      lineHeight: 1.25,
    },
  },
  ({ fontColour, fontName, pointSize, txtalign }: any) => ({
    color: fontColour,
    fontFamily: fontName,
    fontSize: pointSize,
    textAlign: txtalign ? txtalign : 'left',
  }),
);

export const UL = glamorous.ul<IFontProps>(
  {
    fontFamily: fonts.$theSunMedium,
    fontSize: 16,
    lineHeight: 1.5,
    paddingLeft: 20,
    ...sunTheme,
    [mediaQueries.tabletPortrait]: {
      fontSize: 16,
      lineHeight: 1.25,
    },
  },
  ({ fontColour, fontName }) => ({
    color: fontColour,
    fontFamily: fontName,
  }),
);

export const A = glamorous.a<IFontProps>(
  {
    fontFamily: fonts.$theSunRegular,
    fontSize: 16,
    lineHeight: 1.5,
    textDecoration: 'none',
    ...sunTheme,
    ':hover': {
      textDecoration: 'underline',
    },
    [mediaQueries.tabletPortrait]: {
      fontSize: 16,
      lineHeight: 1.25,
    },
  },
  ({ fontColour }) => ({
    color: fontColour,
  }),
);

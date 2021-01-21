import glamorous from 'glamorous';

import { H3 } from '../typography/typography';
import { fonts } from '../../styles/fonts';

interface IGProps {
  backgroundColour?: string;
  marginBottom?: number;
}

export const ErrorWrapper = glamorous.div<IGProps>(
  {
    label: 'error-wrapper',
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  ({ backgroundColour }) => ({
    backgroundColor: backgroundColour,
  }),
);

export const Heading = glamorous(H3)<IGProps>(
  {
    fontFamily: fonts.$theSunHeavyCondensed,
    textAlign: 'center',
    fontSize: 22,
  },
  ({ marginBottom }) => ({
    marginBottom: marginBottom ? marginBottom : 5,
  }),
);

export const Graphic = glamorous.div({
  label: 'graphic',
  position: 'relative',
  margin: '0 auto 10px auto',
});

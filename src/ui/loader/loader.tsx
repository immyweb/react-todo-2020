import * as React from 'react';

import { colours } from '../../styles/colours';

import { LoaderWrapper, Dot } from './styles';

interface IProps {
  backgroundColour?: string;
  dotColour?: string;
}

export const Loader: React.SFC<IProps> = ({ backgroundColour, dotColour }) => {
  return (
    <LoaderWrapper backgroundColour={backgroundColour ? backgroundColour : 'none'}>
      <Dot dotColour={dotColour ? dotColour : colours.$lightGrey}>●</Dot>
      <Dot dotColour={dotColour ? dotColour : colours.$lightGrey}>●</Dot>
      <Dot dotColour={dotColour ? dotColour : colours.$lightGrey}>●</Dot>
      <Dot dotColour={dotColour ? dotColour : colours.$lightGrey}>●</Dot>
      <Dot dotColour={dotColour ? dotColour : colours.$lightGrey}>●</Dot>
      <Dot dotColour={dotColour ? dotColour : colours.$lightGrey}>●</Dot>
    </LoaderWrapper>
  );
};

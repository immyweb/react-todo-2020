import * as React from 'react';

import { GradientContainer, GradientGroup, GradientLine } from './styles';

export const Gradient: React.SFC<{
  colour: string;
  size?: number;
  top?: number;
  height?: number;
  opacity?: number;
}> = ({ colour, size, top, height, opacity }) => {
  return (
    <GradientContainer size={size} top={top} opacity={opacity}>
      <GradientGroup width={'60%'}>
        <GradientLine direction={'right'} teamColour={colour} height={height} />
        <GradientLine direction={'left'} teamColour={colour} height={height} />
      </GradientGroup>
      <GradientGroup width={'100%'}>
        <GradientLine direction={'right'} teamColour={colour} height={height} />
        <GradientLine direction={'left'} teamColour={colour} height={height} />
      </GradientGroup>
      <GradientGroup width={'60%'}>
        <GradientLine direction={'right'} teamColour={colour} height={height} />
        <GradientLine direction={'left'} teamColour={colour} height={height} />
      </GradientGroup>
    </GradientContainer>
  );
};

import * as React from 'react';
import Measure from 'react-measure';

import { PulseContainer, PulseNoLabel, PulseInnerContainer } from './styles';

interface IProps {
  colour?: string;
  size?: number;
  labelText?: string;
  onMeasure?(bounds: any): void;
}

const Pulse: React.SFC<IProps> = ({ colour, size, onMeasure, labelText }) => {
  return (
    <Measure
      bounds
      onResize={contentRect => {
        if (onMeasure && labelText) {
          const bounds = { ...contentRect.bounds, id: labelText };
          onMeasure(bounds);
        }
      }}
    >
      {({ measureRef }) => (
        <PulseContainer>
          <PulseInnerContainer innerRef={measureRef}>
            {<PulseNoLabel colour={colour} size={size} />}
          </PulseInnerContainer>
        </PulseContainer>
      )}
    </Measure>
  );
};

export default Pulse;

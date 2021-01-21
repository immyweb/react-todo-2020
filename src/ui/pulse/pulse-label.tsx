import * as React from 'react';
import { ArrowPosition } from '../label/label';

import { PulseContainer, PulseTop, PulseBottom, PulseLeft, PulseRight } from './styles';

interface IProps {
  withMap?: boolean;
  labelSide: ArrowPosition;
  labelPosition: ArrowPosition;
  colour?: string;
}

const renderPulses = (
  labelSide: ArrowPosition,
  labelPosition: ArrowPosition,
  withMap?: boolean,
  colour?: string,
) => {
  return (
    <div>
      {labelSide === ArrowPosition.TOP && (
        <PulseTop labelPosition={labelPosition} colour={colour} withMap={withMap} />
      )}
      {labelSide === ArrowPosition.BOTTOM && (
        <PulseBottom labelPosition={labelPosition} colour={colour} withMap={withMap} />
      )}
      {labelSide === ArrowPosition.LEFT && (
        <PulseLeft labelPosition={labelPosition} colour={colour} withMap={withMap} />
      )}
      {labelSide === ArrowPosition.RIGHT && (
        <PulseRight labelPosition={labelPosition} colour={colour} withMap={withMap} />
      )}
    </div>
  );
};

const PulseLabel: React.SFC<IProps> = ({
  withMap = false,
  labelSide = ArrowPosition.TOP,
  labelPosition = ArrowPosition.LEFT,
  colour,
}) => {
  return (
    <PulseContainer withMap={withMap} className={'pulse'}>
      {renderPulses(labelSide, labelPosition, withMap, colour)}
    </PulseContainer>
  );
};

export default PulseLabel;

import * as React from 'react';
import Measure from 'react-measure';

import {
  LabelContainer,
  LabelButton,
  LabelArrowBottom,
  LabelArrowTop,
  LabelArrowLeft,
  LabelArrowRight,
} from './styles';

export enum ArrowPosition {
  TOP = 'TOP',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  CENTER = 'CENTER',
}

interface IProps {
  children: React.ReactNode;
  bkgColour: string;
  txtColour?: string;
  arrowSide: ArrowPosition;
  arrowPosition: ArrowPosition;
  fontfamily?: string;
  uppercase?: boolean;
  fontSizeMobile?: number;
  fontSizeDesktop?: number;
  oneLine?: boolean;
  labelText?: string;
  onClick?: () => void;
  onMeasure?(bounds: any): void;
}

const Label: React.FC<IProps> = ({
  children,
  bkgColour,
  txtColour,
  arrowSide,
  arrowPosition,
  fontfamily,
  uppercase = true,
  fontSizeMobile,
  fontSizeDesktop,
  oneLine,
  onClick,
  onMeasure,
  labelText,
}) => {
  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        if (onMeasure && labelText) {
          const bounds = { ...contentRect.bounds, id: labelText };
          onMeasure(bounds);
        }
      }}
    >
      {({ measureRef }) => (
        <LabelContainer onClick={onClick} innerRef={measureRef} className={'label'}>
          <LabelButton
            bkgColour={bkgColour}
            txtColour={txtColour}
            fontfamily={fontfamily}
            uppercase={uppercase}
            fontSizeMobile={fontSizeMobile}
            fontSizeDesktop={fontSizeDesktop}
            oneLine={oneLine}
          >
            {children}
          </LabelButton>
          {arrowSide === ArrowPosition.TOP && <LabelArrowTop arrowPosition={arrowPosition} colour={bkgColour} />}
          {arrowSide === ArrowPosition.BOTTOM && <LabelArrowBottom arrowPosition={arrowPosition} colour={bkgColour} />}
          {arrowSide === ArrowPosition.LEFT && <LabelArrowLeft arrowPosition={arrowPosition} colour={bkgColour} />}
          {arrowSide === ArrowPosition.RIGHT && <LabelArrowRight arrowPosition={arrowPosition} colour={bkgColour} />}
        </LabelContainer>
      )}
    </Measure>
  );
};

export default Label;

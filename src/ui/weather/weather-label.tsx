import * as React from 'react';

import { Direction } from './enums';
import { IPosition } from '../../types/position';
import { colours } from '../../styles/colours';
import {
  WeatherLabelContainer,
  WeatherNameContainer,
  WeatherArrow,
  WeatherArrowBottom,
  WeatherArrowTop,
  WeatherName,
  WeatherTemperature,
  WeatherTempHolder,
  WeatherIcon,
  WeatherIconBottom,
  WeatherIconTop,
} from './styles';

export interface IProps {
  dayMax: string;
  nightMin: string;
  direction: Direction;
  arrowDirection: Direction;
  icon: string;
  mobilePosition: IPosition;
  desktopPosition: IPosition;
}

export const WeatherLabel: React.FC<IProps> = ({
  dayMax,
  nightMin,
  direction,
  arrowDirection,
  icon,
  mobilePosition,
  desktopPosition,
  children,
}) => (
  <WeatherLabelContainer
    className="WeatherLabelContainer"
    direction={direction}
    mTop={mobilePosition.top}
    mLeft={mobilePosition.left}
    dTop={desktopPosition.top}
    dLeft={desktopPosition.left}
  >
    <WeatherNameContainer direction={direction}>
      {arrowDirection === Direction.LEFT && (
        <div style={{ display: 'flex' }}>
          <WeatherIcon className="WeatherLabelIcon" iconUrl={icon} />
          <WeatherArrow className="WeatherLabelArrow" backgroundColour={colours.$offBlack} direction={arrowDirection} />
        </div>
      )}
      {arrowDirection === Direction.RIGHT && (
        <div style={{ display: 'flex' }}>
          <WeatherArrow className="WeatherLabelArrow" backgroundColour={colours.$offBlack} direction={arrowDirection} />
          <WeatherIcon className="WeatherLabelIcon" iconUrl={icon} />
        </div>
      )}
      {arrowDirection === Direction.BOTTOM && (
        <div>
          <WeatherArrowBottom className="WeatherLabelArrowBottom" backgroundColour={colours.$offBlack} />
          <WeatherIconBottom className="WeatherLabelIcon" iconUrl={icon} />
        </div>
      )}
      {arrowDirection === Direction.TOP && (
        <div>
          <WeatherArrowTop className="WeatherLabelArrowTop" backgroundColour={colours.$offBlack} />
          <WeatherIconTop className="WeatherLabelIcon" iconUrl={icon} />
        </div>
      )}
      <WeatherName className="WeatherLabelName" labelColour={colours.$white} labelBackgroundColour={colours.$offBlack}>
        {children}
      </WeatherName>
    </WeatherNameContainer>
    <WeatherTempHolder>
      <WeatherTemperature
        className="WeatherLabelTemperature"
        temperatureColour={colours.$white}
        temperatureBackgroundColour={colours.$mainSecondary}
      >
        {`${dayMax}°`}
      </WeatherTemperature>
      <WeatherTemperature
        className="WeatherLabelTemperature"
        temperatureColour={colours.$white}
        temperatureBackgroundColour={colours.$newsSecondary}
      >
        {`${nightMin}°`}
      </WeatherTemperature>
    </WeatherTempHolder>
  </WeatherLabelContainer>
);

import * as React from 'react';

import { colours } from '../../styles/colours';

import {
  WeatherTabContainer,
  WeatherTabBody,
  WeatherTabDay,
  WeatherTabDate,
  WeatherTabArrow,
  WeatherTabTemperature,
  WeatherIconTab,
} from './styles';

export interface IProps {
  day: string;
  date: string;
  icon: string;
  dayMax: string;
  nightMin: string;
  selected?: boolean;
  onClick?: () => void;
}

export const WeatherTab: React.SFC<IProps> = ({
  day,
  date,
  icon,
  dayMax,
  nightMin,
  selected = false,
  onClick,
}) => {
  const [r, g, b] = colours.$offBlackRGB;
  const opacity = selected ? '1' : '0.4';
  const backgroundColour = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return (
    <WeatherTabContainer onClick={onClick}>
      <WeatherTabArrow
        className="WeatherTabArrow"
        visible={!selected}
        backgroundColour={backgroundColour}
      />
      <WeatherTabBody
        className="WeatherTabBody"
        selected={selected}
        backgroundColour={backgroundColour}
      >
        <WeatherTabDay className="WeatherTabDay" colour={colours.$white}>
          {day}
          <WeatherTabDate>{`, ${date}`}</WeatherTabDate>
        </WeatherTabDay>
        <WeatherIconTab className="WeatherTabIcon" iconUrl={icon} />
        <WeatherTabTemperature className="WeatherTabTemperature" colour={colours.$white}>
          {`${dayMax}° | `}
          <span style={{ color: colours.$news }}>{`${nightMin}°`}</span>
        </WeatherTabTemperature>
      </WeatherTabBody>
    </WeatherTabContainer>
  );
};

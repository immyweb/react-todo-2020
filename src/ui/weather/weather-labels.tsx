import * as React from 'react';

import { WeatherLabel } from './weather-label';

import { WeatherIconUrls, Direction } from './enums';
import { ILocation } from './types';

export interface IProps {
  locations: ILocation[];
  selectedIndex: number;
  weekForecast: any;
}

export const WeatherLabels: React.FC<IProps> = ({ locations, selectedIndex, weekForecast }) => {
  const labels = locations.map((location, i) => {
    const { id, label, direction, arrowDirection, mobilePosition, desktopPosition } = location;

    return (
      <WeatherLabel
        key={i}
        dayMax={weekForecast[selectedIndex][id].day.DayMaximumTemperature}
        nightMin={weekForecast[selectedIndex][id].night.NightMinimumTemperature}
        direction={Direction[direction]}
        arrowDirection={Direction[arrowDirection]}
        icon={WeatherIconUrls[weekForecast[selectedIndex][id].day.WeatherType]}
        mobilePosition={mobilePosition}
        desktopPosition={desktopPosition}
      >
        {label}
      </WeatherLabel>
    );
  });
  return <React.Fragment>{labels}</React.Fragment>;
};

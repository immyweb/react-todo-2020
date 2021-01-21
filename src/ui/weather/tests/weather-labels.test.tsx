import * as React from 'react';
import { shallow } from 'enzyme';

import { WeatherLabels } from '../weather-labels';
import { WeatherLabel } from '../weather-label';

import { Direction, Locations } from '../enums';

const locations = [
  {
    id: 'WICK',
    label: Locations.WICK,
    direction: Direction.LEFT,
    position: {
      top: '5%',
      left: '15%',
    },
  },
  {
    id: 'LOND',
    label: Locations.LONDON,
    direction: Direction.RIGHT,
    position: {
      top: '15%',
      left: '5%',
    },
  },
];

const weekForecast = [
  {
    WICK: {
      date: 20190131,
      day: {
        WeatherType: 'SLEET',
        DayMaximumTemperature: '2',
        FeelsLikeDayMaximumTemperature: '-1',
        WindDirection: 'WSW',
        WindGustNoon: '9',
        ScreenRelativeHumidityNoon: '94',
        PrecipitationProbabilityDay: '78',
        WindSpeed: '9',
        Visibility: 'VG',
        MaxUVIndex: '1',
      },
      night: {
        WeatherType: 'CLOUDY',
        NightMinimumTemperature: '-1',
        FeelsLikeNightMinimumTemperature: '-4',
        WindDirection: 'W',
        WindGustMidnight: '16',
        ScreenRelativeHumidityMidnight: '96',
        PrecipitationProbabilityNight: '49',
        WindSpeed: '9',
        Visibility: 'VG',
      },
    },
    LOND: {
      date: 20190131,
      day: {
        WeatherType: 'PARTLY_CLOUDY_DAY',
        DayMaximumTemperature: '5',
        FeelsLikeDayMaximumTemperature: '1',
        WindDirection: 'E',
        WindGustNoon: '13',
        ScreenRelativeHumidityNoon: '75',
        PrecipitationProbabilityDay: '4',
        WindSpeed: '11',
        Visibility: 'GO',
        MaxUVIndex: '1',
      },
      night: {
        WeatherType: 'LIGHT_SNOW',
        NightMinimumTemperature: '1',
        FeelsLikeNightMinimumTemperature: '-4',
        WindDirection: 'E',
        WindGustMidnight: '27',
        ScreenRelativeHumidityMidnight: '88',
        PrecipitationProbabilityNight: '84',
        WindSpeed: '13',
        Visibility: 'MO',
      },
    },
  },
];

function shallowRender(props?: any) {
  return shallow(
    <WeatherLabels
      locations={locations}
      selectedIndex={0}
      weekForecast={weekForecast}
      {...props}
    />,
  );
}

describe('<WeatherLabels />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct number of labels', () => {
    const wrapper = shallowRender();
    const labels = wrapper.find(WeatherLabel);
    expect(labels.length).toEqual(2);
  });
});

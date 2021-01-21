import * as React from 'react';
import { shallow } from 'enzyme';

import Weather from '../';
import Error from '../../error';
import { WeatherBkgnd } from '../weather-bkgnd';

import { WeatherIconUrls, Locations, Direction } from '../enums';

jest.mock('unfetch', () => ({
  default: jest.fn(),
}));

import fetch from 'unfetch';

const data = {
  config: {
    theme: { primary: '#000000', secondary: '#ffffff' },
  },
  content: {
    map: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/ukmap.png',
    cta: {
      label: 'Latest news',
      icon: WeatherIconUrls.HAIL,
      url: 'https://www.thesun.co.uk',
    },
    locations: [
      {
        id: 'WICK',
        label: Locations.WICK,
        direction: Direction.LEFT,
        mobilePosition: {
          top: '5%',
          left: '15%',
        },
        desktopPosition: {
          top: '6%',
          left: '16%',
        },
      },
      {
        id: 'LOND',
        label: Locations.LONDON,
        direction: Direction.RIGHT,
        mobilePosition: {
          top: '15%',
          left: '5%',
        },
        desktopPosition: {
          top: '16%',
          left: '6%',
        },
      },
    ],
  },
};

const mockWeekForecast = {
  '20190131': {
    LOND: {
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
      date: 20190131,
    },
    UK: {
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
      date: 20190131,
    },
  },
  '20190201': {
    LOND: {
      day: {
        WeatherType: 'OVERCAST',
        DayMaximumTemperature: '5',
        FeelsLikeDayMaximumTemperature: '0',
        WindDirection: 'NE',
        WindGustNoon: '22',
        ScreenRelativeHumidityNoon: '85',
        PrecipitationProbabilityDay: '18',
        WindSpeed: '11',
        Visibility: 'GO',
        MaxUVIndex: '1',
      },
      night: {
        WeatherType: 'CLOUDY',
        NightMinimumTemperature: '2',
        FeelsLikeNightMinimumTemperature: '-2',
        WindDirection: 'NNW',
        WindGustMidnight: '22',
        ScreenRelativeHumidityMidnight: '87',
        PrecipitationProbabilityNight: '14',
        WindSpeed: '11',
        Visibility: 'VG',
      },
      date: 20190201,
    },
    UK: {
      day: {
        WeatherType: 'OVERCAST',
        DayMaximumTemperature: '5',
        FeelsLikeDayMaximumTemperature: '0',
        WindDirection: 'NE',
        WindGustNoon: '22',
        ScreenRelativeHumidityNoon: '85',
        PrecipitationProbabilityDay: '18',
        WindSpeed: '11',
        Visibility: 'GO',
        MaxUVIndex: '1',
      },
      night: {
        WeatherType: 'CLOUDY',
        NightMinimumTemperature: '2',
        FeelsLikeNightMinimumTemperature: '-2',
        WindDirection: 'NNW',
        WindGustMidnight: '22',
        ScreenRelativeHumidityMidnight: '87',
        PrecipitationProbabilityNight: '14',
        WindSpeed: '11',
        Visibility: 'VG',
      },
      date: 20190201,
    },
  },
};

function shallowRender(props?: any) {
  const { config, content } = data;
  return shallow(<Weather config={config} content={content} {...props} />);
}

beforeEach(() => {
  (fetch as jest.Mock).mockResolvedValue({
    json: () => mockWeekForecast,
  });
});

describe('<Weather />', () => {
  it('renders correctly ', done => {
    const wrapper = shallowRender();

    setImmediate(() => {
      wrapper.update();
      expect(
        wrapper
          .update()
          .find(WeatherBkgnd)
          .exists(),
      ).toBe(true);
      done();
    });
  });

  it('renders <Error /> if hasErrored state is true', done => {
    const wrapper = shallowRender();

    setImmediate(() => {
      wrapper.update().setState({
        hasErrored: true,
      });
      expect(
        wrapper
          .update()
          .find(Error)
          .exists(),
      ).toBe(true);
      done();
    });
  });

  describe('toggleTab', () => {
    it('sets correct state value', done => {
      const wrapper = shallowRender();

      setImmediate(() => {
        const instance = wrapper.instance() as Weather;
        instance.toggleTab(1);
        expect(instance.state.selectedIndex).toEqual(1);
        instance.toggleTab(0);
        expect(instance.state.selectedIndex).toEqual(0);
        done();
      });
    });
  });

  describe('sortTabData', () => {
    it('returns sorted tab forecast data and sets hasTabData to true', done => {
      const wrapper = shallowRender();

      setImmediate(() => {
        const instance = wrapper.instance() as Weather;
        instance.sortTabData(mockWeekForecast as any);
        expect(instance.state.hasTabData).toBe(true);
        const result = [
          { day: 'Thu', date: 'Jan 31', status: 'PARTLY_CLOUDY_DAY', dayMax: '5', nightMin: '1' },
          { day: 'Fri', date: 'Feb 01', status: 'OVERCAST', dayMax: '5', nightMin: '2' },
        ];
        expect(instance.state.tabForecast).toEqual(result);
        done();
      });
    });
  });

  describe('sortLocationData', () => {
    it('returns sorted tab forecast data and sets hasTabData to true', done => {
      const wrapper = shallowRender();

      setImmediate(() => {
        const instance = wrapper.instance() as Weather;
        instance.sortLocationData(mockWeekForecast as any);
        expect(instance.state.hasForecastData).toBe(true);
        const result = [
          {
            LOND: {
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
              date: 20190131,
            },
            UK: {
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
              date: 20190131,
            },
          },
          {
            LOND: {
              day: {
                WeatherType: 'OVERCAST',
                DayMaximumTemperature: '5',
                FeelsLikeDayMaximumTemperature: '0',
                WindDirection: 'NE',
                WindGustNoon: '22',
                ScreenRelativeHumidityNoon: '85',
                PrecipitationProbabilityDay: '18',
                WindSpeed: '11',
                Visibility: 'GO',
                MaxUVIndex: '1',
              },
              night: {
                WeatherType: 'CLOUDY',
                NightMinimumTemperature: '2',
                FeelsLikeNightMinimumTemperature: '-2',
                WindDirection: 'NNW',
                WindGustMidnight: '22',
                ScreenRelativeHumidityMidnight: '87',
                PrecipitationProbabilityNight: '14',
                WindSpeed: '11',
                Visibility: 'VG',
              },
              date: 20190201,
            },
            UK: {
              day: {
                WeatherType: 'OVERCAST',
                DayMaximumTemperature: '5',
                FeelsLikeDayMaximumTemperature: '0',
                WindDirection: 'NE',
                WindGustNoon: '22',
                ScreenRelativeHumidityNoon: '85',
                PrecipitationProbabilityDay: '18',
                WindSpeed: '11',
                Visibility: 'GO',
                MaxUVIndex: '1',
              },
              night: {
                WeatherType: 'CLOUDY',
                NightMinimumTemperature: '2',
                FeelsLikeNightMinimumTemperature: '-2',
                WindDirection: 'NNW',
                WindGustMidnight: '22',
                ScreenRelativeHumidityMidnight: '87',
                PrecipitationProbabilityNight: '14',
                WindSpeed: '11',
                Visibility: 'VG',
              },
              date: 20190201,
            },
          },
        ];
        expect(instance.state.weekForecast).toEqual(result);
        done();
      });
    });
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';
import { WeatherTab } from '../weather-tab';
import { WeatherIconUrls } from '../enums';

const defaultWeatherTabProps = {
  day: 'SAT',
  date: 'AUG 10',
  icon: WeatherIconUrls.SUNNY_DAY,
  dayMax: '22',
  nightMin: '5',
};

describe('<WeatherTab />', () => {
  it('renders correctly with default values', () => {
    const wrapper = shallow(<WeatherTab {...defaultWeatherTabProps} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders correctly with selected false', () => {
    const wrapper = shallow(<WeatherTab {...defaultWeatherTabProps} selected={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});

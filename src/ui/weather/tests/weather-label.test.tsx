import * as React from 'react';
import { shallow } from 'enzyme';
import { WeatherLabel } from '../weather-label';
import { WeatherIconUrls, Direction } from '../enums';
import { colours } from '../../../styles/colours';

const defaultWeatherLabelProps = {
  dayMax: '10',
  nightMin: '5',
  temperatureColour: colours.$white,
  temperatureBackgroundColour: colours.$mainSecondary,
  labelColour: colours.$white,
  labelBackgroundColour: colours.$offBlack,
  direction: Direction.LEFT,
  arrowDirection: Direction.LEFT,
  icon: WeatherIconUrls.SUNNY_DAY,
  mobilePosition: {
    top: '5%',
    left: '15%',
  },
  desktopPosition: {
    top: '5%',
    left: '15%',
  },
};

describe('<WeatherLabel />', () => {
  it('renders correctly with default values', () => {
    const wrapper = shallow(<WeatherLabel {...defaultWeatherLabelProps}>SWANSEA</WeatherLabel>);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders in reverse when direction is RIGHT', () => {
    const wrapper = shallow(
      <WeatherLabel {...defaultWeatherLabelProps} direction={Direction.RIGHT}>
        SWANSEA
      </WeatherLabel>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

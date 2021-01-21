import * as React from 'react';
import { shallow } from 'enzyme';
import { WeatherTabRow } from '../weather-tab-row';
import { WeatherIconUrls } from '../enums';
import { WeatherTab } from '../weather-tab';
// import { colours } from '../../styles/colours';

const defaultProps = {
  onClick: (x: number) => {
    // de nada
  },
};

describe('<WeatherTabRow />', () => {
  describe('renders', () => {
    it('renders correctly with default values', () => {
      const wrapper = shallow(
        <WeatherTabRow {...defaultProps}>
          <WeatherTab
            day={'FRI'}
            date={'AUG 10'}
            icon={WeatherIconUrls.SUNNY_DAY}
            dayMax={'12'}
            nightMin={'10'}
          />
          <WeatherTab
            day={'SAT'}
            date={'AUG 10'}
            icon={WeatherIconUrls.SUNNY_DAY}
            dayMax={'21'}
            nightMin={'10'}
          />
        </WeatherTabRow>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('onClick', () => {
    it('renders correctly with default values', () => {
      const wrapper = shallow(
        <WeatherTabRow {...defaultProps}>
          <WeatherTab
            day={'FRI'}
            date={'AUG 10'}
            icon={WeatherIconUrls.SUNNY_DAY}
            dayMax={'12'}
            nightMin={'10'}
          />
          <WeatherTab
            day={'SAT'}
            date={'AUG 10'}
            icon={WeatherIconUrls.SUNNY_DAY}
            dayMax={'21'}
            nightMin={'10'}
          />
        </WeatherTabRow>,
      );
      const instance = wrapper.instance() as WeatherTabRow;
      const mockFunction = jest.fn();

      instance.clickTab(321, mockFunction);

      expect(instance.state.selectedIndex).toBe(321);
      expect(mockFunction).toHaveBeenCalledWith(321);
      expect(mockFunction).toHaveBeenCalledTimes(1);
    });
  });
});

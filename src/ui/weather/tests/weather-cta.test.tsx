import * as React from 'react';
import { shallow } from 'enzyme';

import { WeatherCta } from '../weather-cta';
import { WeatherIconUrls } from '../enums';

function shallowRender(props?: any) {
  return shallow(
    <WeatherCta icon={WeatherIconUrls.SUNNY_DAY} url={'/location/to/go'} {...props} />,
  );
}

describe('<WeatherCta />', () => {
  it('sets the href correctly', () => {
    const wrapper = shallowRender();
    wrapper.simulate('click');
    expect(wrapper.props().href).toBe('/location/to/go');
    expect(wrapper.props().target).toBe('_blank');
  });
});

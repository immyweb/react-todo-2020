import * as React from 'react';
import { shallow } from 'enzyme';

import { WeatherBkgnd } from '../weather-bkgnd';
import { WeatherIconUrls } from '../enums';

function shallowRender(props?: any) {
  return shallow(
    <WeatherBkgnd
      ukImg={'https://www.thesun.co.uk/wp-content/uploads/2018/08/ukmap.png'}
      atmosphereImg={'https://www.thesun.co.uk/wp-content/uploads/2018/08/sunny_bg@2x.jpg'}
      ctaLabel={'Latest news'}
      icon={WeatherIconUrls.SUNNY_DAY}
      url={'location/to/go'}
      {...props}
    />,
  );
}

describe('<WeatherBkgnd />', () => {
  it('sets the url correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper.childAt(2).props().url).toBe('location/to/go');
  });
});

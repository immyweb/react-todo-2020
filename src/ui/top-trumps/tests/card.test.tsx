import * as React from 'react';
import { shallow } from 'enzyme';

import { Card } from '../card';

const card = {
  imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/WILLIAN_mobile_@2x.jpg',
  imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/WILLIAN_desktop_@2x.jpg',
};

function shallowRender(props?: any) {
  return shallow(
    <Card
      className="of 2018"
      card={card}
      theme={{ primary: '#000000', secondary: '#ffffff' }}
      {...props}
    />,
  );
}

describe('<Card />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });
});

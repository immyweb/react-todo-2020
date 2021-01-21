import * as React from 'react';
import { shallow } from 'enzyme';

import { Card } from './card';

const player = {
  id: 'l_messi',
  fname: 'lionel',
  sName: 'messi',
  imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/WILLIAN_mobile_@2x.jpg',
  imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/WILLIAN_desktop_@2x.jpg',
  club: 'Barcelona',
  clubBadge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/chelsea_@2x.png',
  age: 31,
  fee: '£100m',
  position: 'CF',
  idx: 0,
};

function shallowRender(props?: any) {
  return shallow(
    <Card
      currentClub={'Man Utd'}
      pos={'CF'}
      estFee={'£100m'}
      playerAge={'23'}
      player={player}
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

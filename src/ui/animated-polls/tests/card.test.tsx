import * as React from 'react';
import { shallow } from 'enzyme';

import { CardScreen } from '../card';

const card = {
  imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/handlebar.jpg',
  imageDesktop: '',
  title: 'The Chevron',
  copy: 'Looks a bit more Bruce Forsyth than Tom Selleck...',
};

function shallowRender(props?: any) {
  return shallow(<CardScreen {...card} {...props} />);
}

describe('<CardScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });
});

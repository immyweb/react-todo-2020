import * as React from 'react';
import { shallow } from 'enzyme';

import { TeaserScreen } from '../teaser';
import Button from '../../buttons/buttons';

const theme = {
  primary: '#000000',
  secondary: '#ffffff',
};

const teaserScreen = {
  title: 'title',
  copy: 'copy',
  cta: 'cta',
  imageMobile: 'http://www.thesun.co.uk/imageMobile.jpg',
  imageDesktop: 'http://www.thesun.co.uk/imageDesktop.jpg',
};

function shallowRender(props?: any) {
  return shallow(<TeaserScreen theme={theme} {...teaserScreen} {...props} />);
}

describe('<TeaserScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onOpenModal when user clicks play now button', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onOpenModal: fn });
    const btn = wrapper.find(Button);
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

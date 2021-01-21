import * as React from 'react';
import { shallow } from 'enzyme';

import { Controls } from './controls';
import ButtonCta from './button-cta';

const currentPlayer = {
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
  return shallow(<Controls currentPlayer={currentPlayer} onCastVote={() => {}} {...props} />);
}

describe('<Controls />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onCastVote when No button is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onCastVote: fn });
    const btn = wrapper.find(ButtonCta).first();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('calls onCastVote when Yes button is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onCastVote: fn });
    const btn = wrapper.find(ButtonCta).last();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

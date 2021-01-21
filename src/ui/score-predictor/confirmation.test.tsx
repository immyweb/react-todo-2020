import * as React from 'react';
import { shallow } from 'enzyme';
import { Confirmation } from './confirmation';
import Button from '../buttons/buttons';

describe('<Confirmation />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Confirmation slideWidth={400} onConfirm={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('onConfirm is called when button is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Confirmation slideWidth={400} onConfirm={fn} />);
    const btn = wrapper.find(Button);
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

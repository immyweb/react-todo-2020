import * as React from 'react';
import { shallow } from 'enzyme';
import { Error } from './error';

import { colours } from '../../styles/colours';

import { ErrorWrapper, Heading } from './styles';
import { ErrorGraphic } from './error-graphic';
import Button from '../buttons/buttons';

const theme = {
  primary: colours.$fabulous,
  secondary: colours.$fabulousSecondary,
};

describe('<Error />', () => {
  it('renders ok', () => {
    const wrapper = shallow(<Error />);
    const loaderWrapper = wrapper.find(ErrorWrapper);
    expect(loaderWrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a graphic', () => {
    const wrapper = shallow(<Error />);
    const errorGraphic = wrapper.find(ErrorGraphic);
    expect(errorGraphic).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a heading and sub heading', () => {
    const wrapper = shallow(<Error />);
    const heading = wrapper.find(Heading);
    expect(heading).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a button', () => {
    const wrapper = shallow(<Error />);
    const button = wrapper.find(Button);
    expect(button).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('wrapper accepts a background colour prop', () => {
    const wrapper = shallow(<Error backgroundColour={colours.$fabulous} />);
    const backgroundColour = wrapper.find(ErrorWrapper).props().backgroundColour;
    expect(backgroundColour).toEqual('#e665bf');
    expect(wrapper).toMatchSnapshot();
  });

  it('header accepts fontColour prop', () => {
    const wrapper = shallow(<Error theme={theme} />);
    const headingFontColour = wrapper
      .find(Heading)
      .at(0)
      .props().fontColour;
    expect(headingFontColour).toEqual(colours.$fabulous);
    expect(wrapper).toMatchSnapshot();
  });

  it('button accepts background prop', () => {
    const wrapper = shallow(<Error theme={theme} />);
    const buttonBackgroundColour = wrapper.find(Button).props().background;
    expect(buttonBackgroundColour).toEqual(colours.$fabulous);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls refresh when clicked', () => {
    const fn = jest.fn();
    const button = shallow(<Button onClick={() => fn()} />);
    button.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(button).toMatchSnapshot();
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';
import { Loader } from './loader';

import { colours } from '../../styles/colours';

import { LoaderWrapper, Dot } from './styles';

describe('<Loader />', () => {
  it('renders ok', () => {
    const wrapper = shallow(<Loader />);
    const loaderWrapper = wrapper.find(LoaderWrapper);
    expect(loaderWrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('has 6 dots', () => {
    const wrapper = shallow(<Loader />);
    const dot = wrapper.find(Dot);
    expect(dot.length).toBe(6);
    expect(wrapper).toMatchSnapshot();
  });

  it('accepts a background colour prop', () => {
    const wrapper = shallow(<Loader backgroundColour={colours.$fabulous} />);
    const backgroundColour = wrapper.find(LoaderWrapper).props().backgroundColour;
    expect(backgroundColour).toEqual('#e665bf');
    expect(wrapper).toMatchSnapshot();
  });

  it('accepts a dot colour prop', () => {
    const wrapper = shallow(<Loader dotColour={colours.$fabulous} />);

    const dotColour = wrapper
      .find(Dot)
      .at(1)
      .props().dotColour;
    expect(dotColour).toEqual('#e665bf');
    expect(wrapper).toMatchSnapshot();
  });
});

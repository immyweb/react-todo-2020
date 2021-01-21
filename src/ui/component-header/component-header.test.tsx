import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ComponentHeader } from './component-header';

import { TitleWrapper, Highlight, Title, SubTitle } from './styles';

import { colours } from '../../styles/colours';

const theme = {
  primary: colours.$fabulous,
  secondary: colours.$fabulousSecondary,
};

const shallowComponentHeader = () => {
  return shallow(
    <ComponentHeader
      inline
      highlight="highlight"
      title="rest of headline"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
      alignment={{ x: 'left' }}
      theme={theme}
    />,
  );
};

const mountComponentHeaderBackground = () => {
  return mount(
    <ComponentHeader
      inline
      highlight="highlight"
      title="rest of headline"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
      alignment={{ x: 'left' }}
      theme={theme}
      background={true}
    />,
  );
};

const mountComponentHeader = () => {
  return mount(
    <ComponentHeader
      inline
      highlight="highlight"
      title="rest of headline"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
      alignment={{ x: 'left' }}
      theme={theme}
    />,
  );
};

describe('<ComponentHeader />', () => {
  it('renders correctly', () => {
    const wrapper = shallowComponentHeader();
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('has a inline prop', () => {
    const wrapper = mountComponentHeader();
    expect(wrapper.prop('inline')).toEqual(true);
  });
  it('has a theme prop', () => {
    const wrapper = mountComponentHeader();
    expect(wrapper.prop('theme')).toEqual({
      primary: colours.$fabulous,
      secondary: colours.$fabulousSecondary,
    });
  });
  it('has alignment prop', () => {
    const wrapper = mountComponentHeader();
    expect(wrapper.prop('alignment')).toEqual({ x: 'left' });
  });

  it('has a background prop', () => {
    const wrapper = mountComponentHeaderBackground();
    expect(wrapper.prop('background')).toEqual(true);
  });

  it('has a Highlight', () => {
    const wrapper = shallowComponentHeader();
    const highlight = wrapper.find(Highlight);
    expect(highlight).toHaveLength(1);
  });
  it('has a Title', () => {
    const wrapper = shallowComponentHeader();
    const title = wrapper.find(Title);
    expect(title).toHaveLength(1);
  });
  it('has a TitleWrapper', () => {
    const wrapper = shallowComponentHeader();
    const titleWrapper = wrapper.find(TitleWrapper);
    expect(titleWrapper).toHaveLength(1);
  });
  it('has a SubTitle', () => {
    const wrapper = shallowComponentHeader();
    const subTitle = wrapper.find(SubTitle);
    expect(subTitle).toHaveLength(1);
  });
});

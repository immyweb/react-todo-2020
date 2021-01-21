import * as React from 'react';
import { shallow } from 'enzyme';
import ImageRevealer from '../';

import { RevealerContainer, LabelContainer, Label, Modified } from '../styles';
import { colours } from '../../../styles/colours';

import { ComponentHeader } from '../../component-header';
import { StartPosition } from '../types';

const data = {
  config: {
    startPosition: StartPosition.CENTER,
    theme: {
      primary: colours.$fabulous,
      secondary: colours.$fabulousSecondary,
    },
  },
  content: {
    headline: 'Image revealer',
    original: {
      src: '"https://via.placeholder.com/620x750',
      label: '--- World',
    },
    modified: {
      src: 'https://via.placeholder.com/620x750/000000/',
      label: 'Hello ---',
    },
  },
};

const shallowRender = () => {
  const { config, content } = data;
  return shallow(<ImageRevealer config={config} content={content} id={'ir'} />);
};

describe('<Image Revealer />', () => {
  it('has a RevealerContainer', () => {
    const wrapper = shallowRender();
    const revealerContainer = wrapper.find(RevealerContainer);
    expect(revealerContainer).toHaveLength(1);
  });

  it('has a LabelContainer', () => {
    const wrapper = shallowRender();
    const labelContainer = wrapper.find(LabelContainer);
    expect(labelContainer).toHaveLength(1);
  });

  it('has x2 Labels', () => {
    const wrapper = shallowRender();
    const label = wrapper.find(Label);
    expect(label).toHaveLength(2);
  });

  it('has an Original img', () => {
    const wrapper = shallowRender();
    const original = wrapper.find('.image-revealer-original-img');
    expect(original).toHaveLength(1);
  });

  it('has a Modified div', () => {
    const wrapper = shallowRender();
    const modified = wrapper.find(Modified);
    expect(modified).toHaveLength(1);
  });

  it('calls onImgLoad', () => {
    const spy = jest.spyOn(ImageRevealer.prototype, 'onImgLoad');
    const wrapper = shallowRender();
    const original = wrapper.find('.image-revealer-original-img');
    original.simulate('load');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders correct headline and theme', () => {
    const wrapper = shallowRender();
    const header = wrapper.find(ComponentHeader);
    expect(header.props().title).toEqual('Image revealer');
    expect(header.props().theme).toEqual({
      primary: '#e665bf',
      secondary: '#a6498a',
    });
  });
});

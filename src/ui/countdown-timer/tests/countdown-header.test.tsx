import * as React from 'react';
import { shallow } from 'enzyme';

import { CountdownHeader } from '../countdown-header';
import { Title, SubTitle } from '../styles';

const data = {
  title: 'COUNTDOWN DURING',
  subTitle: 'Display this during countdown',
};

const shallowRender = (props?: any) => {
  return shallow(
    <CountdownHeader
      details={data}
      titleColour={'#000000'}
      subTitleColour={'#000000'}
      alignment={{ x: 'right', y: 'bottom' }}
      {...props}
    />,
  );
};

describe('<CountdownHeader />', () => {
  describe('if there is a title', () => {
    it('should be displayed', () => {
      const wrapper = shallowRender().find(Title);
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.dive().text()).toBe(data.title);
    });
  });
  describe('if there is a title', () => {
    it('should be displayed', () => {
      const wrapper = shallowRender().find(SubTitle);
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.dive().text()).toBe(data.subTitle);
    });
  });
});

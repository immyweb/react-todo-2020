import * as React from 'react';
import { shallow } from 'enzyme';

import Icon from './icon';
import { colours } from '../../styles/colours';

const options = {
  iconName: 'bullet-solid',
  iconColour: colours.$main,
  iconSize: 20,
};

describe('<Icon />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Icon iconName={options.iconName} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('has sunicon & sunicon-[icon-class-name]', () => {
    const wrapper = shallow(<Icon iconName={options.iconName} />);
    expect(wrapper.find('i').hasClass('sunicon'));
    expect(wrapper.find('i').hasClass(`sunicon-${options.iconName}`));
    expect(wrapper).toMatchSnapshot();
  });
  it('has defined iconColour prop', () => {
    const wrapper = shallow(<Icon iconName={options.iconName} iconColour={options.iconColour} />);
    const style = wrapper.find('i').props().style;
    style && expect(style.color).toEqual(options.iconColour);
    expect(wrapper).toMatchSnapshot();
  });
  it('has defined iconSize prop', () => {
    const wrapper = shallow(<Icon iconName={options.iconName} iconSize={options.iconSize} />);
    const style = wrapper.find('i').props().style;
    style &&
      expect(style.fontSize).toEqual(`${options.iconSize}px`) &&
      expect(style.height).toEqual(`${options.iconSize}px`) &&
      expect(style.display).toEqual('inline-block');
    expect(wrapper).toMatchSnapshot();
  });
});

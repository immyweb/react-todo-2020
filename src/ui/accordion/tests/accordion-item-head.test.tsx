import * as React from 'react';
import { shallow } from 'enzyme';
import AccordionItemHead from '../accordion-item-head';
import { SubTitle, Title, BadgeHolder, Header } from '../styles';
import { colours } from '../../../styles/colours';
import Icon from '../../icon/icon';
import ChartBadge from '../../chart-badge/chart-badge';

const theme = {
  primary: colours.$fabulous,
  secondary: colours.$fabulousSecondary,
};

function shallowRender(props?: any) {
  return shallow(
    <AccordionItemHead
      title={'Title'}
      subTitle={'Sub Title'}
      badge={'image.jpg'}
      toggle={() => {}}
      expanded={false}
      active={false}
      index={1}
      theme={theme}
      {...props}
    />,
  );
}

describe('<AccordionItemHead />', () => {
  it('calls toggle function when user clicks header', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ toggle: fn });
    const header = wrapper.find(Header);
    header.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('chevron icon is down when not active', () => {
    const wrapper = shallowRender();
    const icon = wrapper.find(Icon);
    expect(icon.props().iconName).toBe('chevron-solid-down');
  });

  it('chevron icon is up when active', () => {
    const wrapper = shallowRender({ active: true });
    const icon = wrapper.find(Icon);
    expect(icon.props().iconName).toBe('chevron-solid-up');
  });

  it('title field is displayed if supplied', () => {
    const wrapper = shallowRender();
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it('title field is hidden if not supplied', () => {
    const wrapper = shallowRender({ title: '' });
    expect(wrapper.find(Title)).toHaveLength(0);
  });

  it('subTitle field is displayed if supplied', () => {
    const wrapper = shallowRender();
    expect(wrapper.find(SubTitle)).toHaveLength(1);
  });

  it('subTitle field is hidden if not supplied', () => {
    const wrapper = shallowRender({ subTitle: '' });
    expect(wrapper.find(SubTitle)).toHaveLength(0);
  });

  it('renders badge icon if supplied', () => {
    const wrapper = shallowRender();
    expect(wrapper.find(BadgeHolder)).toHaveLength(1);
  });

  it('does not render badge icon if not supplied', () => {
    const wrapper = shallowRender({ badge: '' });
    expect(wrapper.find(ChartBadge)).toHaveLength(0);
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';
import { FinalTable } from './final-table';

const teams = [
  {
    team: 'Man City',
    badge:
      'https://www.thesun.co.uk/wp-content/uploads/2016/04/mancity_football_badge.png?strip=all&w=100',
    played: 30,
    win: 26,
    draw: 3,
    lose: 1,
    points: 81,
  },
  {
    team: 'Man Utd',
    badge: 'https://www.thesun.co.uk/wp-content/uploads/2016/04/man_u_rgb1.png?strip=all&w=86',
    played: 30,
    win: 20,
    draw: 5,
    lose: 5,
    points: 65,
  },
];

function shallowRender(props?: any) {
  return shallow(
    <FinalTable
      table={teams}
      timer={1000}
      exitUrl={'http://www.thesun.co.uk'}
      tableType={'PREM'}
      {...props}
    />,
  );
}

jest.useFakeTimers();

describe('<FinalTable />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('End screen is displayed when timer is elapsed', () => {
    const wrapper = shallowRender();
    expect(wrapper.state('showEndScreen')).toBe(false);
    jest.runAllTimers();
    expect(wrapper.state('showEndScreen')).toBe(true);
  });

  it('calling onCloseScreen hides End screen', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as any;
    instance.onCloseScreen();
    expect(wrapper.state('showEndScreen')).toBe(false);
  });

  it('calling onGoToUrl goes to provided exitUrl', () => {
    window.location.assign = jest.fn();
    const wrapper = shallowRender();
    const instance = wrapper.instance() as any;
    instance.onGoToUrl();
    expect(window.location.assign).toBeCalledWith('http://www.thesun.co.uk');
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';
import { Fixture, getBadge, Cta } from './fixture';

const teams = [
  {
    team: 'Liverpool',
    badge: 'https://www.thesun.co.uk/wp-content/uploads/2016/04/Liverpool.png?strip=all&w=67',
    played: 31,
    win: 18,
    draw: 9,
    lose: 4,
    points: 63,
  },
  {
    team: 'C Palace',
    badge:
      'https://www.thesun.co.uk/wp-content/uploads/2016/04/CPFC-Primary-Badge.png?strip=all&w=72',
    played: 31,
    win: 7,
    draw: 9,
    lose: 15,
    points: 30,
  },
];

function shallowFixture(props?: any) {
  return shallow(
    <Fixture
      fixture={{ id: 0, team1: 'C Palace', team2: 'Liverpool' }}
      teams={teams}
      onPlayed={() => {}}
      onPredict={() => {}}
      onSlidePlayed={() => {}}
      {...props}
    />,
  );
}

describe('<Fixture />', () => {
  it('renders correctly', () => {
    const wrapper = shallowFixture();
    expect(wrapper).toMatchSnapshot();
  });

  it('getBadge renders correct badge for a team', () => {
    const teamBadge = getBadge('Liverpool', teams);
    expect(teamBadge).toEqual(
      'https://www.thesun.co.uk/wp-content/uploads/2016/04/Liverpool.png?strip=all&w=67',
    );
  });

  it('should call onPredict when a match is predicted', () => {
    const fn = jest.fn();
    const wrapper = shallowFixture({ onPredict: fn });
    const btnHome = wrapper.find(Cta).first();
    btnHome.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    fn.mockClear();
    const btnAway = wrapper.find(Cta).last();
    btnAway.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    fn.mockClear();
    const btnDraw = wrapper.find(Cta).at(1);
    btnDraw.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should call onPlayed when a match is predicted', () => {
    const fn = jest.fn();
    const wrapper = shallowFixture({ onPlayed: fn });
    const btnHome = wrapper.find(Cta).first();
    btnHome.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    fn.mockClear();
    const btnAway = wrapper.find(Cta).last();
    btnAway.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    fn.mockClear();
    const btnDraw = wrapper.find(Cta).at(1);
    btnDraw.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should call onSlidePlayed when a match is predicted', () => {
    const fn = jest.fn();
    const wrapper = shallowFixture({ onSlidePlayed: fn });
    const btnHome = wrapper.find(Cta).first();
    btnHome.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    fn.mockClear();
    const btnAway = wrapper.find(Cta).last();
    btnAway.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    fn.mockClear();
    const btnDraw = wrapper.find(Cta).at(1);
    btnDraw.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should set correct state when HOME win is predicted', () => {
    const wrapper = shallowFixture();
    const btnHome = wrapper.find(Cta).first();
    btnHome.simulate('click');
    expect(wrapper.state('played')).toBe(true);
    expect(wrapper.state('homeWin')).toBe(true);
    expect(wrapper.state('awayWin')).toBe(false);
    expect(wrapper.state('draw')).toBe(false);
  });

  it('should set correct state when AWAY win is predicted', () => {
    const wrapper = shallowFixture();
    const btnHome = wrapper.find(Cta).last();
    btnHome.simulate('click');
    expect(wrapper.state('played')).toBe(true);
    expect(wrapper.state('homeWin')).toBe(false);
    expect(wrapper.state('awayWin')).toBe(true);
    expect(wrapper.state('draw')).toBe(false);
  });

  it('should set correct state when DRAW is predicted', () => {
    const wrapper = shallowFixture();
    const btnHome = wrapper.find(Cta).at(1);
    btnHome.simulate('click');
    expect(wrapper.state('played')).toBe(true);
    expect(wrapper.state('homeWin')).toBe(false);
    expect(wrapper.state('awayWin')).toBe(false);
    expect(wrapper.state('draw')).toBe(true);
  });
});

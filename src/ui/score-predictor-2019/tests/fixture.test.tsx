import * as React from 'react';
import { shallow } from 'enzyme';
import Fixture from '../fixture';

const teams = [
  {
    team: 'Tottenham',
    badge: 'https://www.thesun.co.uk/wp-content/uploads/2016/04/Liverpool.png?strip=all&w=67',
  },
  {
    team: 'Arsenal',
    badge:
      'https://www.thesun.co.uk/wp-content/uploads/2016/04/CPFC-Primary-Badge.png?strip=all&w=72',
  },
];

function shallowRender(props?: any) {
  return shallow(
    <Fixture
      fixture={{
        team1: 'Tottenham',
        team2: 'Arsenal',
        id: 0,
        startPrediction: {
          team1: 2,
          team2: 0,
        },
      }}
      teams={teams}
      onPredict={() => {}}
      {...props}
    />,
  );
}

describe('<Fixture />', () => {
  it('should call onPredict with correct data when a match is predicted', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onPredict: fn });
    const instance = wrapper.instance() as Fixture;
    wrapper.setState({ team1Score: 2, team2Score: 1 });
    wrapper.update();
    instance.checkPlayed();
    expect(fn).toHaveBeenCalledWith([
      {
        team: 'Tottenham',
        id: 0,
        resultType: 'WIN',
        goals: 2,
        conceded: 1,
      },
      {
        team: 'Arsenal',
        id: 0,
        resultType: 'LOSE',
        goals: 1,
        conceded: 2,
      },
    ]);
  });
});

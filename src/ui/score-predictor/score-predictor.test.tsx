import * as React from 'react';
import { shallow } from 'enzyme';
import { ScorePredictor } from './score-predictor';

import { Predictor } from './predictor';
import { FinalTable } from './final-table';

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
  {
    team: 'Brighton',
    badge:
      'https://www.thesun.co.uk/wp-content/uploads/2017/05/1024px-brighton__hove_albion_logo-svg_.png?strip=all&w=96',
    played: 30,
    win: 8,
    draw: 10,
    lose: 12,
    points: 34,
  },
  {
    team: 'Leicester',
    badge:
      'https://www.thesun.co.uk/wp-content/uploads/2016/04/Leicester-City_RGB.png?strip=all&w=90',
    played: 30,
    win: 10,
    draw: 10,
    lose: 10,
    points: 40,
  },
];

const fixtures = [
  { team1: 'C Palace', team2: 'Liverpool' },
  { team1: 'Brighton', team2: 'Leicester' },
  { team1: 'C Palace', team2: 'Liverpool' },
  { team1: 'Brighton', team2: 'Leicester' },
  { team1: 'C Palace', team2: 'Liverpool' },
  { team1: 'Brighton', team2: 'Leicester' },
  { team1: 'C Palace', team2: 'Liverpool' },
  { team1: 'Brighton', team2: 'Leicester' },
];

function shallowRender(props?: any) {
  return shallow(
    <ScorePredictor
      teams={teams}
      fixtures={fixtures}
      introHeadline={'EFL CHAMPIONSHIP PREDICTOR'}
      introTxt={
        'Predict Home Win, Draw or Away Win to see who will finish in those crucial Promotion and Relegation places.'
      }
      {...props}
    />,
  );
}

describe('<ScorePredictor />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('adds IDs to fixtures when componentWillMount', () => {
    const wrapper = shallowRender();
    expect(wrapper.state('_fixtures')[0]).toEqual({
      id: 0,
      team1: 'C Palace',
      team2: 'Liverpool',
    });
    expect(wrapper.state('_fixtures')[1]).toEqual({
      id: 1,
      team1: 'Brighton',
      team2: 'Leicester',
    });
  });

  it('renders <Predictor /> on launch', () => {
    const wrapper = shallowRender();
    const predicator = wrapper.find(Predictor);
    expect(predicator.length).toBe(1);
    const finalTable = wrapper.find(FinalTable);
    expect(finalTable.length).toBe(0);
  });

  it('renders <FinalTable /> when completed state is true', () => {
    const wrapper = shallowRender();
    wrapper.setState({ completed: true });
    const predicator = wrapper.find(Predictor);
    expect(predicator.length).toBe(0);
    const finalTable = wrapper.find(FinalTable);
    expect(finalTable.length).toBe(1);
  });

  it('addToTally updates scoreTally with correct value when existing prediction changes', () => {
    const wrapper = shallowRender();
    expect(wrapper.state('scoreTally')).toEqual([]);
    const instance = wrapper.instance() as any;
    const tally = [
      { id: 0, points: 3, resultType: 'WIN', team: 'Liverpool' },
      { id: 0, points: 0, resultType: 'LOSE', team: 'C Palace' },
    ];
    instance.updateTallyState(tally);
    expect(wrapper.state('scoreTally')).toEqual(tally);
    instance.updateTallyState(tally);
    expect(wrapper.state('scoreTally')).toEqual(tally);
    const tally2 = [
      { id: 0, points: 1, resultType: 'DRAW', team: 'Liverpool' },
      { id: 0, points: 1, resultType: 'DRAW', team: 'C Palace' },
    ];
    instance.updateTallyState(tally2);
    expect(wrapper.state('scoreTally')).toEqual(tally2);
    const tally3 = [
      { id: 0, points: 0, resultType: 'LOSE', team: 'Liverpool' },
      { id: 0, points: 3, resultType: 'WIN', team: 'C Palace' },
    ];
    instance.updateTallyState(tally3);
    expect(wrapper.state('scoreTally')).toEqual(tally3);
  });

  it('addToTally updates scoreTally with correct value when new prediction added', () => {
    const wrapper = shallowRender();
    expect(wrapper.state('scoreTally')).toEqual([]);
    const instance = wrapper.instance() as any;
    const tally = [
      { id: 0, points: 3, resultType: 'WIN', team: 'Liverpool' },
      { id: 0, points: 0, resultType: 'LOSE', team: 'C Palace' },
    ];
    instance.updateTallyState(tally);
    expect(wrapper.state('scoreTally')).toEqual(tally);
    const tally2 = [
      { id: 1, points: 1, resultType: 'DRAW', team: 'Brighton' },
      { id: 1, points: 1, resultType: 'DRAW', team: 'Leicester' },
    ];
    instance.updateTallyState(tally2);
    expect(wrapper.state('scoreTally')).toEqual([...tally, ...tally2]);
  });

  it('calling finalise will show final table', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as any;
    instance.finalise();
    wrapper.update();
    expect(wrapper.state('completed')).toBe(true);
    const finalTable = wrapper.find(FinalTable);
    expect(finalTable.length).toBe(1);
  });

  it('calling onConfirm will show final table', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as any;
    instance.onConfirm();
    wrapper.update();
    expect(wrapper.state('completed')).toBe(true);
    const finalTable = wrapper.find(FinalTable);
    expect(finalTable.length).toBe(1);
  });

  it('calling onLoaded will set loaded to true', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as any;
    instance.onLoaded();
    wrapper.update();
    expect(wrapper.state('loaded')).toBe(true);
  });
});

// win / lose / draw design
// final table design

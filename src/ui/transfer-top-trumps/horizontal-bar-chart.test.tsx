import * as React from 'react';
import { shallow } from 'enzyme';

import { ChartHorizontalBar } from './horizontal-bar-chart';

const data = [
  {
    id: 'willian',
    fname: '',
    sName: 'Willian',
    voted: true,
    selected: false,
    active: false,
    idx: 0,
    voteCount: 80,
    noVoteCount: 20,
    votePercent: 80,
    noVotePercent: 20,
  },
  {
    id: 'a_sandro',
    fname: 'Alex',
    sName: 'Sandro',
    voted: true,
    selected: true,
    active: false,
    idx: 1,
    voteCount: 50,
    noVoteCount: 50,
    votePercent: 50,
    noVotePercent: 50,
  },
  {
    id: 's_m_savic',
    fname: 'Sergej',
    sName: 'Milinković-Savić',
    voted: false,
    selected: false,
    active: true,
    idx: 2,
    voteCount: 60,
  },
];

const theme = {
  primary: '#ffffff',
  secondary: '#000000',
};

function shallowRender(props?: any) {
  return shallow(<ChartHorizontalBar data={data} theme={theme} {...props} />, {
    disableLifecycleMethods: true,
  });
}

describe('<ChartHorizontalBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });
});

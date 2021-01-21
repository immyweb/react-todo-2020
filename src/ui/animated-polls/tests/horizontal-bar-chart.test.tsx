import * as React from 'react';
import { shallow } from 'enzyme';

import { ChartHorizontalBar } from '../horizontal-bar-chart';

const data = [
  {
    player: 'Cameron Small',
    voteCount: 50,
    noVoteCount: 0,
    votePercent: 80,
    imageThumb: 'handsome.jpg',
  },
  {
    player: 'Laura Kingston',
    voteCount: 10,
    noVoteCount: 0,
    votePercent: 10,
    imageThumb: 'hot.jpg',
  },
  {
    player: 'Maramead',
    voteCount: 11,
    noVoteCount: 0,
    votePercent: 10,
    imageThumb: 'ironman.gif',
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

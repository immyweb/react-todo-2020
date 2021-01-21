import * as React from 'react';
import StackedBar from './stacked-bar';
import { shallow } from 'enzyme';

import * as data from './stacked-bar.json';

// import { podTracker } from '../../utils/pod-tracker-utils';

// jest.mock('../../utils/pod-tracker-utils', () => ({
//   podTracker: {
//     loaded: jest.fn(),
//   },
// }));

describe('Stacked Bar Chart component', () => {
  const { config, content } = data as any;

  it('renders correctly', () => {
    const wrapper = shallow(<StackedBar config={config} content={content} />);
    expect(wrapper.length).toEqual(1);
  });

  it('calls tracking function when component is loaded', () => {
    const wrapper = shallow(<StackedBar config={config} content={content} id={'Local elections'} />);
    const instance = wrapper.instance() as StackedBar;
    instance.componentDidMount();

    // expect(podTracker.loaded).toHaveBeenCalledWith({
    //   description: 'stacked-bar-chart:loaded',
    //   id: 'stacked-bar-chart:Local elections',
    // });
  });
});

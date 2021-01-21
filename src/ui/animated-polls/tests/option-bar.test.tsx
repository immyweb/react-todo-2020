import * as React from 'react';
import { shallow } from 'enzyme';

import { OptionBar } from '../option-bar';

import { APOptionBar } from '../styles';

const option = {
  id: 'thechevron',
  iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Chevron.png',
  title: 'The Chevron',
};

const theme = {
  primary: '#000000',
  secondary: '#ffffff',
};

function shallowRender(props?: any) {
  return shallow(<OptionBar clickVote={() => {}} {...option} {...theme} {...props} />);
}

describe('<OptionBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('calls clickVote with correct id when user votes', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ clickVote: fn });
    const btn = wrapper.find(APOptionBar);
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn.mock.calls[0][0][0]).toBe('thechevron');
  });
});

import * as React from 'react';
import { OverFlow } from './over-flow';
import { shallow } from 'enzyme';

jest.mock('./helpers', () => ({
  inIframe: jest.fn(),
}));

import { inIframe } from './helpers';

describe('Over Flow component', () => {
  const props = { color: 'red' };
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('the component is not in an iframe', () => {
    it('returns an nothing', () => {
      (inIframe as jest.Mock).mockReturnValue(false);
      const wrapper = shallow(<OverFlow {...props} />);
      expect(wrapper.text()).toBe('');
    });
  });
  describe('the component is in an iframe', () => {
    describe('height of the app is smaller than the viewport', () => {
      it('returns an nothing', () => {
        (inIframe as jest.Mock).mockReturnValue(true);
        const wrapper = shallow(<OverFlow {...props} />);
        expect(wrapper.text()).toBe('');
      });
    });
    describe('height of the app is larger than the viewport', () => {
      it('returns an the OverFlow components', () => {
        (inIframe as jest.Mock).mockReturnValue(true);
        const wrapper = shallow(<OverFlow {...props} />);
        wrapper.setState({ viewPort: -1 });
        expect(wrapper.find('div').length).toBe(2);
      });
    });
  });
});

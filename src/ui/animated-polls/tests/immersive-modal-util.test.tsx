import * as React from 'react';
import * as DOM from 'react-dom';

import { onCloseModal, onOpenModal } from '../immersive-modal-util';
import { podTracker } from '../../../utils/pod-tracker-utils';

jest.mock('../../../utils/pod-tracker-utils', () => ({
  podTracker: {
    click: jest.fn(),
  },
}));

jest.mock('react-dom', () => ({
  render: jest.fn(),
  unmountComponentAtNode: jest.fn(),
}));

describe('Immersive Modal utils', () => {
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });

  describe('onOpenModal', () => {
    it('mounts component at node and tracks event', () => {
      const DummyComp = () => <div />;
      onOpenModal('domID', DummyComp, 'card');
      expect(podTracker.click).toHaveBeenCalledWith({
        description: 'Generic Animated Poll modal opened',
        id: 'card',
      });
      expect(DOM.render).toHaveBeenCalled();
    });
  });

  describe('onCloseModal', () => {
    it('unmounts component at node and tracks event', () => {
      onCloseModal('domID', 'card');
      expect(podTracker.click).toHaveBeenCalledWith({
        description: 'Generic Animated Poll modal closed',
        id: 'card',
      });
      expect(DOM.unmountComponentAtNode).toHaveBeenCalled();
    });
  });
});

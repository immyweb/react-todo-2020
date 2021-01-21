import * as React from 'react';
import * as DOM from 'react-dom';
import { ImmersiveModal } from './immersive-modal';
import { podTracker } from '../../utils/pod-tracker-utils';

export const onCloseModal = (domId: string, id?: string) => {
  podTracker.click({
    id,
    description: `Generic Animated Poll modal closed`,
  });
  DOM.unmountComponentAtNode(document.getElementById(domId) as any);
};

export const onOpenModal = (domId: string, children: React.ReactNode, id?: string) => {
  podTracker.click({
    id,
    description: `Generic Animated Poll modal opened`,
  });
  DOM.render(
    <ImmersiveModal
      content={children}
      active={true}
      onCloseModal={() => onCloseModal(domId, id)}
    />,
    document.getElementById(domId),
  );
};

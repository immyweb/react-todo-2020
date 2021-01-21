import * as React from 'react';
import * as DOM from 'react-dom';
import { podTracker } from '../../utils/pod-tracker-utils';

import { Modal } from '../modal/modal';

import { IModalContent } from '../../types/modal-content';

export const onCloseModal = (domId: string, title: string, id?: string) => {
  podTracker.click({
    id,
    description: `hotspot modal "${title}" closed`,
  });
  DOM.unmountComponentAtNode(document.getElementById(domId) as any);
};

export const onOpenModal = (
  modalData: IModalContent,
  domId: string,
  ModalContentRef: any,
  id?: string,
) => {
  if (modalData) {
    const content = ModalContentRef(modalData);
    podTracker.click({
      id,
      description: `hotspot modal "${modalData.title}" opened`,
    });
    DOM.render(
      <Modal
        content={content}
        standalone={false}
        active={true}
        onCloseModal={() => onCloseModal(domId, modalData.title, id)}
      />,
      document.getElementById(domId),
    );
  }
};

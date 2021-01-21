import * as React from 'react';

import { P } from '../typography/typography';
import { ModalHeadline } from '../modal/styles';
import { Image } from '../../styles/globals';
import { IModalContent } from '../../types/modal-content';

export const ModalContent = (modalContent: IModalContent) => {
  const { title, imageTop, copy, imageBottom } = modalContent;
  return (
    <div className="modal-content">
      <ModalHeadline>{title}</ModalHeadline>
      {imageTop && <Image src={imageTop} alt={title} marginBottom={10} />}
      {copy &&
        copy.map((paragraph: string, i: number) => {
          return (
            <P txtalign={'center'} key={i}>
              {paragraph}
            </P>
          );
        })}
      {imageBottom && <Image src={imageBottom} alt={title} marginBottom={10} />}
    </div>
  );
};

import * as React from 'react';

import { HotspotItems } from './hotspots';
import { ModalContent } from '../modal/modal-content';
import { ComponentHeader } from '../component-header/';

import { IComponentProps } from '../../types/tracking';
import { InteractiveImageContainer, InteractiveImageInner, Image } from './styles';
import { IInteractiveImage } from './types';

interface IProps extends IInteractiveImage, IComponentProps {}

let ModalContentRef: React.ReactNode = null;

export const InteractiveImage: React.FC<IProps> = ({ config, content, id }) => {
  ModalContentRef = ModalContent;
  const { headlineTheme, labelTheme } = config;
  const { headline, image, labels } = content;
  return (
    <InteractiveImageContainer>
      <ComponentHeader
        className={'interactive-image-header'}
        title={headline}
        theme={{
          primary: headlineTheme.primary,
          secondary: headlineTheme.secondary,
        }}
        background
      />
      <div id="interactiveImageModal" />
      <InteractiveImageInner>
        <HotspotItems
          hotspots={labels}
          pulseColour={labelTheme.pulseColour}
          hotSpotTxtColour={labelTheme.txtColour}
          hotSpotBkgndColour={labelTheme.bkgndColour}
          modalRef={ModalContentRef}
          id={id}
        />

        <Image src={image} alt={headline} className={'interactive-image-img'} />
      </InteractiveImageInner>
    </InteractiveImageContainer>
  );
};

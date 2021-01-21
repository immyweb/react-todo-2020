import * as React from 'react';

import Label from '../label/label';
import PulseLabel from '../pulse/pulse-label';
import { onOpenModal } from '../modal/util';

import { Hotspot } from './styles';
import { IHotspot } from './types';

interface IProps {
  hotspot: IHotspot;
  id?: string;
  hotSpotBkgndColour: string;
  hotSpotTxtColour: string;
  pulseColour: string;
  modalRef: React.ReactNode;
}

export const HotspotItem: React.FC<IProps> = ({
  hotspot,
  id,
  hotSpotBkgndColour,
  hotSpotTxtColour,
  pulseColour,
  modalRef,
}) => {
  const { label, modal } = hotspot;
  return (
    <Hotspot
      top={label.position.top}
      left={label.position.left}
      key={label.text}
      className={'interactive-image-hotspot'}
    >
      <Label
        bkgColour={hotSpotBkgndColour}
        txtColour={hotSpotTxtColour}
        arrowSide={label.arrowSide}
        arrowPosition={label.arrowPosition}
        onClick={() => onOpenModal(modal, 'interactiveImageModal', modalRef, id)}
      >
        {label.text}
      </Label>
      <PulseLabel labelSide={label.arrowSide} labelPosition={label.arrowPosition} colour={pulseColour} />
    </Hotspot>
  );
};

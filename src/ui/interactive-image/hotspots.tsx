import * as React from 'react';

import { HotspotItem } from './hotspot';
import { IHotspot } from './types';

interface IProps {
  hotspots: IHotspot[];
  pulseColour: string;
  hotSpotTxtColour: string;
  hotSpotBkgndColour: string;
  modalRef: React.ReactNode;
  id?: string;
}

export const HotspotItems: React.FC<IProps> = ({
  hotspots,
  pulseColour,
  hotSpotTxtColour,
  hotSpotBkgndColour,
  modalRef,
  id,
}) => {
  const items = hotspots.map((hotspot) => {
    return (
      <HotspotItem
        key={hotspot.label.text}
        hotspot={hotspot}
        id={id}
        pulseColour={pulseColour}
        hotSpotTxtColour={hotSpotTxtColour}
        hotSpotBkgndColour={hotSpotBkgndColour}
        modalRef={modalRef}
      />
    );
  });
  return <div>{items}</div>;
};

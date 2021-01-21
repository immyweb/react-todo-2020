import { ArrowPosition } from '../label/label';
import { IModalContent } from '../../types/modal-content';
import { ITheme } from '../../types';

export interface IInteractiveImage {
  config: {
    headlineTheme: ITheme;
    labelTheme: {
      txtColour: string;
      bkgndColour: string;
      pulseColour: string;
    };
  };
  content: {
    headline: string;
    image: string;
    labels: IHotspot[];
  };
}

export interface IHotspot {
  label: IHotspotLabel;
  modal: IModalContent;
}

export interface IHotspotLabel {
  text: string;
  arrowSide: ArrowPosition;
  arrowPosition: ArrowPosition;
  position: {
    top: number;
    left: number;
  };
}

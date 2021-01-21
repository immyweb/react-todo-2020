import { ITheme } from '../../types/';

export enum StartPosition {
  LEFT = 'Left',
  RIGHT = 'Right',
  CENTER = 'Center',
}

export interface IImageRevealer {
  config: {
    startPosition: StartPosition;
    theme: ITheme;
  };
  content: {
    headline: string;
    original: {
      src: string;
      label?: string;
    };
    modified: {
      src: string;
      label?: string;
    };
  };
}

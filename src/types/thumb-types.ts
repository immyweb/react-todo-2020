import { IAlign } from '../utils/alignment-utils';

export interface IThumb {
  title?: string;
  subTitle?: string;
  value?: string;
  src: string;
}

export interface IIntThumb {
  active?: boolean;
  size?: number;
  loaded?: boolean;
  alignment?: IAlign;
  idBackground?: string;
  border?: boolean;
}

export interface IIntThumbContent {
  alignment: IAlign;
  thumbPadding: number;
}

export interface IStaThumb {
  loaded?: boolean;
  alignment?: IAlign;
  thumbPadding?: number;
  fontColour?: string;
  idBackground?: string;
  border?: boolean;
}

import { ITheme } from './';

export interface ICarousel {
  config: {
    date?: string;
    theme: ITheme;
    commercial?: boolean;
  };
  content: {
    headline: string;
    items: IItem[];
  };
}

export interface IItem {
  image: string;
  url?: string;
  label?: string;
}

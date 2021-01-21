import { ITheme } from '../../types/theme';

export interface IAccordion {
  config: {
    timeline: boolean;
    theme: ITheme;
    commercial?: boolean;
  };
  content: {
    headline: string;
    items: IItem[];
  };
}

export interface IItem {
  title: string;
  subTitle?: string;
  badge?: string;
  imageTop?: string;
  imageBottom?: string;
  copy?: string;
  linkText?: string;
  linkUrl?: string;
  expanded: boolean;
}

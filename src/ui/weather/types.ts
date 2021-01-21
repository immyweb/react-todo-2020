import { WeatherIconUrls, Locations, Direction } from './enums';
import { IPosition } from '../../types/position';
import { ITheme } from '../../types';

export interface IWeather {
  config: {
    theme: ITheme;
  };
  content: {
    map: string;
    cta: ICta;
    locations: ILocation[];
  };
}

export interface ILocation {
  id: string;
  label: Locations;
  direction: Direction;
  arrowDirection: Direction;
  mobilePosition: IPosition;
  desktopPosition: IPosition;
}

export interface ICta {
  label: string;
  icon: WeatherIconUrls;
  url: string;
}

export interface ITabItem {
  day: string;
  date: string;
  status: string;
  dayMax: string;
  nightMin: string;
}

export interface IDay {
  [key: string]: IForecast;
}

export interface IForecast {
  status: string;
  temperature: string;
  day: string;
  date: string;
}

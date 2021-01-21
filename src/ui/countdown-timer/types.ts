import { IAlign } from '../../utils/alignment-utils';

export interface IDetails {
  title: string;
  subTitle: string;
  image: string;
}
export interface IData {
  during: IDetails;
  ended?: IDetails;
}

export enum CounterMode {
  Countdown = 'COUNTDOWN',
  CountUp = 'COUNTUP',
}

export enum UnitPosition {
  start = 'START',
  end = 'END',
}

export interface ICountdownTimer {
  config: {
    theme: {
      primary: string;
      secondary: string;
    };
    settings: {
      alignment: {
        x: string;
        y: string;
      };
      minHeight: number;
      backgroundPosition?: string;
      units?: number;
    };
    commercial?: boolean;
    mode?: CounterMode;
    textColor?: string;
  };
  content: {
    custom: boolean;
    ratePerSecond?: number;
    unit?: string;
    unitPosition?: UnitPosition;
    date: string;
    during: IDetails;
    ended?: IDetails;
    button?: {
      buttonText: string;
      buttonLink: string;
      windowTarget?: string;
    };
  };
}

export interface ITimespan {
  start?: Date;
  end?: Date;
  units?: number;
  value?: number;
  millennia?: number;
  centuries?: number;
  decades?: number;
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  toString(label?: string): string;
  toHTML(tagName?: string, label?: string): string;
}

export interface ICountdownUnits {
  time: {
    interval: number;
    isStarted: boolean;
    isEnded: boolean;
    millennia: number;
    centuries: number;
    decades: number;
    years: number;
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
  timeStampColour: string;
  alignment: IAlign;
  isStarted: boolean;
}

export interface ICustomCountUnits {
  value: number;
  unit?: string;
  unitPosition?: UnitPosition;
  textColour: string;
  alignment: IAlign;
}

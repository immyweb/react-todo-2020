export interface IChartData {
  name?: string;
  value: number;
  dValue?: string | number;
  fill?: string;
}

export interface IStatUnit {
  symbol: string;
  alignment: string;
}

export interface IChartStat {
  bullet?: boolean;
  bulletColour?: string[] | string | undefined;
  unit?: IStatUnit;
  bulletName?: string[] | string;
  themeSize?: string;
  fontColour?: string;
  stackingDirection?: any;
  statNameSize?: number;
  statValueSize?: number;
  statUnitSize?: number;
  statIconSize?: number;
}

export interface ITooltipPayload {
  name: string;
  value: number;
  dValue?: string | number;
  fill: string;
}

export interface IChartImageLegend {
  image: string;
  imageAlt: string;
}

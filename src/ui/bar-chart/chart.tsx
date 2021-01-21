import * as React from 'react';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer } from 'victory';
import styles from './barchart.module.css';

import { ChartType, IData } from './types';

interface IProps {
  chartHeight: number;
  chartWidth: number;
  chartData: IData[];
}

// when the bar width is less than the height (30px) large border radius on all four corners
// causes visual issues, so if the width is less than 30, we decrease border radius proportionally
const getCornerRadius = (value: number, max: number, barMaxWidth: number) => {
  const barWidth = (barMaxWidth / max) * value;
  if (barWidth < 30) {
    return (barWidth / 30) * 15;
  }
  return 15;
};

export const Chart: React.FC<IProps> = ({ chartHeight, chartWidth, chartData }) => {
  const values = chartData.map(({ y }) => y);
  const max = Math.max(...values);
  const min = Math.min(...values);

  const rangeValue: [number, number] = [min < 0 ? min : 0, max > 0 ? max : 0];
  const chartType = min < 0 && max > 0 ? ChartType.MIDDLE : min > -1 ? ChartType.LEFT : ChartType.RIGHT;

  const cornerRadius =
    ChartType.MIDDLE === chartType
      ? { topLeft: 15, topRight: 15 }
      : ChartType.LEFT === chartType
      ? {
          topLeft: (d: any) => getCornerRadius(d.y, max, chartWidth - 20),
          topRight: (d: any) => getCornerRadius(d.y, max, chartWidth - 20),
          bottomLeft: 15,
          bottomRight: 15,
        }
      : {
          topLeft: (d: any) => getCornerRadius(d.y, min, chartWidth - 20),
          topRight: (d: any) => getCornerRadius(d.y, min, chartWidth - 20),
          bottomLeft: 15,
          bottomRight: 15,
        };

  return (
    <div className={styles.AnotherChartContainer}>
      <VictoryChart
        domainPadding={16}
        domain={{ y: rangeValue }}
        padding={{
          right: chartType === ChartType.RIGHT ? 5 : 0,
          left: chartType === ChartType.LEFT ? 5 : 0,
        }}
        height={chartHeight}
        width={chartWidth}
        containerComponent={<VictoryContainer responsive={false} />}
      >
        <VictoryBar
          horizontal
          data={chartData}
          barWidth={30}
          cornerRadius={cornerRadius}
          style={{
            data: {
              fill: (d) => d.colour,
            },
          }}
        />
        <VictoryAxis
          tickFormat={() => ''}
          tickValues={chartData.map((point) => point.x).reverse()}
          style={{ axis: { stroke: chartType === ChartType.MIDDLE ? '#adafb0' : 'transparent' } }}
        />
      </VictoryChart>
    </div>
  );
};

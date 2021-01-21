import * as React from 'react';

import { hex2RGB } from '../../utils/hex-to-rgb';
import { rgba } from 'polished';

import styles from './barchart.module.css';

import { ITheme } from '../../types';
import { IComponentProps } from '../../types/tracking';
import { Chart } from './chart';

interface IProps extends IComponentProps {
  config: {
    theme: ITheme;
    removeChangeIndicators: boolean;
  };
  content: {
    headline: string;
    subHeadline?: string;
    labelHeader: string;
    diffHeader: string;
    copy?: string;
    data: IResult[];
  };
}

export interface IResult {
  label: string;
  value: number;
  colour: string;
}

interface IState {
  chartHeight: number;
  chartWidth: number;
  dataLoaded: boolean;
}

export default class BarChart extends React.Component<IProps, IState> {
  private lozengeHolder: any = null;
  private leftColumn: any = null;
  private barHolder: any = null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      chartHeight: 0,
      chartWidth: 0,
      dataLoaded: false,
    };
  }

  componentDidMount() {
    if (this.lozengeHolder !== null) {
      const height = this.lozengeHolder.getBoundingClientRect().height;

      this.setState({ chartHeight: height });
    }

    if (this.leftColumn !== null && this.barHolder !== null) {
      const leftColWidth = this.leftColumn.getBoundingClientRect().width;
      const barWidth = this.barHolder.getBoundingClientRect().width;

      this.setState({ chartWidth: barWidth - leftColWidth });
    }

    if (this.props.content.data !== null) {
      this.setState({ dataLoaded: true });
    }
  }

  // componentDidUpdate(prevProps: IProps) {
  //   const prevDataLength = prevProps.content.data.length;
  //   const dataLength = this.props.content.data.length;

  //   if (this.lozengeHolder !== null && (this.state.chartHeight === 0 || prevDataLength !== dataLength)) {
  //     const height = this.lozengeHolder.getBoundingClientRect().height;
  //     this.setState({ chartHeight: height });
  //   }

  //   if (
  //     this.leftColumn !== null &&
  //     this.barHolder !== null &&
  //     (this.state.chartWidth === 0 || prevDataLength !== dataLength)
  //   ) {
  //     const leftColWidth = this.leftColumn.getBoundingClientRect().width;
  //     const barWidth = this.barHolder.getBoundingClientRect().width;

  //     this.setState({ chartWidth: barWidth - leftColWidth });
  //   }
  // }

  renderUnitValues() {
    const values = this.props.content.data.map(({ value }) => value);
    const max = Math.max(...values);
    const min = Math.min(...values);

    if (max <= 0) {
      return (
        <div className={styles.UnitHolder} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div>0</div>
        </div>
      );
    }
    if (min >= 0) {
      return (
        <div className={styles.UnitHolder}>
          <div>0</div>
        </div>
      );
    }

    // working out where the axis will be
    const { chartWidth } = this.state;

    const barWidth = chartWidth - 32;
    const oneUnit = barWidth / (max - min);
    const margin = Math.abs(min) * oneUnit + 11;

    return (
      <div className={styles.UnitHolder}>
        <div style={{ marginLeft: margin }}>0</div>
      </div>
    );
  }
  renderGridLines() {
    return this.props.content.data.map((item) => {
      return <div className={styles.GridLine} key={item.label} />;
    });
  }

  renderLozenges() {
    return this.props.content.data.map((item) => {
      return <div className={styles.Lozenge} key={item.label} />;
    });
  }

  renderLegend() {
    const { config, content } = this.props;
    const { labelHeader, data } = content;
    return (
      <div>
        <div className={styles.chartHeading} style={{ color: config.theme.secondary }}>
          {labelHeader}
        </div>
        {data.map((item) => {
          return (
            <div className={styles.BarChartLegendItem} key={item.label}>
              {item.label}
            </div>
          );
        })}
      </div>
    );
  }

  renderDiffValues() {
    const { config, content } = this.props;
    const { diffHeader, data } = content;
    return (
      <div>
        <div className={styles.chartHeading} style={{ color: config.theme.secondary }}>
          {diffHeader}
        </div>
        {data.map((item) => {
          if (!config.removeChangeIndicators) {
            if (item.value > 0) {
              return (
                <div className={styles.BarChartDiffItem} key={item.value}>
                  <span className={styles.ArrowUp} />
                  <span style={{ color: '#4eb056' }} className={styles.Diff}>
                    +{item.value.toLocaleString('en-UK')}
                  </span>
                </div>
              );
            }
            if (item.value < 0) {
              return (
                <div className={styles.BarChartDiffItem} key={item.value}>
                  <span className={styles.ArrowDown} />
                  <span style={{ color: '#a5171c' }} className={styles.Diff}>
                    {item.value.toLocaleString('en-UK')}
                  </span>
                </div>
              );
            }
          }
          return (
            <div className={styles.BarChartDiffItem} key={item.value}>
              <span className={styles.Diff}>{item.value !== undefined ? item.value.toLocaleString('en-UK') : ''}</span>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { theme } = this.props.config;
    const { headline, subHeadline, copy, data } = this.props.content;
    const { chartHeight, chartWidth, dataLoaded } = this.state;

    const chartData = data.map((item) => {
      return {
        x: item.label,
        y: item.value,
        colour: item.colour,
      };
    });

    const hexColour: number[] = hex2RGB(theme.primary);

    return (
      <section className={styles.BarContainer}>
        <div className={styles.titleWrapper} style={{ background: theme.primary, borderLeftColor: theme.secondary }}>
          <h2 className={styles.title}>{headline}</h2>
        </div>
        <div
          className={styles.BarContentHolder}
          style={{ backgroundColor: rgba(hexColour[0], hexColour[1], hexColour[2], 0.05) }}
        >
          {subHeadline && <h3 className={styles.BarSubHeading}>{subHeadline}</h3>}
          {copy && <p className={styles.BarCopy}>{copy}</p>}
          <div className={styles.BarChartHolder} ref={(el) => (this.barHolder = el)}>
            <div className={styles.LeftColumn} ref={(el) => (this.leftColumn = el)}>
              <div className={styles.BarChartLegend}>{this.renderLegend()}</div>
              <div className={styles.BarChartDiff}>{this.renderDiffValues()}</div>
            </div>
            <div className={styles.GridLineHolder}>{this.renderGridLines()}</div>
            <div className={styles.ChartContainer}>
              <div style={{ color: theme.secondary }}>{this.renderUnitValues()}</div>
              <div className={styles.LozengeHolder} ref={(el) => (this.lozengeHolder = el)}>
                {this.renderLozenges()}
              </div>
              {chartHeight > 0 && chartWidth > 0 && dataLoaded ? (
                <Chart chartHeight={chartHeight - 18} chartWidth={chartWidth} chartData={chartData} />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

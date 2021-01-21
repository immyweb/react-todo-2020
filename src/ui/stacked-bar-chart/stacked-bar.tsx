import * as React from 'react';

import { VictoryBar, VictoryStack } from 'victory';
import { hex2RGB } from '../../utils/hex-to-rgb';

import styles from './stacked-bar.module.css';

import { ITheme } from '../../types';
import { IComponentProps } from '../../types/tracking';
import { rgba } from 'polished';

interface IProps extends IComponentProps {
  config: {
    theme: ITheme;
  };
  content: {
    headline: string;
    subHeadline?: string;
    copy?: string;
    labelHeader: string;
    data: IResult[];
  };
}

interface IResult {
  label: string;
  value: number;
  colour: string;
}

export default class StackedBar extends React.Component<IProps, { dataLoaded: boolean }> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      dataLoaded: false,
    };
  }

  componentDidMount() {
    if (this.props.content.data !== null) {
      this.setState({ dataLoaded: true });
    }
  }

  colorScale() {
    return this.props.content.data.map((item) => item.colour);
  }

  renderLabelValues() {
    const values = this.props.content.data.map((item) => item.value);
    const sumValues = (arr: number[]) => {
      return arr.reduce((sum: number, item: number) => {
        return sum + item;
      });
    };
    const total = sumValues(values);

    return total;
  }

  renderLegend() {
    return this.props.content.data.map(({ colour, label, value }) => {
      return (
        <div className={styles.stackedBarLegendItem} key={value}>
          <span className={styles.stackedBarLegendColour} style={{ background: colour }} />
          <div>
            <span className={styles.stackedBarLegendLabel} style={{ color: colour }}>
              {label}
            </span>
            <span className={styles.stackedBarLegendStat}>{value}</span>
          </div>
        </div>
      );
    });
  }

  renderChart() {
    return this.props.content.data.map((item, i) => {
      const valueData = [
        {
          x: 'a',
          y: item.value,
        },
      ];
      if (i === 0) {
        return <VictoryBar key={i} data={valueData} barWidth={35} cornerRadius={{ bottomLeft: 18, bottomRight: 18 }} />;
      }
      if (i === this.props.content.data.length - 1) {
        return <VictoryBar key={i} data={valueData} barWidth={35} cornerRadius={{ topLeft: 18, topRight: 18 }} />;
      }
      return <VictoryBar key={i} data={valueData} barWidth={35} />;
    });
  }

  render() {
    const { theme } = this.props.config;
    const { headline, subHeadline, copy, labelHeader } = this.props.content;

    const hexColour = hex2RGB(theme.primary);

    return (
      <section className={styles.stackedBarContainer}>
        <div className={styles.titleWrapper} style={{ background: theme.primary, borderLeftColor: theme.secondary }}>
          <h2 className={styles.title}>{headline}</h2>
        </div>
        <div
          className={styles.stackedBarContentHolder}
          style={{ backgroundColor: rgba(hexColour[0], hexColour[1], hexColour[2], 0.05) }}
        >
          {subHeadline && <h3 className={styles.stackedBarSubHeading}>{subHeadline}</h3>}
          {copy && <p className={styles.stackedBarCopy}>{copy}</p>}
          <div className={styles.chartHeadingContainer} style={{ color: theme.secondary }}>
            <span className={styles.labelChartHeader}>{labelHeader}</span>
            <span className={styles.chartHeading}>{Math.round(this.renderLabelValues() / 2)}</span>
            <span className={styles.chartHeading}>{this.renderLabelValues()}</span>
          </div>
          <div className={styles.stackedChartHolder}>
            {this.state.dataLoaded && (
              <VictoryStack horizontal padding={0} height={35} colorScale={this.colorScale()}>
                {this.renderChart()}
              </VictoryStack>
            )}
          </div>
          <div className={styles.stackedBarLegendList}>{this.renderLegend()}</div>
        </div>
      </section>
    );
  }
}

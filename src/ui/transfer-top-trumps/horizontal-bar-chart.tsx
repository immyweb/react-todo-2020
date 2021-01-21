import * as React from 'react';
import * as DOM from 'react-dom';

import { fonts } from '../../styles/fonts';

import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, LabelList } from 'recharts';

import { BarWrapper, BarContainer } from './styles';
import { colours } from '../../styles/colours';

import { IVoteCount } from './types';
import { ITheme } from '../../types/theme';

interface IProps {
  data: IVoteCount[];
  theme: ITheme;
}

export class ChartHorizontalBar extends React.Component<IProps, { width: number }> {
  private chartElement: HTMLElement;

  constructor(props: IProps) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  componentDidMount() {
    this.chartElement = DOM.findDOMNode(this) as HTMLElement;
    this.setState({ width: this.chartElement.offsetWidth });
  }

  renderLabels = (props: any) => {
    const { y, height, value } = props;

    return (
      <text
        x={this.state.width - 10}
        y={y + height / 2 + 1}
        fill="#fff"
        textAnchor="middle"
        style={{ fontFamily: fonts.$theSunMedium, fontSize: 10 }}
        dominantBaseline="middle"
      >
        {`${value}%`}
      </text>
    );
  };

  render() {
    const { data, theme } = this.props;
    return (
      <BarWrapper>
        <BarContainer>
          <ResponsiveContainer width="100%" height={380} minHeight={380}>
            <BarChart
              data={data}
              layout={'vertical'}
              barGap={3}
              margin={{ top: 8, right: 30, left: 60, bottom: 20 }}
            >
              <XAxis type={'number'} axisLine={false} hide={true} />
              <YAxis dataKey={'player'} type={'category'} hide={true} />
              <Bar dataKey={'votePercent'} barSize={14} background={false}>
                <LabelList
                  dataKey={'votePercent'}
                  position={'outside'}
                  content={this.renderLabels}
                />
                {data.map((entry: IVoteCount, i: number) => {
                  return <Cell key={i} fill={theme.primary} />;
                })}
              </Bar>
              <Bar dataKey={'noVotePercent'} barSize={14} background={false}>
                <LabelList
                  dataKey={'noVotePercent'}
                  position={'outside'}
                  content={this.renderLabels}
                />
                {data.map((entry: IVoteCount, i: number) => {
                  return <Cell key={i} fill={colours.$main} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </BarContainer>
      </BarWrapper>
    );
  }
}

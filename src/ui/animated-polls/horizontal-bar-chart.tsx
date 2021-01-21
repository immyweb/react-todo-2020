import * as React from 'react';
import * as DOM from 'react-dom';

import { fonts } from '../../styles/fonts';

import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, LabelList } from 'recharts';

import { colours } from '../../styles/colours';

import { IVoteCount } from './types';
import { ITheme } from '../../types/theme';

interface IProps {
  data: IVoteCount[];
  theme: ITheme;
}

const barGap = 10;

export class ChartHorizontalBar extends React.Component<IProps, { width: number; height: number }> {
  private chartElement: HTMLElement;

  constructor(props: IProps) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    this.chartElement = DOM.findDOMNode(this) as HTMLElement;
    this.setDimensions();
    window.addEventListener('resize', this.setDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDimensions.bind(this));
  }

  setDimensions = () => {
    this.setState({
      width: this.chartElement.offsetWidth,
      height: this.chartElement.offsetHeight,
    });
  };

  renderPercentageLabel = (props: any) => {
    return this.renderText({
      ...props,
      x: this.state.width,
      value: `${props.value}%`,
      textAnchor: 'end',
    });
  };

  renderOptionLabel = (props: any) => {
    return this.renderText({
      ...props,
      x: this.getThumbSize() + 20,
      textAnchor: 'start',
    });
  };

  getThumbSize = () => {
    return this.state.height / this.props.data.length - barGap;
  };

  renderText = (props: any) => {
    const { x, y, height, value, textAnchor } = props;
    const fontSize = 16;
    return (
      <text
        x={x}
        y={y + (fontSize + height) / 2 - 5}
        fill={colours.$white}
        textAnchor={textAnchor}
        style={{ fontSize, fontFamily: fonts.$theSunRegular }}
        dominantBaseline="middle"
      >
        {value}
      </text>
    );
  };

  renderImageLabels = (props: any) => {
    const { x, y, value } = props;
    return (
      <image
        // height={this.getThumbSize()}
        width={35}
        xlinkHref={value}
        x={x + 8}
        y={y + 5}
      />
    );
  };

  render() {
    const { data, theme } = this.props;
    return (
      <ResponsiveContainer height={'100%'} width={'100%'}>
        <BarChart data={data} layout={'vertical'} barGap={barGap} margin={{ right: 49 }}>
          <XAxis domain={[0, 100]} type={'number'} axisLine={false} hide={true} />
          <YAxis dataKey={'player'} type={'category'} hide={true} />
          <Bar
            dataKey={'votePercentage'}
            barSize={this.getThumbSize()}
            background={{ fill: theme.secondary, fillOpacity: 1.0 }}
          >
            <LabelList
              dataKey={'votePercentage'}
              position={'right'}
              content={this.renderPercentageLabel}
            />
            <LabelList
              dataKey={'player'}
              position={'insideRight'}
              content={this.renderOptionLabel}
            />
            <LabelList
              dataKey={'iconImg'}
              position={'insideRight'}
              content={this.renderImageLabels}
            />
            {data.map((entry: IVoteCount, i: number) => {
              return <Cell key={i} fill={theme.primary} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

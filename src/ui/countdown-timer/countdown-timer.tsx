import * as React from 'react';

import { getCountdown, getCountUp, getCountUpMilliseconds } from './countdown-utils';
import { CountdownHeader } from './countdown-header';
import { CountdownUnits, CustomCountUnits } from './countdown-units';
import { returnTransform } from '../../utils/alignment-utils';
import Button from '../buttons/buttons';
import { podTracker } from '../../utils/pod-tracker-utils';

import { CountdownWrapper, CountdownContent, CountdownFrame, CountdownAligner, UnitWrapper } from './styles';

import { ICountdownTimer, CounterMode } from './types';
import { IComponentProps } from '../../types/tracking';
import { OverFlow } from '../overflow/over-flow';

interface IProps extends ICountdownTimer, IComponentProps {}

export interface IState {
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
  targetDate: Date;
}

export class CountdownTimer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      interval: 0,
      isStarted: false,
      isEnded: false,
      millennia: 0,
      centuries: 0,
      decades: 0,
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      targetDate: props.content.custom ? new Date() : new Date(props.content.date),
    };
  }

  getTimeStamp() {
    const {
      config: { mode },
      content: { custom },
    } = this.props;
    const { targetDate } = this.state;

    const time =
      mode === CounterMode.CountUp
        ? custom
          ? getCountUpMilliseconds(targetDate)
          : getCountUp(targetDate)
        : getCountdown(30, targetDate);

    if (time.isEnded) {
      clearInterval(this.state.interval);
    }

    this.setState({
      ...time,
      isStarted: true,
    });
  }

  componentDidMount() {
    this.setState({
      interval: window.setInterval(() => this.getTimeStamp(), 40),
    });

    const { config, id } = this.props;

    podTracker.loaded({
      id: `${config.mode}:${id}`,
      description: `${config.mode}:loaded`,
    });
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.content.date !== prevProps.content.date || this.props.content.custom !== prevProps.content.custom) {
      this.setState({
        targetDate: this.props.content.custom ? new Date() : new Date(this.props.content.date),
        interval: window.setInterval(() => this.getTimeStamp(), 40),
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const {
      config: { theme, settings, commercial, textColor },
      content,
    } = this.props;
    const { alignment } = settings;

    const { isStarted, isEnded } = this.state;
    const details = isEnded && content.ended ? content.ended : content.during;

    return (
      <CountdownWrapper className={'countdown-timer-wrapper'} backgroundImage={details.image}>
        <CountdownContent alignment={returnTransform(alignment)}>
          <CountdownHeader
            details={details}
            titleColour={textColor || theme.primary}
            subTitleColour={textColor || theme.primary}
            alignment={alignment}
          />
          <CountdownFrame className={'countdown-timer-holder'}>
            <CountdownAligner alignment={returnTransform(alignment)}>
              {content.custom ? (
                <CustomCountUnits
                  value={Math.ceil((this.state.milliseconds * (content.ratePerSecond || 1)) / 1000)}
                  textColour={textColor || theme.primary}
                  unit={content.unit}
                  alignment={alignment}
                  unitPosition={content.unitPosition}
                />
              ) : isEnded && content.button ? (
                <UnitWrapper opacity={1} alignment={alignment} className={'countdown-timer-unit'}>
                  <a
                    href={content.button.buttonLink}
                    target="_blank"
                    rel="noreferrer"
                    {...(commercial ? { rel: 'nofollow' } : null)}
                  >
                    <Button className={'countdown-timer-button'} background={theme.secondary}>
                      {content.button.buttonText}
                    </Button>
                  </a>
                </UnitWrapper>
              ) : (
                <CountdownUnits
                  time={this.state}
                  timeStampColour={textColor || theme.primary}
                  alignment={alignment}
                  isStarted={isStarted}
                />
              )}
            </CountdownAligner>
          </CountdownFrame>
        </CountdownContent>
        <OverFlow color={theme.secondary || '#eb1701'} />
      </CountdownWrapper>
    );
  }
}

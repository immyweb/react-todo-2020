import * as React from 'react';
import Measure from 'react-measure';

import IntroScreen from './intro-screen';
import Slides from './slides';
import Controls from './controls';
import { groupFixtures } from './utils';

import { ITheme } from '../../types';
import { IIntro, ITeam, IFixture, ITally } from './types';

interface IProps {
  theme: ITheme;
  intro: IIntro;
  teams: ITeam[];
  fixtures: IFixture[];
  onPredict(tally: ITally[]): void;
  onConfirm(): void;
  onLoaded(): void;
}

interface IState {
  introScreen: boolean;
  currentSlide: number;
  currentPos: number;
  slideWidth: number;
  totalWidth: number;
  slideCount: number;
  totalFixtures: number;
  fixturesPlayed: number;
  allFixturesCompleted: boolean;
  fixturesGrouped: IFixture[][];
  playedMatches: number[];
  isLastSlide: boolean;
}

export default class Predictor extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      introScreen: true,
      currentSlide: 0,
      currentPos: 0,
      slideWidth: 0,
      totalWidth: 0,
      slideCount: 0,
      totalFixtures: 0,
      fixturesPlayed: 0,
      allFixturesCompleted: false,
      fixturesGrouped: [],
      playedMatches: [],
      isLastSlide: false,
    };
  }

  componentDidMount() {
    const { fixtures } = this.props;

    let totalFixtures: number = 0;
    for (const day of fixtures) {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      for (const _match of day.games) {
        totalFixtures = totalFixtures + 1;
      }
    }

    const fixturesGrouped = groupFixtures(fixtures, 3);
    const slideCount = fixturesGrouped.length;

    this.setState({
      fixturesGrouped,
      slideCount,
      totalFixtures,
    });
  }

  onStartGame = () => {
    this.setState({
      introScreen: false,
    });
  };

  checkSlidePlacement() {
    if (this.state.currentSlide + 1 === this.state.slideCount) {
      this.setState({ isLastSlide: true });
    } else {
      this.setState({ isLastSlide: false });
    }
  }

  onTogglePrev = () => {
    const current = this.state.currentSlide;
    let prev = current - 1;

    if (prev < 0) {
      prev = 0;
    }

    const newPos = this.state.slideWidth * prev;

    this.setState({
      currentSlide: prev,
      currentPos: newPos,
    });

    this.checkSlidePlacement();
  };

  onToggleNext = () => {
    const current = this.state.currentSlide;
    let next = current + 1;

    if (next > this.state.slideCount - 1) {
      next = current;
    }

    const newPos = this.state.slideWidth * next;

    this.setState({
      currentSlide: next,
      currentPos: newPos,
    });

    this.checkSlidePlacement();
  };

  render() {
    const { teams, intro, onLoaded, onPredict, theme, onConfirm } = this.props;
    const {
      introScreen,
      slideWidth,
      fixturesGrouped,
      currentPos,
      totalWidth,
      currentSlide,
      slideCount,
      isLastSlide,
    } = this.state;

    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          const sWidth = contentRect.bounds!.width;
          const tWidth = sWidth * this.state.slideCount;
          this.setState({
            slideWidth: sWidth,
            totalWidth: tWidth,
          });
          setTimeout(() => {
            onLoaded();
          }, 0);
        }}
      >
        {({ measureRef }) => (
          <section ref={measureRef}>
            {introScreen && (
              <IntroScreen
                theme={theme}
                slideWidth={slideWidth}
                intro={intro}
                teams={teams}
                onStartGame={this.onStartGame}
              />
            )}
            <Slides
              theme={theme}
              fixturesGrouped={fixturesGrouped}
              teams={teams}
              currentPos={currentPos}
              totalWidth={totalWidth}
              slideWidth={slideWidth}
              isLastSlide={isLastSlide}
              intro={intro}
              onPredict={onPredict}
              onConfirm={onConfirm}
            />

            <Controls
              {...theme}
              onTogglePrev={this.onTogglePrev}
              onToggleNext={this.onToggleNext}
              currentSlide={currentSlide}
              slideCount={slideCount}
            />
          </section>
        )}
      </Measure>
    );
  }
}

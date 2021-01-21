import * as React from 'react';
import Measure from 'react-measure';

import IntroScreen from './intro-screen';
import Banner from './banner';
import Controls from './controls';
import { Slides } from './slides';

import { IFixture, ITeam, ITally } from './types';

const playedMatches: any = [];

export const groupFixtures = (fixtures: IFixture[], groupNumber: number) => {
  const grouped = [];
  const fixturesCopy = fixtures.map(a => ({ ...a }));
  while (fixturesCopy.length > 0) {
    grouped.push(fixturesCopy.splice(0, groupNumber));
  }

  return grouped;
};

interface IProps {
  fixtures: IFixture[];
  teams: ITeam[];
  groupNumber: number;
  introHeadline: string;
  introTxt: string;
  onPredict(tally: ITally[]): void;
  onConfirm(): void;
  onLoaded(): void;
}

interface IState {
  intro: boolean;
  currentSlide: number;
  currentPos: number;
  slideWidth: number;
  totalWidth: number;
  slideCount: number;
  totalFixtures: number;
  fixturesPlayed: number;
  allFixturesCompleted: boolean;
  tables: IFixture[][];
}

export class Predictor extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      intro: true,
      currentSlide: 0,
      currentPos: 0,
      slideWidth: 0,
      totalWidth: 0,
      slideCount: 0,
      totalFixtures: 0,
      fixturesPlayed: 0,
      allFixturesCompleted: false,
      tables: [],
    };
  }

  componentDidMount() {
    const totalFixtures = this.props.fixtures.length;
    const fixturesGrouped = groupFixtures(this.props.fixtures, this.props.groupNumber);
    const tableCount = fixturesGrouped.length;

    this.setState({
      totalFixtures,
      slideCount: tableCount,
      tables: fixturesGrouped,
    });
  }

  onStartGame = () => {
    this.setState({
      intro: false,
    });
  };

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
  };

  onPlayed = (fixtureId: number) => {
    if (!playedMatches.includes(fixtureId)) {
      playedMatches.push(fixtureId);
      this.setState({
        fixturesPlayed: playedMatches.length,
      });
    }
    if (playedMatches.length === this.state.totalFixtures) {
      this.setState(
        {
          allFixturesCompleted: true,
        },
        () => {
          setTimeout(() => {
            this.props.onConfirm();
          }, 500);
        },
      );
    }
  };

  render() {
    const { teams, onPredict, onLoaded, introHeadline, introTxt } = this.props;
    const {
      tables,
      currentSlide,
      slideCount,
      currentPos,
      totalWidth,
      slideWidth,
      intro,
    } = this.state;

    return (
      <Measure
        bounds
        onResize={contentRect => {
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
            {intro && (
              <IntroScreen
                slideWidth={slideWidth}
                introHeadline={introHeadline}
                introTxt={introTxt}
                onStartGame={this.onStartGame}
              />
            )}

            <Banner />

            <Slides
              tables={tables}
              teams={teams}
              onPredict={onPredict}
              currentSlide={currentSlide}
              currentPos={currentPos}
              totalWidth={totalWidth}
              slideWidth={slideWidth}
              onPlayed={this.onPlayed}
              onToggleNext={this.onToggleNext}
            />

            <Controls
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

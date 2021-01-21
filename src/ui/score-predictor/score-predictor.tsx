import * as React from 'react';
import glamorous from 'glamorous';

import { FinalTable } from './final-table';
import { Predictor } from './predictor';

import { IFixture, ITeam, ITally } from './types';
import tableGenerator from './table-generator';

export interface IProps {
  teams: ITeam[];
  fixtures: IFixture[];
  introHeadline: string;
  introTxt: string;
  tableType: string;
}

interface IState {
  completed: boolean;
  loaded: boolean;
  scoreTally: ITally[];
  finalStanding: ITeam[];
  _fixtures: IFixture[];
}

interface IGProps {
  loaded?: boolean;
}

export class ScorePredictor extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      completed: false,
      loaded: false,
      scoreTally: [],
      finalStanding: [],
      _fixtures: [],
    };
  }

  UNSAFE_componentWillMount() {
    const tempFixtures = this.props.fixtures.map((data, i) => ({
      ...data,
      id: i,
    }));

    this.setState({
      _fixtures: tempFixtures,
    });
  }

  updateTallyState(tally: ITally[]) {
    this.setState({
      scoreTally: tableGenerator.addToTally(tally, this.state.scoreTally),
    });
  }

  finalise() {
    const finalStanding = tableGenerator.finalise(this.props.teams, this.state.scoreTally);
    this.setState({
      finalStanding,
      completed: true,
    });
  }

  onConfirm = () => {
    this.finalise();
  };

  onLoaded = () => {
    this.setState({
      loaded: true,
    });
  };

  render() {
    const { teams, introHeadline, introTxt, tableType } = this.props;
    const { _fixtures, finalStanding, loaded } = this.state;

    return (
      <Container loaded={loaded}>
        {!this.state.completed ? (
          <Predictor
            fixtures={_fixtures}
            teams={teams}
            groupNumber={8}
            introHeadline={introHeadline}
            introTxt={introTxt}
            onPredict={(tally) => this.updateTallyState(tally)}
            onConfirm={this.onConfirm}
            onLoaded={this.onLoaded}
          />
        ) : (
          <FinalTable
            table={finalStanding}
            timer={10000}
            tableType={tableType}
            exitUrl={
              'https://www.sunbets.co.uk/sunsix?n=101&b=19079960&c=3&utm_source=22&utm_medium=3&utm_content=%3Fpayload%3Dfootball_predictor&utm_campaign=101'
            }
          />
        )}
      </Container>
    );
  }
}

const Container = glamorous.div<IGProps>(
  {
    label: 'score-predictor-game',
    position: 'relative',
  },
  ({ loaded }) => ({
    height: loaded ? 'auto' : 660,
    overflow: loaded ? 'auto' : 'hidden',
  }),
);

import * as React from 'react';

import Predictor from './predictor';
import FinalTable from './final-table';
import { addToTally, finalise } from './table-generator';

import { Container } from './styles';

import { ITally, ITeamData, IScorePredictor2019 } from './types';
import { OverFlow } from '../overflow/over-flow';

interface IState {
  completed: boolean;
  loaded: boolean;
  finalStanding: ITeamData[];
  scoreTally: ITally[];
}

export class ScorePredictor2019 extends React.Component<IScorePredictor2019, IState> {
  constructor(props: IScorePredictor2019) {
    super(props);
    this.state = {
      completed: false,
      loaded: false,
      finalStanding: [],
      scoreTally: [],
    };
  }

  updateTallyState(tally: ITally[]) {
    this.setState({
      scoreTally: addToTally(tally, this.state.scoreTally),
    });
  }

  onFinalise() {
    const finalStanding = finalise(this.props.content.teamData, this.state.scoreTally);
    this.setState({
      finalStanding,
      completed: true,
    });
  }

  onConfirm = () => {
    this.onFinalise();
  };

  onLoaded = () => {
    this.setState({
      loaded: true,
    });
  };

  render() {
    const {
      config: { theme },
      content,
    } = this.props;
    const { intro, teams, fixtures, finalTable } = content;
    const { loaded, finalStanding } = this.state;
    return (
      <Container loaded={loaded}>
        {!this.state.completed ? (
          <Predictor
            theme={theme}
            intro={intro}
            teams={teams}
            fixtures={fixtures}
            onPredict={tally => this.updateTallyState(tally)}
            onConfirm={this.onConfirm}
            onLoaded={this.onLoaded}
          />
        ) : (
          <FinalTable
            {...theme}
            heading={finalTable.title}
            finalStanding={finalStanding}
            teams={teams}
          />
        )}
        <OverFlow color={theme.primary} />
      </Container>
    );
  }
}

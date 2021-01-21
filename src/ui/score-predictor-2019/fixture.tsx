import * as React from 'react';

import Select from './select';
import { getBadge } from './utils';

import { FixtureTdTeam, FixtureBadge, FixtureTdVs, FixtureScore } from './styles';

import { ITally, ITeam, IGame, FixtureResultType } from './types';

interface IProps {
  fixture: IGame;
  teams: ITeam[];
  onPredict(tally: ITally[]): void;
}

interface IState {
  team1Score: number;
  team2Score: number;
}

export default class Fixture extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      team1Score: 0,
      team2Score: 0,
    };
  }

  componentDidMount() {
    const { team1, team2, id, startPrediction } = this.props.fixture;
    this.setState({
      team1Score: startPrediction.team1,
      team2Score: startPrediction.team2,
    });

    const teamOneResultType = this.resultType(startPrediction.team1, startPrediction.team2);
    const teamTwoResultType = this.resultType(startPrediction.team2, startPrediction.team1);

    this.props.onPredict([
      {
        id,
        team: team1,
        resultType: teamOneResultType,
        goals: startPrediction.team1,
        conceded: startPrediction.team2,
      },
      {
        id,
        team: team2,
        resultType: teamTwoResultType,
        goals: startPrediction.team2,
        conceded: startPrediction.team1,
      },
    ]);
  }

  resultType(team1Score: number, team2Score: number) {
    if (team1Score > team2Score) {
      return FixtureResultType.Win;
    }
    if (team1Score < team2Score) {
      return FixtureResultType.Lose;
    }
    return FixtureResultType.Draw;
  }

  checkPlayed() {
    const { team1, team2, id } = this.props.fixture;
    const { team1Score, team2Score } = this.state;

    const teamOneResultType = this.resultType(team1Score, team2Score);
    const teamTwoResultType = this.resultType(team2Score, team1Score);

    this.props.onPredict([
      {
        id,
        team: team1,
        resultType: teamOneResultType,
        goals: team1Score,
        conceded: team2Score,
      },
      {
        id,
        team: team2,
        resultType: teamTwoResultType,
        goals: team2Score,
        conceded: team1Score,
      },
    ]);
  }

  onSelectTeamOne = (value: string) => {
    this.setState({ team1Score: parseInt(value, 10) });
    this.checkPlayed();
  };

  onSelectTeamTwo = (value: string) => {
    this.setState({ team2Score: parseInt(value, 10) });
    this.checkPlayed();
  };

  render() {
    const { fixture, teams } = this.props;

    return (
      <tr>
        <FixtureTdTeam>
          <FixtureBadge src={getBadge(fixture.team1, teams)} alt={fixture.team1} />
          {fixture.team1}
        </FixtureTdTeam>
        <FixtureScore>
          <Select
            team={fixture.team1}
            startPrediction={fixture.startPrediction.team1}
            onSelectTeam={this.onSelectTeamOne}
          />
        </FixtureScore>
        <FixtureTdVs>vs</FixtureTdVs>
        <FixtureScore>
          <Select
            team={fixture.team2}
            startPrediction={fixture.startPrediction.team2}
            onSelectTeam={this.onSelectTeamTwo}
          />
        </FixtureScore>
        <FixtureTdTeam>
          <FixtureBadge src={getBadge(fixture.team2, teams)} alt={fixture.team2} />
          {fixture.team2}
        </FixtureTdTeam>
      </tr>
    );
  }
}

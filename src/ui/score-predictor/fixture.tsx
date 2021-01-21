import * as React from 'react';
import glamorous from 'glamorous';

import { TdTeam, TrTeam, TdCta, Badge, BadgeLabel } from './styles';
import { colours } from '../../styles/colours';

import { ITally, ITeam, IFixture, FixtureResultType } from './types';

export const getBadge = (teamName: string, teams: ITeam[]): string => {
  const team = teams.find(t => t.team === teamName);
  if (team !== undefined) {
    return team.badge;
  }
  return '';
};

interface IProps {
  fixture: IFixture;
  teams: ITeam[];
  onPredict(tally: ITally[]): void;
  onPlayed(fixtureId: number): void;
  onSlidePlayed(fixtureId: number): void;
}

interface IState {
  played: boolean;
  homeWin: boolean;
  awayWin: boolean;
  draw: boolean;
}

export class Fixture extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      played: false,
      homeWin: false,
      awayWin: false,
      draw: false,
    };
  }

  onSelection(result: string) {
    if (result === FixtureResultType.Home) {
      this.setState({
        played: true,
        homeWin: true,
        awayWin: false,
        draw: false,
      });
    } else if (result === FixtureResultType.Draw) {
      this.setState({
        played: true,
        homeWin: false,
        awayWin: false,
        draw: true,
      });
    } else {
      this.setState({
        played: true,
        homeWin: false,
        awayWin: true,
        draw: false,
      });
    }
  }

  render() {
    const { fixture, teams, onPredict, onPlayed, onSlidePlayed } = this.props;

    return (
      <TrTeam>
        <TdTeam>
          <Badge
            alt={fixture.team1}
            src={getBadge(fixture.team1, teams)}
            draw={this.state.draw}
            lose={this.state.awayWin}
          />
          <BadgeLabel draw={this.state.draw} lose={this.state.awayWin}>
            {fixture.team1}
          </BadgeLabel>
        </TdTeam>
        <TdCta align={'right'}>
          <Cta
            onClick={() => {
              onPredict([
                {
                  team: fixture.team1,
                  id: fixture.id,
                  resultType: FixtureResultType.Win,
                },
                {
                  team: fixture.team2,
                  id: fixture.id,
                  resultType: FixtureResultType.Lose,
                },
              ]);
              onPlayed(fixture.id);
              this.onSelection(FixtureResultType.Home);
              onSlidePlayed(fixture.id);
            }}
            active={this.state.homeWin}
          >
            W
          </Cta>
        </TdCta>
        <TdCta>
          <Cta
            onClick={() => {
              onPredict([
                {
                  team: fixture.team1,
                  id: fixture.id,
                  resultType: FixtureResultType.Draw,
                },
                {
                  team: fixture.team2,
                  id: fixture.id,
                  resultType: FixtureResultType.Draw,
                },
              ]);
              onPlayed(fixture.id);
              this.onSelection(FixtureResultType.Draw);
              onSlidePlayed(fixture.id);
            }}
            active={this.state.draw}
          >
            D
          </Cta>
        </TdCta>
        <TdCta align={'left'}>
          <Cta
            onClick={() => {
              onPredict([
                {
                  team: fixture.team2,
                  id: fixture.id,
                  resultType: FixtureResultType.Win,
                },
                {
                  team: fixture.team1,
                  id: fixture.id,
                  resultType: FixtureResultType.Lose,
                },
              ]);
              onPlayed(fixture.id);
              this.onSelection(FixtureResultType.Away);
              onSlidePlayed(fixture.id);
            }}
            active={this.state.awayWin}
          >
            W
          </Cta>
        </TdCta>
        <TdTeam>
          <Badge
            alt={fixture.team2}
            src={getBadge(fixture.team2, teams)}
            draw={this.state.draw}
            lose={this.state.homeWin}
          />
          <BadgeLabel draw={this.state.draw} lose={this.state.homeWin}>
            {fixture.team2}
          </BadgeLabel>
        </TdTeam>
      </TrTeam>
    );
  }
}

interface IGProps {
  active?: boolean;
}

export const Cta = glamorous.button<IGProps>(
  {
    display: 'inline-block',
    boxShadow: 'none',
    borderRadius: '50%',
    padding: 0,
    height: 32,
    width: 32,
    fontSize: 14,
    appearance: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    textShadow: 'none',
    textDecoration: 'none',
    WebkitFontSmoothing: 'antialiased',
    background: 'none',
    ':focus': {
      outline: 0,
    },
  },
  ({ active }) => ({
    label: active ? 'slides-cta-active' : 'slides-cta',
    background: active ? colours.$football : colours.$white,
    border: active ? `1px solid ${colours.$football}` : `1px solid ${colours.$darkGrey}`,
    color: active ? colours.$white : colours.$darkGrey,
    fontWeight: active ? 'bold' : 'normal',
  }),
);

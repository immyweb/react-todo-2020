import * as React from 'react';
import glamorous from 'glamorous';

import { Fixture } from './fixture';

import { IFixture, ITeam, ITally } from './types';
import { FixtureTable, THead, THeading, THBorder } from './styles';

interface IGProps {
  width?: number;
}

interface IProps {
  group: IFixture[];
  teams: ITeam[];
  onPredict: (tally: ITally[]) => void;
  slideWidth: number;
  onPlayed: (fixtureId: number) => void;
  onToggleNext: () => void;
}

interface IState {
  groupTotalNumber: number;
  groupTotalPlayed: number;
  allGroupFixturesPlayed: boolean;
}

let playedMatches: any = [];

export class Slide extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      groupTotalNumber: 0,
      groupTotalPlayed: 0,
      allGroupFixturesPlayed: false,
    };
  }

  componentDidMount() {
    const groupTotalNumber = this.props.group.length;
    this.setState({
      groupTotalNumber,
    });
  }

  onSlidePlayed = (fixtureId: number) => {
    if (!this.state.allGroupFixturesPlayed) {
      if (!playedMatches.includes(fixtureId)) {
        playedMatches.push(fixtureId);
        this.setState({
          groupTotalPlayed: playedMatches.length,
        });
      }
      if (playedMatches.length === this.state.groupTotalNumber) {
        this.setState({
          allGroupFixturesPlayed: true,
        });
        this.props.onToggleNext();
        playedMatches = [];
      }
    }
  };

  renderFixtures(
    group: IFixture[],
    teams: ITeam[],
    onPredict: (tally: ITally[]) => void,
    onPlayed: (fixtureId: number) => void,
  ) {
    return group.map((fixture: IFixture, i: number) => {
      return (
        <Fixture
          key={i}
          fixture={fixture}
          teams={teams}
          onPredict={onPredict}
          onPlayed={onPlayed}
          onSlidePlayed={this.onSlidePlayed}
        />
      );
    });
  }

  render() {
    const { group, teams, onPredict, slideWidth, onPlayed } = this.props;

    return (
      <SlidePane width={slideWidth}>
        <FixtureTable>
          <THead>
            <tr>
              <THeading borderRight={true} definedWidth={'26%'}>
                Team
              </THeading>
              <THeading>
                Win <THBorder>|</THBorder>
              </THeading>
              <THeading>
                Draw <THBorder>|</THBorder>
              </THeading>
              <THeading borderRight={true}>Win</THeading>
              <THeading definedWidth={'26%'}>Team</THeading>
            </tr>
          </THead>
          <tbody>{this.renderFixtures(group, teams, onPredict, onPlayed)}</tbody>
        </FixtureTable>
      </SlidePane>
    );
  }
}

const SlidePane = glamorous.div<IGProps>(
  {
    label: 'slides-slide',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  ({ width }) => ({
    width: width ? width : '100%',
  }),
);

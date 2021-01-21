import * as React from 'react';

import Fixture from './fixture';
import { ITally, ITeam, IFixture } from './types';
import { DateHeader, Table } from './styles';
import { ITheme } from '../../types';

interface IProps {
  theme: ITheme;
  fixture: IFixture;
  teams: ITeam[];
  onPredict(tally: ITally[]): void;
}

const MatchRound: React.FC<IProps> = ({ fixture, teams, theme, onPredict }) => {
  const matchList = fixture.games.map((game, i) => {
    return <Fixture key={i} fixture={game} teams={teams} onPredict={onPredict} />;
  });
  return (
    <div>
      <DateHeader background={theme.primary}>{fixture.date}</DateHeader>
      <Table>
        <tbody>{matchList}</tbody>
      </Table>
    </div>
  );
};

export default MatchRound;

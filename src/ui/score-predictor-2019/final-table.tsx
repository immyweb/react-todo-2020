import * as React from 'react';

import { ITeamData, ITeam } from './types';
import { Table, THead, Headline, THeading, THBorder, TdTeam, TrPrem, Badge } from './styles';
import { getBadge } from './utils';

interface IProps {
  finalStanding: ITeamData[];
  teams: ITeam[];
  primary: string;
  heading: string;
}

const FinalTable: React.FC<IProps> = ({ finalStanding, teams, primary, heading }) => {
  const renderRows = finalStanding.map((result, i) => {
    const { team, played, win, draw, lose, goalDiff, points } = result;
    return (
      <TrPrem key={team} definedHeight={49}>
        <TdTeam definedWidth={20}>{i + 3}</TdTeam>
        <TdTeam definedWidth={45}>
          <Badge src={getBadge(team, teams)} alt={team} />
        </TdTeam>
        <TdTeam fontAlignment="left">{team}</TdTeam>
        <TdTeam>{played}</TdTeam>
        <TdTeam>{win}</TdTeam>
        <TdTeam>{draw}</TdTeam>
        <TdTeam>{lose}</TdTeam>
        <TdTeam hideMobile={true}>{goalDiff}</TdTeam>
        <TdTeam>{points}</TdTeam>
      </TrPrem>
    );
  });
  return (
    <div>
      <Headline background={primary}>{heading}</Headline>
      <Table>
        <THead>
          <tr>
            <THeading />
            <THeading colSpan={2} borderRight={true} fontAlignment="left">
              End of League Scores
            </THeading>
            <THeading definedWidth={35}>
              Pl <THBorder>|</THBorder>
            </THeading>
            <THeading definedWidth={35}>
              W <THBorder>|</THBorder>
            </THeading>
            <THeading definedWidth={35}>
              D <THBorder>|</THBorder>
            </THeading>
            <THeading definedWidth={35}>
              L <THBorder>|</THBorder>
            </THeading>
            <THeading hideMobile={true} definedWidth={35}>
              GD <THBorder>|</THBorder>
            </THeading>
            <THeading definedWidth={35}>Pts</THeading>
          </tr>
        </THead>
        <tbody>{renderRows}</tbody>
      </Table>
    </div>
  );
};

export default FinalTable;

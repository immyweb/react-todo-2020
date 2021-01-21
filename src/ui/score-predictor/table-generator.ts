import { ITeam, ITally, FixtureResultType } from './types';
import groupBy from '../../utils/group-by';
import scoreConfig from './utils';

const generatePredictedTable = (groupedPredictions: object, prop: string) => {
  const groupedTallys = Object.keys(groupedPredictions).map(key => {
    return groupedPredictions[key];
  });

  const totals = groupedTallys.map((tallys: ITally[]) => {
    const points = tallys.reduce((accumulator: any, item: ITally) => {
      return accumulator + item[prop];
    }, 0);

    const teamName = tallys[0].team;

    return {
      points,
      team: teamName,
      played: tallys.length,
      win: tallys.filter(t => t.resultType === FixtureResultType.Win).length,
      draw: tallys.filter(t => t.resultType === FixtureResultType.Draw).length,
      lose: tallys.filter(t => t.resultType === FixtureResultType.Lose).length,
    };
  });

  return totals;
};

const tableGenerator = {
  finalise: (currentTable: ITeam[], userPredictions: ITally[]) => {
    const groupedPredictions = groupBy<ITally>(userPredictions, 'team');
    const predictedTable = generatePredictedTable(groupedPredictions, 'points');

    const finalTable = currentTable.map(currentTeamStanding => {
      const teamPrediction = predictedTable.find(p => p.team === currentTeamStanding.team);

      if (teamPrediction === undefined) {
        return currentTeamStanding;
      }

      return {
        ...currentTeamStanding,
        points: teamPrediction.points + currentTeamStanding.points,
        played: teamPrediction.played + currentTeamStanding.played,
        win: teamPrediction.win + currentTeamStanding.win,
        draw: teamPrediction.draw + currentTeamStanding.draw,
        lose: teamPrediction.lose + currentTeamStanding.lose,
      };
    });

    return finalTable.sort((item1, item2) => {
      return item2.points - item1.points;
    });
  },
  addToTally: (tally: ITally[], scoreTally: ITally[]) => {
    const tallyPoints: ITally[] = tally.map((team, i) => {
      return {
        ...team,
        points: scoreConfig[team.resultType].points,
      };
    });

    const filterResult: ITally[] = scoreTally.filter(item => {
      return item.id !== tally[0].id;
    });

    return [...filterResult, ...tallyPoints];
  },
};

export default tableGenerator;

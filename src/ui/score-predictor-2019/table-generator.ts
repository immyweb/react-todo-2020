import { ITally, ITeamData, FixtureResultType } from './types';
import { scoreConfig, groupBy } from './utils';

export const addToTally = (tally: ITally[], scoreTally: ITally[]) => {
  const tallyPoints: ITally[] = tally.map(team => {
    return {
      ...team,
      points: scoreConfig[team.resultType].points,
    };
  });

  const filterResult: ITally[] = scoreTally.filter(item => {
    return item.id !== tally[0].id;
  });

  return [...filterResult, ...tallyPoints];
};

export const sortTable = () => {
  return (a: ITeamData, b: ITeamData) => {
    let result = 0;

    // Try points first
    if (a['points'] < b['points']) {
      result = -1;
    } else if (a['points'] > b['points']) {
      result = 1;
    }

    // The two teams are tied on points, try goal difference
    else {
      if (a['goalDiff'] < b['goalDiff']) {
        result = -1;
      } else if (a['goalDiff'] > b['goalDiff']) {
        result = 1;
      }
    }

    return -result;
  };
};

export const finalise = (currentTable: ITeamData[], userPredictions: ITally[]) => {
  const groupedPredictions = groupBy<ITally>(userPredictions, 'team');
  const predictedTable = generatePredictedTable(groupedPredictions);

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
      goals: teamPrediction.goals + currentTeamStanding.goals,
      conceded: teamPrediction.conceded + currentTeamStanding.conceded,
      goalDiff: teamPrediction.goalDiff + currentTeamStanding.goalDiff,
    };
  });

  const pointsGoalDiffSort = finalTable.sort(sortTable());

  return pointsGoalDiffSort;
};

const sum = (arr: ITally[], prop: string) => {
  return arr.reduce((accumulator: any, item: ITally) => {
    return accumulator + item[prop];
  }, 0);
};

const generatePredictedTable = (groupedPredictions: object) => {
  const groupedTallys = Object.keys(groupedPredictions).map(key => {
    return groupedPredictions[key];
  });

  const totals = groupedTallys.map((tallys: ITally[]) => {
    const points = sum(tallys, 'points');
    const goals = sum(tallys, 'goals');
    const conceded = sum(tallys, 'conceded');
    const teamName = tallys[0].team;

    return {
      conceded,
      goals,
      points,
      team: teamName,
      played: tallys.length,
      win: tallys.filter(t => t.resultType === FixtureResultType.Win).length,
      draw: tallys.filter(t => t.resultType === FixtureResultType.Draw).length,
      lose: tallys.filter(t => t.resultType === FixtureResultType.Lose).length,
      goalDiff: goals - conceded,
    };
  });

  return totals;
};

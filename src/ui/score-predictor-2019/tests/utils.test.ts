import { groupFixtures, getBadge, groupBy } from '../utils';

const data = require('../mock-data.json');

describe('groupFixtures', () => {
  it('splits the fixtures into the group (slide) number', () => {
    const slides = groupFixtures(data.content.fixtures, 3);
    expect(slides.length).toEqual(6);
    const slides2 = groupFixtures(data.content.fixtures, 2);
    expect(slides2.length).toEqual(8);
  });
});

describe('getBadge', () => {
  it('renders correct badge for a team', () => {
    const teamBadge = getBadge('Liverpool', data.content.teams);
    expect(teamBadge).toEqual(
      'https://www.thesun.co.uk/wp-content/uploads/2016/04/Liverpool.png?strip=all&w=67',
    );
  });
});

describe('groupBy', () => {
  it('sorts predictions into team categories', () => {
    const predictions = [
      {
        conceded: 2,
        goals: 1,
        id: 0,
        points: 0,
        resultType: 'LOSE',
        team: 'Arsenal',
      },
      {
        conceded: 1,
        goals: 2,
        id: 0,
        points: 3,
        resultType: 'WIN',
        team: 'Newcastle',
      },
      {
        conceded: 1,
        goals: 3,
        id: 2,
        points: 3,
        resultType: 'WIN',
        team: 'Everton',
      },
      {
        conceded: 3,
        goals: 1,
        id: 2,
        points: 0,
        resultType: 'LOSE',
        team: 'Arsenal',
      },
    ];
    const groups = groupBy(predictions, 'team');
    expect(groups).toEqual({
      Arsenal: [
        {
          conceded: 2,
          goals: 1,
          id: 0,
          points: 0,
          resultType: 'LOSE',
          team: 'Arsenal',
        },
        {
          conceded: 3,
          goals: 1,
          id: 2,
          points: 0,
          resultType: 'LOSE',
          team: 'Arsenal',
        },
      ],
      Newcastle: [
        {
          conceded: 1,
          goals: 2,
          id: 0,
          points: 3,
          resultType: 'WIN',
          team: 'Newcastle',
        },
      ],
      Everton: [
        {
          conceded: 1,
          goals: 3,
          id: 2,
          points: 3,
          resultType: 'WIN',
          team: 'Everton',
        },
      ],
    });
  });
});

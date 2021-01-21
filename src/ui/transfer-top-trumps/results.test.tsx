import * as React from 'react';
import { shallow } from 'enzyme';

import { Results, calculatePercentages, sortProfiles } from './results';

import { TTLozengeBtn } from './styles';

const targetClub = {
  id: 'man-utd',
  name: 'Man Utd',
  badge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/manutd_@2x.png',
  teamColours: '#a81507',
};

const players = [
  {
    id: 'willian',
    fname: '',
    sName: 'Willian',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/WILLIAN_mobile_@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/WILLIAN_desktop_@2x.jpg',
    club: 'Chelsea',
    clubBadge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/chelsea_@2x.png',
    age: 29,
    fee: '£60m',
    position: 'CAM',
    voted: true,
    selected: false,
    active: false,
    idx: 0,
  },
  {
    id: 'a_sandro',
    fname: 'Alex',
    sName: 'Sandro',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/SANDRO_mobile_@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/SANDRO_desktop_@2x.jpg',
    club: 'Juventus',
    clubBadge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/juventus_@2x1.png',
    age: 27,
    fee: '£60m',
    position: 'LB',
    voted: true,
    selected: true,
    active: false,
    idx: 1,
  },
  {
    id: 's_m_savic',
    fname: 'Sergej',
    sName: 'Milinković-Savić',
    imageMobile:
      'https://www.thesun.co.uk/wp-content/uploads/2018/07/MILINKOVIC-SAVIC_mobile_@2x.jpg',
    imageDesktop:
      'https://www.thesun.co.uk/wp-content/uploads/2018/07/MILINKOVIC-SAVIC_desktop_@2x.jpg',
    club: 'SS Lazio',
    clubBadge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/lazio_@2x1.png',
    age: 23,
    fee: '£70m',
    position: 'CM',
    voted: false,
    selected: false,
    active: true,
    idx: 2,
  },
];

const playerVotes = [
  {
    player: 'willian',
    club: 'Chelsea',
    voteCount: 60,
    noVoteCount: 40,
  },
  {
    player: 'a_sandro',
    club: 'Juventus',
    voteCount: 40,
    noVoteCount: 60,
  },
  {
    player: 's_m_savic',
    club: 'SS Lazio',
    voteCount: 100,
    noVoteCount: 0,
  },
];

function shallowRender(props?: any) {
  return shallow(
    <Results
      headline={'Transfer Top Trumps'}
      subHeadline={'The results'}
      playBtn={'latest news'}
      exitUrl={'http://www.thesun.co.uk'}
      players={players}
      playerVotes={playerVotes}
      theme={{ primary: '#000000', secondary: '#ffffff' }}
      targetClub={targetClub}
      onGoToLink={() => {}}
      {...props}
    />,
  );
}

describe('<Results />', () => {
  describe('UI', () => {
    it('renders correctly', () => {
      const wrapper = shallowRender();
      expect(wrapper).toMatchSnapshot();
    });

    it('clicking on lozenge button calls onGoToLink', () => {
      const fn = jest.fn();
      const wrapper = shallowRender({ onGoToLink: fn });
      const btn = wrapper.find(TTLozengeBtn);
      btn.simulate('click');
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('calculatePercentages', () => {
    it('should add votePercent with correct values to vote date when values are 0', () => {
      const voteArr = [
        {
          voteCount: 0,
          noVoteCount: 0,
          club: '',
          player: '',
        },
      ];
      const res = calculatePercentages(voteArr);
      expect(res).toEqual([
        {
          club: '',
          player: '',
          voteCount: 0,
          noVoteCount: 0,
          votePercent: 0,
          noVotePercent: 0,
        },
      ]);
    });

    it('should add votePercent with correct values to vote date when value is above 0', () => {
      const voteArr = [
        {
          voteCount: 20,
          noVoteCount: 10,
          club: '',
          player: '',
        },
      ];
      const res = calculatePercentages(voteArr);
      expect(res).toEqual([
        {
          club: '',
          player: '',
          voteCount: 20,
          noVoteCount: 10,
          votePercent: 67,
          noVotePercent: 33,
        },
      ]);
    });

    it('should add votePercent with correct values to vote date when all votes are yes', () => {
      const voteArr = [
        {
          voteCount: 10,
          noVoteCount: 0,
          club: '',
          player: '',
        },
      ];
      const res = calculatePercentages(voteArr);
      expect(res).toEqual([
        {
          club: '',
          player: '',
          voteCount: 10,
          noVoteCount: 0,
          votePercent: 100,
          noVotePercent: 0,
        },
      ]);
    });
  });

  describe('sortProfiles', () => {
    it('should add voteCount to player if ids match', () => {
      const playerArr = [
        {
          id: 'willian',
          fname: '',
          sName: '',
          imageMobile: '',
          imageDesktop: '',
          club: '',
          clubBadge: '',
          age: 29,
          fee: '',
          position: '',
          voted: true,
          selected: false,
          active: false,
          idx: 0,
        },
      ];
      const voteArr = [
        {
          player: 'willian',
          club: '',
          voteCount: 60,
          noVoteCount: 40,
        },
      ];
      const res = sortProfiles(voteArr, playerArr);
      expect(res).toEqual([
        {
          id: 'willian',
          fname: '',
          sName: '',
          imageMobile: '',
          imageDesktop: '',
          club: '',
          clubBadge: '',
          age: 29,
          fee: '',
          position: '',
          voted: true,
          selected: false,
          active: false,
          idx: 0,
          voteCount: 60,
        },
      ]);
    });

    it('should not add voteCount to player if ids do not match', () => {
      const playerArr = [
        {
          id: 'willian',
          fname: '',
          sName: '',
          imageMobile: '',
          imageDesktop: '',
          club: '',
          clubBadge: '',
          age: 29,
          fee: '',
          position: '',
          voted: true,
          selected: false,
          active: false,
          idx: 0,
        },
      ];
      const voteArr = [
        {
          player: 'a_sandro',
          club: '',
          voteCount: 60,
          noVoteCount: 40,
        },
      ];
      const res = sortProfiles(voteArr, playerArr);
      expect(res).toEqual([
        {
          id: 'willian',
          fname: '',
          sName: '',
          imageMobile: '',
          imageDesktop: '',
          club: '',
          clubBadge: '',
          age: 29,
          fee: '',
          position: '',
          voted: true,
          selected: false,
          active: false,
          idx: 0,
        },
      ]);
    });
  });
});

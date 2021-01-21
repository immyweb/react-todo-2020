import * as React from 'react';
import { shallow } from 'enzyme';

import { transferTinderAPI } from '../../api-services';
import { TransferTopTrumps } from './transfer-top-trumps';
import { podTracker } from '../../utils/pod-tracker-utils';

import { IntroScreen } from './intro-screen';
import { Results } from './results';

import { Game } from './styles';

import { Vote } from './types';

jest.mock('../../api-services', () => ({
  transferTinderAPI: {
    addPlayerVotes: jest.fn(),
  },
}));

jest.mock('../../utils/pod-tracker-utils', () => ({
  podTracker: {
    click: jest.fn(),
  },
}));

const defaultProps = {
  id: 'card',
  theme: {
    primary: 'abc',
    secondary: '123',
  },
  introScreen: {
    headline: '',
    subHeadline: '',
    introHeadline: '',
    introCopy: '',
    no: '',
    yes: '',
    playBtn: '',
  },
  cardScreen: {
    currentClub: '',
    pos: '',
    estFee: '',
    playerAge: '',
  },
  resultsScreen: {
    headline: '',
    subHeadline: '',
    sectionHeading: '',
    playBtn: '',
    exitUrl: '',
  },
  targetClub: {
    id: '',
    name: '',
    badge: '',
    teamColours: '',
  },
  players: [],
};

const blankPlayer = {
  id: '',
  fname: '',
  sName: '',
  imageMobile: '',
  imageDesktop: '',
  club: '',
  clubBadge: '',
  age: 0,
  fee: '',
  position: '',
};

function shallowRender(props?: any) {
  return shallow(
    <TransferTopTrumps
      theme={{ primary: '#000000', secondary: '#ffffff' }}
      introScreen={introScreen}
      cardScreen={cardScreen}
      resultsScreen={resultsScreen}
      targetClub={targetClub}
      players={players}
      {...props}
    />,
  );
}

describe('<TransferTopTrumps />', () => {
  describe('UI', () => {
    it('renders correctly when errored', () => {
      const wrapper = shallowRender();
      expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly when not errored', () => {
      const wrapper = shallowRender();
      wrapper.setState({
        hasErrored: false,
      });
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
    });

    it('sets correct state values on launch', () => {
      const wrapper = shallowRender();
      expect(wrapper.state('showIntro')).toEqual(true);
      expect(wrapper.state('playGame')).toEqual(false);
      expect(wrapper.state('showResults')).toEqual(false);
    });

    it('addPlayerStatus adds the correct status to each player', () => {
      const wrapper = shallowRender();
      const instance = wrapper.instance() as TransferTopTrumps;
      const newPlayers = instance.addPlayerStatus(players);
      expect(newPlayers[0].selected).toEqual(false);
      expect(newPlayers[0].active).toEqual(true);
      expect(newPlayers[0].voted).toEqual(false);
      expect(newPlayers[1].selected).toEqual(false);
      expect(newPlayers[1].active).toEqual(false);
      expect(newPlayers[1].voted).toEqual(false);
      expect(newPlayers[2].selected).toEqual(false);
      expect(newPlayers[2].active).toEqual(false);
      expect(newPlayers[2].voted).toEqual(false);
    });

    it('onStartGame hides <IntroScreen /> and shows <Game />', () => {
      const wrapper = shallowRender();
      const instance = wrapper.instance() as TransferTopTrumps;
      wrapper.setState({
        hasErrored: false,
      });
      instance.onStartGame();
      expect(wrapper.state('showIntro')).toEqual(false);
      expect(wrapper.state('playGame')).toEqual(true);
      expect(wrapper.state('showResults')).toEqual(false);
      wrapper.update();
      const introScreen = wrapper.find(IntroScreen);
      expect(introScreen.length).toEqual(0);
      const gameScreen = wrapper.find(Game);
      expect(gameScreen.length).toEqual(1);
    });

    it('renders <Results /> when showResults is set to true', () => {
      const wrapper = shallowRender();
      wrapper.setState({
        hasErrored: false,
        showIntro: false,
        playGame: false,
        showResults: true,
      });
      const introScreen = wrapper.find(IntroScreen);
      expect(introScreen.length).toEqual(0);
      const ResultsScreen = wrapper.find(Results);
      expect(ResultsScreen.length).toEqual(1);
    });

    it('onGoToLink functions goes to supplied exit url', () => {
      window.location.assign = jest.fn();
      const wrapper = shallowRender();
      const instance = wrapper.instance() as TransferTopTrumps;
      instance.onGoToLink();
      expect(window.location.assign).toBeCalledWith(
        'https://www.thesun.co.uk/sport/football/team/1196656/manchester-united/',
      );
    });

    it('updateCurrentPlayer updates the current player with correct Yes status', () => {
      const currentPlayer = {
        ...blankPlayer,
        id: 'willian',
      };
      const wrapper = shallowRender();
      const instance = wrapper.instance() as TransferTopTrumps;
      const newArr = instance.updateCurrentPlayer(players, currentPlayer, Vote.yes);
      expect(newArr[0].voted).toEqual(true);
      expect(newArr[0].active).toEqual(false);
      expect(newArr[0].selected).toEqual(true);
    });

    it('updateCurrentPlayer updates the current player with correct No status', () => {
      const currentPlayer = {
        ...blankPlayer,
        id: 'willian',
      };
      const wrapper = shallowRender();
      const instance = wrapper.instance() as TransferTopTrumps;
      const newArr = instance.updateCurrentPlayer(players, currentPlayer, Vote.no);
      expect(newArr[0].voted).toEqual(true);
      expect(newArr[0].active).toEqual(false);
      expect(newArr[0].selected).toEqual(false);
    });

    it.skip('updateCard function moves to next player if there are more players left', () => {
      const currentPlayer = {
        ...players[0],
      };
      const wrapper = shallowRender();
      wrapper.setState({
        currentPlayer,
        hasErrored: false,
      });
      wrapper.update();
      const instance = wrapper.instance() as TransferTopTrumps;
      instance.updateCard(currentPlayer, Vote.yes);
      wrapper.update();
      expect(wrapper.state('currentPlayer')).toEqual(players[1]);
    });
  });

  describe('finishVoting', () => {
    it('should update the state, track an event, and send the vote data to the api', () => {
      const wrapper = shallow(<TransferTopTrumps {...defaultProps} />);
      const instance = wrapper.instance() as TransferTopTrumps;
      const newPlayers = [
        {
          ...blankPlayer,
          id: 'good',
          selected: true,
        },
        {
          ...blankPlayer,
          id: 'bad',
          selected: false,
        },
      ];

      instance.finishVoting(newPlayers, 'a heavy stick, used for beating');

      expect(podTracker.click).toHaveBeenCalledWith({
        description: 'Transfer Top Trumps game completed',
        id: 'card',
      });
      expect(transferTinderAPI.addPlayerVotes).toHaveBeenCalledWith(
        'a heavy stick, used for beating',
        ['good'],
        ['bad'],
      );
    });
  });
});

const introScreen = {
  headline: 'Transfer Top Trumps',
  subHeadline: 'Who will you choose?',
  introHeadline: 'How to play',
  introCopy: 'Choose the players you would like your club to sign',
  no: "Tap/Click for 'No'",
  yes: "Tap/Click for 'Yes'",
  playBtn: 'Play now',
};

const cardScreen = {
  currentClub: 'Current Club',
  pos: 'Pos.',
  estFee: 'Est. Fee',
  playerAge: 'Age',
};

const targetClub = {
  id: 'man-utd',
  name: 'Man Utd',
  badge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/manutd_@2x.png',
  teamColours: '#a81507',
};

const resultsScreen = {
  headline: 'Transfer Top Trumps',
  subHeadline: 'The results',
  sectionHeading: 'Leaderboard',
  playBtn: 'Club news',
  exitUrl: 'https://www.thesun.co.uk/sport/football/team/1196656/manchester-united/',
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
    idx: 2,
  },
];

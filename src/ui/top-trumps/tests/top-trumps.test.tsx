import * as React from 'react';
import { shallow } from 'enzyme';

import { TopTrumps } from '../top-trumps';
import { IntroScreen } from '../intro-screen';
import { Vote } from '../vote';
import { Results } from '../results';
import { TTGame } from '../styles';

import { podTracker } from '../../../utils/pod-tracker-utils';

jest.mock('../../../api-services', () => ({
  transferTinderAPI: {
    addPlayerVotes: jest.fn(),
  },
}));

jest.mock('../../../utils/pod-tracker-utils', () => ({
  podTracker: {
    click: jest.fn(),
  },
}));

const theme = {
  primary: '#ffffff',
  secondary: '#000000',
};

const introScreen = {
  imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/09/intro_mob@2x1.jpg',
  imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/09/intro_desktop@2x1.jpg',
  playButtonText: 'Play now',
};

const resultsScreen = {
  headline: 'The results',
  subHeadline: 'Who should AJ fight next?',
  linkText: 'Boxing news',
  linkUrl: 'https://www.thesun.co.uk/sport/boxing/',
  imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/09/results_mob@2x.jpg',
  imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/09/results_desktop@2x.jpg',
};

const voteScreen = {
  headline: "It's time to decide...",
  subHeadline: 'Who should AJ fight next?',
  bottomCopy: 'Cast your vote and see what others are thinking too.',
  imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/09/vote_mob@2x.jpg',
  imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/09/vote_desktop@2x.jpg',
};

const cards = [
  {
    id: 'wilder',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/wilder-mob@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/WILDER@2x.jpg',
    imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-wilder@2x.jpg',
    fName: 'Deontay',
    sName: 'Wilder',
  },
  {
    id: 'whyte',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/whyte-mob@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/WHYTE@2x.jpg',
    imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-whyte@2x.jpg',
    fName: 'Dillian',
    sName: 'Whyte',
  },
  {
    id: 'fury',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/fury-mob@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/FURY@2x.jpg',
    imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-fury@2x.jpg',
    fName: 'Tyson',
    sName: 'Fury',
  },
];

function shallowRender(props?: any) {
  return shallow(
    <TopTrumps
      id={'card'}
      theme={theme}
      targetClubId={'ajsept2018'}
      introScreen={introScreen}
      resultsScreen={resultsScreen}
      voteScreen={voteScreen}
      cards={cards}
      {...props}
    />,
  );
}

describe('<TopTrumps />', () => {
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
    expect(wrapper.state('showCards')).toEqual(false);
    expect(wrapper.state('showVote')).toEqual(false);
    expect(wrapper.state('showResults')).toEqual(false);
  });

  it('onStartGame hides <IntroScreen />, shows <TTGame /> and tracks event', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as TopTrumps;
    wrapper.setState({
      hasErrored: false,
    });
    instance.onStartGame();
    expect(wrapper.state('showIntro')).toEqual(false);
    expect(wrapper.state('showCards')).toEqual(true);
    expect(wrapper.state('showVote')).toEqual(false);
    expect(wrapper.state('showResults')).toEqual(false);
    wrapper.update();
    const introScreen = wrapper.find(IntroScreen);
    expect(introScreen.length).toEqual(0);
    const gameScreen = wrapper.find(TTGame);
    expect(gameScreen.length).toEqual(1);

    expect(podTracker.click).toHaveBeenCalledWith({
      description: 'Generic Top Trumps game started',
      id: 'card',
    });
  });

  it('clickLink function goes to supplied exit url', () => {
    window.location.assign = jest.fn();
    const wrapper = shallowRender();
    const instance = wrapper.instance() as TopTrumps;
    instance.clickLink();
    expect(window.location.assign).toBeCalledWith('https://www.thesun.co.uk/sport/boxing/');
  });

  it('clickLeft function sets correct currentCardIndex index and tracks event', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as TopTrumps;
    wrapper.setState({
      hasErrored: false,
    });
    instance.clickLeft();
    expect(wrapper.state('currentCardIndex')).toEqual(0);
    wrapper.setState({
      currentCardIndex: 3,
    });
    instance.clickLeft();
    expect(wrapper.state('currentCardIndex')).toEqual(2);

    expect(podTracker.click).toHaveBeenCalledWith({
      description: 'Generic Top Trumps click back',
      id: 'card',
    });
  });

  it('clickRight function sets correct currentCardIndex index, correct state, and tracks event', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as TopTrumps;
    wrapper.setState({
      hasErrored: false,
    });
    instance.clickRight();
    expect(wrapper.state('currentCardIndex')).toEqual(1);
    instance.clickRight();
    expect(wrapper.state('currentCardIndex')).toEqual(2);
    instance.clickRight();
    expect(wrapper.state('showCards')).toEqual(false);
    expect(wrapper.state('showVote')).toEqual(true);

    expect(podTracker.click).toHaveBeenCalledWith({
      description: 'Generic Top Trumps click forward',
      id: 'card',
    });
  });

  it('mergeVotes function adds correct vote count to player', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as TopTrumps;
    const results = [
      {
        player: 'wilder',
        voteCount: 5,
        noVoteCount: 5,
      },
      {
        player: 'whyte',
        voteCount: 10,
        noVoteCount: 0,
      },
      {
        player: 'fury',
        voteCount: 0,
        noVoteCount: 10,
      },
    ];
    const result = instance.mergeVotes(results, cards);
    expect(result).toEqual([
      {
        id: 'wilder',
        imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/wilder-mob@2x.jpg',
        imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/WILDER@2x.jpg',
        imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-wilder@2x.jpg',
        fName: 'Deontay',
        sName: 'Wilder',
        voteCount: { player: 'wilder', voteCount: 5, noVoteCount: 5 },
      },
      {
        id: 'whyte',
        imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/whyte-mob@2x.jpg',
        imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/WHYTE@2x.jpg',
        imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-whyte@2x.jpg',
        fName: 'Dillian',
        sName: 'Whyte',
        voteCount: { player: 'whyte', voteCount: 10, noVoteCount: 0 },
      },
      {
        id: 'fury',
        imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/fury-mob@2x.jpg',
        imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/FURY@2x.jpg',
        imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-fury@2x.jpg',
        fName: 'Tyson',
        sName: 'Fury',
        voteCount: { player: 'fury', voteCount: 0, noVoteCount: 10 },
      },
    ]);
  });

  it('clickVote update the state, track an event, and send the vote data to the api', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as TopTrumps;
    wrapper.setState({
      hasErrored: false,
      showIntro: false,
      showCards: false,
      showVote: true,
      showResults: false,
    });
    instance.clickVote(['fury']);
    expect(wrapper.state('showIntro')).toEqual(false);
    expect(wrapper.state('showCards')).toEqual(false);
    expect(wrapper.state('showVote')).toEqual(false);
    expect(wrapper.state('showResults')).toEqual(true);
    wrapper.update();
    const voteScreen = wrapper.find(Vote);
    expect(voteScreen.length).toEqual(0);
    const resultsScreen = wrapper.find(Results);
    expect(resultsScreen.length).toEqual(1);

    expect(podTracker.click).toHaveBeenCalledWith({
      description: 'Generic Top Trumps click vote',
      id: 'card',
    });
  });
});

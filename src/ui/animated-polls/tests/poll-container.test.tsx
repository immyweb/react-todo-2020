import * as React from 'react';
import { shallow } from 'enzyme';

import { PollContainer } from '../poll-container';
import { IntroScreen } from '../intro';
import { CardScreen } from '../card';
import { VoteScreen } from '../vote';
import { ResultsScreen } from '../results';
import Error from '../../error';

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

const config = {
  theme: {
    primary: '#000000',
    secondary: '#ffffff',
  },
};

const content = {
  teaserScreen: {
    title: 'title',
    copy: 'copy',
    cta: 'cta',
    imageMobile: 'http://www.thesun.co.uk/imageMobile.jpg',
    imageDesktop: 'http://www.thesun.co.uk/imageDesktop.jpg',
  },
  introScreen: {
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/IntroScreen@2.png',
    imageDesktop: '',
    title: 'Jeremy Styles',
    introText: [
      'Jeremy Kyle needs help picking his moustache style.',
      'Flick through the gallery of images and vote on your favourite at the end.',
    ],
    cta: 'Read more from:',
    ctaLink: '#MOVEMBER',
    ctaUrl: 'http://www.thesun.co.uk',
  },
  cards: [
    {
      id: 'chevron',
      iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Chevron.png',
      imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/handlebar.jpg',
      imageDesktop: '',
      title: 'The Chevron',
      copy: 'Looks a bit more Bruce Forsyth than Tom Selleck...',
    },
    {
      id: 'handlebar',
      iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Handlebar.png',
      imageMobile: '',
      imageDesktop: '',
      title: 'The Handlebar',
      copy: 'Get a grip!',
    },
    {
      id: 'pencil',
      iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Pencil.png',
      imageMobile: '',
      imageDesktop: '',
      title: 'The Pencil',
      copy: 'Work it out with this',
    },
  ],
  voteScreen: {
    bkgndImgMobile: 'handlebar-mobile.jpg',
    bkgndImgDesktop: 'desktop.jpg',
    title: 'Have your say',
    introTxt: 'Which do you think looked best? Vote on your favourite moustache',
    ctaTxt: 'Tell us what you think',
    cta: 'Read more from:',
    ctaLink: '#MOVEMBER',
    ctaUrl: 'http://www.thesun.co.uk',
  },
  resultsScreen: {
    bkgndImgMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/handlebar.jpg',
    bkgndImgDesktop: '',
    title: 'The Results',
    introTxt: 'Here’s what everyone else thought, did you agree with the others?',
    ctaTxt: 'Thanks for voting!',
    cta: 'Read more from:',
    ctaLink: '#MOVEMBER',
    ctaUrl: 'http://www.thesun.co.uk',
  },
};

function shallowRender(props?: any) {
  return shallow(<PollContainer id={'card'} config={config} content={content} {...props} />);
}

describe('<PollContainer />', () => {
  it('renders correctly when errored', () => {
    const wrapper = shallowRender();
    const error = wrapper.find(Error);
    expect(error.length).toEqual(1);
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

  it('startPoll hides <IntroScreen />, shows <CardScreen /> and tracks event', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as PollContainer;
    wrapper.setState({
      hasErrored: false,
    });
    instance.startPoll();
    expect(wrapper.state('showIntro')).toEqual(false);
    expect(wrapper.state('showCards')).toEqual(true);
    expect(wrapper.state('showVote')).toEqual(false);
    expect(wrapper.state('showResults')).toEqual(false);
    wrapper.update();
    const introScreen = wrapper.find(IntroScreen);
    expect(introScreen.length).toEqual(0);
    const cardScreen = wrapper.find(CardScreen);
    expect(cardScreen.length).toEqual(1);

    expect(podTracker.click).toHaveBeenCalledWith({
      description: 'Generic Animated Poll started',
      id: 'card',
    });
  });

  it('clickLeft function sets correct currentCardIndex index and tracks event', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as PollContainer;
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
      description: 'Generic Animated Poll click back',
      id: 'card',
    });
  });

  it('clickRight function sets correct currentCardIndex index, correct state and tracks event', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as PollContainer;
    wrapper.setState({
      hasErrored: false,
    });
    instance.clickRight();
    expect(wrapper.state('currentCardIndex')).toEqual(1);
    instance.clickRight();
    expect(wrapper.state('currentCardIndex')).toEqual(2);

    expect(podTracker.click).toHaveBeenCalledWith({
      description: 'Generic Animated Poll click forward',
      id: 'card',
    });
  });

  it('mergeVotes function adds correct vote count to player', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as PollContainer;
    const results = [
      {
        player: 'chevron',
        voteCount: 5,
        noVoteCount: 5,
      },
      {
        player: 'handlebar',
        voteCount: 10,
        noVoteCount: 0,
      },
      {
        player: 'pencil',
        voteCount: 0,
        noVoteCount: 10,
      },
    ];
    const result = instance.mergeVotes(results, content.cards);
    expect(result).toEqual([
      {
        id: 'chevron',
        iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Chevron.png',
        imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/handlebar.jpg',
        imageDesktop: '',
        title: 'The Chevron',
        copy: 'Looks a bit more Bruce Forsyth than Tom Selleck...',
        voteCount: { player: 'chevron', voteCount: 5, noVoteCount: 5 },
      },
      {
        id: 'handlebar',
        iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Handlebar.png',
        imageMobile: '',
        imageDesktop: '',
        title: 'The Handlebar',
        copy: 'Get a grip!',
        voteCount: { player: 'handlebar', voteCount: 10, noVoteCount: 0 },
      },
      {
        id: 'pencil',
        iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Pencil.png',
        imageMobile: '',
        imageDesktop: '',
        title: 'The Pencil',
        copy: 'Work it out with this',
        voteCount: { player: 'pencil', voteCount: 0, noVoteCount: 10 },
      },
    ]);
  });

  it('clickVote update the state, track an event, and send the vote data to the api', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as PollContainer;
    wrapper.setState({
      hasErrored: false,
      showIntro: false,
      showCards: false,
      showVote: true,
      showResults: false,
    });
    instance.clickVote(['fumanchu']);
    expect(wrapper.state('showIntro')).toEqual(false);
    expect(wrapper.state('showCards')).toEqual(false);
    expect(wrapper.state('showVote')).toEqual(false);
    expect(wrapper.state('showResults')).toEqual(true);
    wrapper.update();
    const voteScreen = wrapper.find(VoteScreen);
    expect(voteScreen.length).toEqual(0);
    const resultsScreen = wrapper.find(ResultsScreen);
    expect(resultsScreen.length).toEqual(1);

    expect(podTracker.click).toHaveBeenCalledWith({
      description: 'Generic Animated Poll click vote',
      id: 'card',
    });
  });
});

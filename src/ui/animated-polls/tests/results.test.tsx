import * as React from 'react';
import { shallow } from 'enzyme';

import { ResultsScreen, processData } from '../results';

const resultsScreen = {
  bkgndImgMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/handlebar.jpg',
  bkgndImgDesktop: '',
  title: 'The Results',
  introTxt: 'Here’s what everyone else thought, did you agree with the others?',
  ctaTxt: 'Thanks for voting!',
  cta: 'Read more from:',
  ctaLink: '#MOVEMBER',
  ctaUrl: 'http://www.thesun.co.uk',
};

const cards = [
  {
    id: 'chevron',
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Chevron.png',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/handlebar.jpg',
    imageDesktop: '',
    title: 'The Chevron',
    copy: 'Looks a bit more Bruce Forsyth than Tom Selleck...',
    voteCount: {
      player: 'The Chevron',
      voteCount: 2,
      noVoteCount: 5,
    },
  },
  {
    id: 'handlebar',
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Handlebar.png',
    imageMobile: '',
    imageDesktop: '',
    title: 'The Handlebar',
    copy: 'Get a grip!',
    voteCount: {
      player: 'The Handlebar',
      voteCount: 5,
      noVoteCount: 2,
    },
  },
  {
    id: 'horsehoe',
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Horseshoe.png',
    imageMobile: '',
    imageDesktop: '',
    title: 'The Horseshoe',
    copy: 'Hulk Hogan would be proud',
    voteCount: {
      player: 'The Horseshoe',
      voteCount: 3,
      noVoteCount: 4,
    },
  },
  {
    id: 'pencil',
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Pencil.png',
    imageMobile: '',
    imageDesktop: '',
    title: 'The Pencil',
    copy: 'Work it out with this',
    voteCount: {
      player: 'The Pencil',
      voteCount: 4,
      noVoteCount: 3,
    },
  },
];

const theme = {
  primary: '#000000',
  secondary: '#ffffff',
};

function shallowRender(props?: any) {
  return shallow(<ResultsScreen {...resultsScreen} options={cards} theme={theme} {...props} />);
}

describe('<ResultsScreen />', () => {
  describe('UI', () => {
    it('renders correctly', () => {
      const wrapper = shallowRender();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('processData', () => {
    it('returns array of vote results', () => {
      const data = processData([
        {
          id: 'chevron',
          iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Chevron.png',
          imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/handlebar.jpg',
          imageDesktop: '',
          title: 'The Chevron',
          copy: 'Looks a bit more Bruce Forsyth than Tom Selleck...',
          voteCount: {
            player: 'The Chevron',
            voteCount: 2,
            noVoteCount: 5,
          },
        },
      ]);
      expect(data).toEqual([
        {
          player: 'The Chevron',
          voteCount: 2,
          noVoteCount: 5,
          votePercentage: 100,
          iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Chevron.png',
        },
      ]);
    });

    it('returns zero votePercentage if no votes cast', () => {
      const data = processData([
        {
          id: 'chevron',
          iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Chevron.png',
          imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/handlebar.jpg',
          imageDesktop: '',
          title: 'The Chevron',
          copy: 'Looks a bit more Bruce Forsyth than Tom Selleck...',
          voteCount: {
            player: 'The Chevron',
            voteCount: 0,
            noVoteCount: 0,
          },
        },
      ]);
      expect(data).toEqual([
        {
          player: 'The Chevron',
          voteCount: 0,
          noVoteCount: 0,
          votePercentage: 0,
          iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Chevron.png',
        },
      ]);
    });
  });
});

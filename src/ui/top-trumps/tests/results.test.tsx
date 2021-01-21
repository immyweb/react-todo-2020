import * as React from 'react';
import { shallow } from 'enzyme';

import { Results, processData } from '../results';
import { TTResultsButtonLink } from '../styles';

const theme = {
  primary: '#ffffff',
  secondary: '#000000',
};

const cards = [
  {
    id: 'wilder',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/wilder-mob@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/WILDER@2x.jpg',
    imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-wilder@2x.jpg',
    fName: 'Deontay',
    sName: 'Wilder',
    voteCount: {
      player: 'Deontay Wilder',
      voteCount: 2,
      noVoteCount: 5,
    },
  },
  {
    id: 'whyte',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/whyte-mob@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/WHYTE@2x.jpg',
    imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-whyte@2x.jpg',
    fName: 'Dillian',
    sName: 'Whyte',
    voteCount: {
      player: 'Dillian Whyte',
      voteCount: 5,
      noVoteCount: 2,
    },
  },
  {
    id: 'fury',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/fury-mob@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/FURY@2x.jpg',
    imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-fury@2x.jpg',
    fName: 'Tyson',
    sName: 'Fury',
    voteCount: {
      player: 'Tyson Fury',
      voteCount: 3,
      noVoteCount: 4,
    },
  },
];

function shallowRender(props?: any) {
  return shallow(
    <Results
      className={'youCantBuy'}
      theme={theme}
      cards={cards}
      headline={'The Results'}
      subHeadline={'Who should Jamie fight next?'}
      linkText={'Boxing news'}
      linkUrl={'http://wwww.thesun.co.uk'}
      imageMobile={'https://www.thesun.co.uk/wp-content/uploads/2018/08/fury-mob@2x.jpg'}
      imageDesktop={'https://www.thesun.co.uk/wp-content/uploads/2018/08/FURY@2x.jpg'}
      linkClick={() => {}}
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

    it('clicking on button calls linkClick', () => {
      const fn = jest.fn();
      const wrapper = shallowRender({ linkClick: fn });
      const btn = wrapper.find(TTResultsButtonLink);
      btn.simulate('click');
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe('processData', () => {
    it('returns array of vote results', () => {
      const data = processData([
        {
          id: 'wilder',
          imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/wilder-mob@2x.jpg',
          imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/WILDER@2x.jpg',
          imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-wilder@2x.jpg',
          fName: 'Deontay',
          sName: 'Wilder',
          voteCount: {
            player: 'Deontay Wilder',
            voteCount: 2,
            noVoteCount: 5,
          },
        },
      ]);
      expect(data).toEqual([
        {
          player: 'Deontay Wilder',
          voteCount: 2,
          noVoteCount: 5,
          votePercentage: 100,
          imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-wilder@2x.jpg',
        },
      ]);
    });

    it('returns zero votePercentage if no votes cast', () => {
      const data = processData([
        {
          id: 'wilder',
          imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/wilder-mob@2x.jpg',
          imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/WILDER@2x.jpg',
          imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-wilder@2x.jpg',
          fName: 'Deontay',
          sName: 'Wilder',
          voteCount: {
            player: 'Deontay Wilder',
            voteCount: 0,
            noVoteCount: 0,
          },
        },
      ]);
      expect(data).toEqual([
        {
          player: 'Deontay Wilder',
          voteCount: 0,
          noVoteCount: 0,
          votePercentage: 0,
          imageThumb: 'https://www.thesun.co.uk/wp-content/uploads/2018/08/thumbnail-wilder@2x.jpg',
        },
      ]);
    });
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import { Vote } from '../vote';
import { TTVoteButton } from '../styles';

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
    <Vote
      className={'youCantBuy'}
      theme={theme}
      cards={cards}
      headline={'Its time to decide'}
      subHeadline={'Would should Jamie fight next?'}
      bottomCopy={'Cast your vote now'}
      imageMobile={'https://www.thesun.co.uk/wp-content/uploads/2018/08/fury-mob@2x.jpg'}
      imageDesktop={'https://www.thesun.co.uk/wp-content/uploads/2018/08/FURY@2x.jpg'}
      clickVote={() => {}}
      {...props}
    />,
  );
}

describe('<Vote />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct number of vote buttons', () => {
    const wrapper = shallowRender();
    const items = wrapper.find(TTVoteButton);
    expect(items.length).toEqual(cards.length);
  });

  it('calls clickVote with correct id when user votes', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ clickVote: fn });
    const btn = wrapper.find(TTVoteButton).first();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn.mock.calls[0][0][0]).toBe('wilder');
    const btn2 = wrapper.find(TTVoteButton).last();
    btn2.simulate('click');
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn.mock.calls[1][0][0]).toBe('fury');
  });
});

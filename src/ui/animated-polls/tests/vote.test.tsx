import * as React from 'react';
import { shallow } from 'enzyme';

import { VoteScreen } from '../vote';

const voteScreen = {
  bkgndImgMobile: 'handlebar-mobile.jpg',
  bkgndImgDesktop: 'desktop.jpg',
  title: 'Have your say',
  introTxt: 'Which do you think looked best? Vote on your favourite moustache',
  ctaTxt: 'Tell us what you think',
  cta: 'Read more from:',
  ctaLink: '#MOVEMBER',
  ctaUrl: 'http://www.thesun.co.uk',
};

const options = [
  {
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Chevron.png',
    optionTxt: 'The Chevron',
  },
  {
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Handlebar.png',
    optionTxt: 'The Handlebar',
  },
  {
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Horseshoe.png',
    optionTxt: 'The Horseshoe',
  },
  {
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Pencil.png',
    optionTxt: 'The Pencil',
  },
  {
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Walrus.png',
    optionTxt: 'The Walrus',
  },
  {
    iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/FuManchu.png',
    optionTxt: 'The Fu Manchu',
  },
];

const theme = {
  primary: '#000000',
  secondary: '#ffffff',
};

function shallowRender(props?: any) {
  return shallow(<VoteScreen {...voteScreen} options={options} theme={theme} {...props} />);
}

describe('<VoteScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });
});

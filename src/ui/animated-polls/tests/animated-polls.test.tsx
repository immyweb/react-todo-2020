import * as React from 'react';
import { shallow } from 'enzyme';

import AnimatedPolls from '../';
import { TeaserScreen } from '../teaser';

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
      id: 'horsehoe',
      iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Horseshoe.png',
      imageMobile: '',
      imageDesktop: '',
      title: 'The Horseshoe',
      copy: 'Hulk Hogan would be proud',
    },
    {
      id: 'pencil',
      iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Pencil.png',
      imageMobile: '',
      imageDesktop: '',
      title: 'The Pencil',
      copy: 'Work it out with this',
    },
    {
      id: 'walrus',
      iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/Walrus.png',
      imageMobile: '',
      imageDesktop: '',
      title: 'The Walrus',
      copy: 'Our test results can reveal, you are not the walrus',
    },
    {
      id: 'fumanchu',
      iconImg: 'https://www.thesun.co.uk/wp-content/uploads/2018/10/FuManchu.png',
      imageMobile: '',
      imageDesktop: '',
      title: 'The Fu Manchu',
      copy: 'Do you Fu Manchoose this one?',
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
  return shallow(<AnimatedPolls config={config} content={content} {...props} />);
}

describe('<AnimatedPolls />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Teaser screen on load', () => {
    const wrapper = shallowRender();
    const teaser = wrapper.find(TeaserScreen);
    expect(teaser.length).toEqual(1);
  });
});

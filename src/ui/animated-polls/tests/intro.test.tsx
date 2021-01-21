import * as React from 'react';
import { shallow } from 'enzyme';

import { IntroScreen } from '../intro';

const introScreen = {
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
};

function shallowRender(props?: any) {
  return shallow(<IntroScreen {...introScreen} {...props} />);
}

describe('<IntroScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });
});

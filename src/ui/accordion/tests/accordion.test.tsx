import * as React from 'react';
import { shallow } from 'enzyme';
import Accordion from '../';
import { Border } from '../styles';
import AccordionItem from '../accordion-item';
import { ComponentHeader } from '../../component-header';
import { colours } from '../../../styles/colours';

const config = {
  timeline: false,
  theme: {
    primary: colours.$fabulous,
    secondary: colours.$fabulousSecondary,
  },
};

const content = {
  headline: `How Harry and Meghan's romance blossomed`,
  items: [
    {
      title: 'A match made in heaven',
      badge:
        'http://www.messagescollection.com/wp-content/uploads/2015/04/cute-cat-profile-for-facebook.jpg',
      subTitle: 'Lorem Ipsum',
      imageTop: '',
      imageBottom: '',
      expanded: false,
      copy:
        'It is not known exactly when Prince Harry first met the Suits actress but he travelled to Toronto, where Meghan Markle lives to launch the countdown to the Invictus Games. The pair are then believed to have been introduced through friends in London in July last year and started seeing each other.',
    },
    {
      title: 'Harry makes a detour to see Meghan',
      badge: 'Lorem Ipsum',
      subTitle: '',
      imageTop: '',
      imageBottom:
        'https://i1.wp.com/www.thesun.co.uk/wp-content/uploads/2017/12/nintchdbpict000369470973.jpg?zoom=2&crop=0px%2C0px%2C2342px%2C1562px&resize=300%2C192&ssl=1',
      expanded: true,
      copy:
        'Harry flew straight from his Caribbean tour to Toronto to be with Ms Markle, making a 1,700-mile (2,736 km) detour instead of flying to London.',
    },
  ],
};

function shallowRender(props?: any) {
  return shallow(<Accordion config={config} content={content} {...props} />);
}

describe('<Accordion />', () => {
  it('renders correct number of items', () => {
    const wrapper = shallowRender();
    expect(wrapper.find(AccordionItem)).toHaveLength(2);
  });

  it('renders the correct headline if supplied', () => {
    const wrapper = shallowRender();
    const headline = wrapper.find(ComponentHeader);
    expect(headline.props().title).toContain(`How Harry and Meghan's romance blossomed`);
  });

  it('renders timeline mode', () => {
    const newConfig = {
      ...config,
      timeline: true,
    };
    const wrapper = shallowRender({ config: newConfig });
    expect(wrapper.find(Border)).toHaveLength(1);
  });
});

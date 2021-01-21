import * as React from 'react';
import { shallow } from 'enzyme';
import InteractiveImage from '../';
import { ComponentHeader } from '../../component-header';

import { Image } from '../styles';
import { ArrowPosition } from '../../label/label';

const data = {
  config: {
    headlineTheme: {
      primary: '#4085cb',
      secondary: '#2d5c8c',
    },
    labelTheme: {
      txtColour: '#ffffff',
      bkgndColour: '#000000',
      pulseColour: '#eeeeee',
    },
  },
  content: {
    headline: 'Body parts',
    image:
      'https://www.thesun.co.uk/wp-content/uploads/2018/04/nintchdbpict000399253435.jpg?strip=all&w=513',
    labels: [
      {
        label: {
          text: 'ARMS',
          arrowSide: ArrowPosition.BOTTOM,
          arrowPosition: ArrowPosition.LEFT,
          mobilePosition: {
            top: '30%',
            left: '65%',
          },
          desktopPosition: {
            top: '30%',
            left: '65%',
          },
        },
        modal: {
          title: 'Long arms are a turn on',
          imageTop:
            'https://www.thesun.co.uk/wp-content/uploads/2018/04/gettyimages-104790256.jpg?strip=all&w=960',
          copy: [
            'Longer arms make you more attractive, according to the University of New South Wales. Long dimensions in the arms can send a subtle signal that you’re a suitable mate.',
          ],
        },
      },
      {
        label: {
          text: 'BOOBS',
          arrowSide: ArrowPosition.BOTTOM,
          arrowPosition: ArrowPosition.RIGHT,
          mobilePosition: {
            top: '23%',
            left: '23%',
          },
          desktopPosition: {
            top: '30%',
            left: '65%',
          },
        },
        modal: {
          title: 'Bigger boobs mean bigger IQs',
          imageBottom:
            'https://www.thesun.co.uk/wp-content/uploads/2018/04/gettyimages-104790256.jpg?strip=all&w=960',
          copy: [
            'Ladies with larger breasts scored an average of 10 points higher on an IQ test as part of a University of Chicago study. This may be because the hormones which make boobs grow play a role in intelligence.',
          ],
        },
      },
    ],
  },
};

function shallowRender(props?: any) {
  const { config, content } = data;
  return shallow(<InteractiveImage config={config} content={content} {...props} />);
}

describe('<InteractiveImage />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the provided image', () => {
    const wrapper = shallowRender();
    expect(wrapper.find(Image).props().src).toEqual(
      'https://www.thesun.co.uk/wp-content/uploads/2018/04/nintchdbpict000399253435.jpg?strip=all&w=513',
    );
    expect(wrapper.find(Image).props().alt).toEqual('Body parts');
  });

  it('renders correct headline and theme', () => {
    const wrapper = shallowRender();
    const header = wrapper.find(ComponentHeader);
    expect(header.props().title).toEqual('Body parts');
    expect(header.props().theme).toEqual({
      primary: '#4085cb',
      secondary: '#2d5c8c',
    });
  });

  it('renders correct DOM element and ID', () => {
    const wrapper = shallowRender();
    const dom = wrapper.find('#interactiveImageModal');
    expect(dom.length).toEqual(1);
  });
});

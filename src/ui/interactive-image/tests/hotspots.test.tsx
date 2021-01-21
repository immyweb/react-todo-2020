import * as React from 'react';
import { shallow } from 'enzyme';

import { HotspotItems } from '../hotspots';
import { HotspotItem } from '../hotspot';
import { ArrowPosition } from '../../label/label';

const labels = [
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
];

const ModalContentRef = () => {
  return <div />;
};

function shallowRender(props?: any) {
  return shallow(
    <HotspotItems
      hotspots={labels}
      pulseColour={'#000000'}
      hotSpotTxtColour={'#ffffff'}
      hotSpotBkgndColour={'#000000'}
      modalRef={ModalContentRef}
      id={'hotspot'}
      {...props}
    />,
  );
}

describe('<HotspotItems />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct number of hotspot items', () => {
    const wrapper = shallowRender();
    expect(wrapper.find(HotspotItem).length).toEqual(2);
  });
});

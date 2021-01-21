import * as React from 'react';
import { shallow } from 'enzyme';

import { HotspotItem } from '../hotspot';
import Label, { ArrowPosition } from '../../label/label';
import { onOpenModal } from '../../modal/util';

jest.mock('../../modal/util', () => ({
  onOpenModal: jest.fn(),
}));

const hotspot = {
  label: {
    text: 'ARMS',
    arrowSide: ArrowPosition.BOTTOM,
    arrowPosition: ArrowPosition.LEFT,
    position: {
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
};

const ModalContentRef = () => {
  return <div />;
};

function shallowRender(props?: any) {
  return shallow(
    <HotspotItem
      hotspot={hotspot}
      id={'hotspot'}
      pulseColour={'#000000'}
      hotSpotTxtColour={'#ffffff'}
      hotSpotBkgndColour={'#000000'}
      modalRef={ModalContentRef}
      {...props}
    />,
  );
}

describe('<HotspotItem />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders hotspot in correct position', () => {
    const wrapper = shallowRender();
    expect(wrapper.props().top).toEqual('30%');
    expect(wrapper.props().left).toEqual('65%');
  });

  it('renders correct hotspot colours', () => {
    const wrapper = shallowRender();
    const label = wrapper.find(Label);
    expect(label.props().bkgColour).toEqual('#000000');
    expect(label.props().txtColour).toEqual('#ffffff');
  });

  it('calls onOpenModal when user clicks on label', () => {
    const wrapper = shallowRender();
    const label = wrapper.find(Label);
    label.simulate('click');
    expect(onOpenModal).toHaveBeenCalledWith(
      hotspot.modal,
      'interactiveImageModal',
      ModalContentRef,
      'hotspot',
    );
  });
});

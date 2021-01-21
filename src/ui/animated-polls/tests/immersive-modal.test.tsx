import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { ImmersiveModal } from '../immersive-modal';
import { BtnClose } from '../styles';

const WrapperComponent = () => {
  return <div className="modal-content">{'Dummy content'}</div>;
};

function shallowRender(props?: any) {
  return shallow(
    <ImmersiveModal content={<WrapperComponent />} onCloseModal={() => {}} {...props} />,
  );
}

function mountRender(props?: any) {
  return mount(
    <ImmersiveModal content={<WrapperComponent />} onCloseModal={() => {}} {...props} />,
  );
}

describe('<ImmersiveModal />', () => {
  it('should display modal if prop set to active', () => {
    const wrapper = shallowRender({ active: true });
    expect(wrapper.state('showModal')).toEqual(true);
  });

  it('should not display modal if prop is not set to active', () => {
    const wrapper = shallowRender();
    expect(wrapper.state('showModal')).toEqual(false);
  });

  it('should call onCloseModal when user clicks close button', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onCloseModal: fn });
    const btn = wrapper.find(BtnClose);
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('triggers unmount', () => {
    const wrapper = mountRender();
    const componentWillUnmount = jest.spyOn(
      wrapper.instance() as ImmersiveModal,
      'componentWillUnmount',
    );

    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });
});

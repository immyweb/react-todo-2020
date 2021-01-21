import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Modal } from './modal';
import { BtnOpen, BtnClose } from './styles';

const ModalContent = () => {
  return (
    <div className="modal-content">
      <h2>SNOW IN THE DESERT</h2>
      <h3>Explain why the person is in this spot as it is obviously words placed distion.</h3>
      <img src="http://via.placeholder.com/580x312" alt="" />
      <p>
        Kirk Pasich, a lawyer for the family, said: “Without the results of toxicology tests, we do
        not know what was going on with Chris—or if any to his demise.
      </p>
      <p>
        “The family believes that if Chris took his life, he did not know what he was doing, and
        that drugs or other was doing, that drugs or other substances may have affected his
        actions.”
      </p>
      <p>
        “Without the results of toxicology tests, we do not know what was going on with Chris—or if
        any substances contributed to his demise.
      </p>
      <p>
        Kirk Pasich, a lawyer for the family, said: “Without the results of toxicology tests, we do
        not know what was going on with Chris—or if any to his demise.
      </p>
    </div>
  );
};

function shallowModal(Content: any, openTxt?: string) {
  return shallow(<Modal content={Content} openTxt={openTxt} standalone={true} />);
}

function mountModal(Content: any, openTxt?: string) {
  return mount(<Modal content={Content} openTxt={openTxt} standalone={true} />);
}

describe('<Modal />', () => {
  it('displays passed in content', () => {
    const wrapper = mountModal(<ModalContent />);
    const innerContent = wrapper.find(ModalContent);
    expect(innerContent.length).toBe(1);
  });

  it('clicking open button triggers modal to open', () => {
    const wrapper = mountModal(<ModalContent />);
    const openBtn = wrapper.find(BtnOpen);
    expect(wrapper.state('showModal')).toBe(false);
    openBtn.simulate('click');
    expect(wrapper.state('showModal')).toBe(true);
  });

  it('clicking on close button closes modal', () => {
    const wrapper = mountModal(<ModalContent />);
    const openBtn = wrapper.find(BtnOpen);
    openBtn.simulate('click');
    expect(wrapper.state('showModal')).toBe(true);
    const closeBtn = wrapper.find(BtnClose);
    closeBtn.simulate('click');
    expect(wrapper.state('showModal')).toBe(false);
  });

  it('if no button text is provided, it should display default text', () => {
    const wrapper = shallowModal(<ModalContent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('if button text is provided, it should display the provided text', () => {
    const wrapper = shallowModal(<ModalContent />, 'Click me');
    expect(wrapper).toMatchSnapshot();
  });

  it('toogle function is called when open button is clicked', () => {
    const wrapper = mountModal(<ModalContent />);
    const toggleFn = jest.spyOn(wrapper.instance() as Modal, 'toggle');

    const openBtn = wrapper.find(BtnOpen);
    openBtn.simulate('click');
    expect(toggleFn).toHaveBeenCalledTimes(1);
  });

  it('toogle function is called when close button is clicked', () => {
    const wrapper = mountModal(<ModalContent />);
    const toggleFn = jest.spyOn(wrapper.instance() as Modal, 'toggle');

    const closeBtn = wrapper.find(BtnClose);
    closeBtn.simulate('click');
    expect(toggleFn).toHaveBeenCalledTimes(1);
  });
});

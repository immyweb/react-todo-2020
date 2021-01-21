import * as React from 'react';
import { shallow } from 'enzyme';

import { ProgressBar } from '../progress-bar';
import { TTProgressBarCircle, TTProgressBarArrow, TTProgressBarArrowContainer } from '../styles';

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
    <ProgressBar
      className={'youCantBuy'}
      cards={cards}
      theme={theme}
      currentCardIndex={0}
      onClickRight={() => {}}
      onClickLeft={() => {}}
      {...props}
    />,
  );
}

describe('<ProgressBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct number of items', () => {
    const wrapper = shallowRender();
    const items = wrapper.find(TTProgressBarCircle);
    expect(items.length).toEqual(cards.length);
  });

  it('disables previous arrow if on first slide', () => {
    const wrapper = shallowRender({ currentCardIndex: 0 });
    const prevArrow = wrapper.find(TTProgressBarArrow).first();
    expect(prevArrow.props().disabled).toEqual(true);
  });

  it('previous arrow is enabled if not on first slide', () => {
    const wrapper = shallowRender({ currentCardIndex: 1 });
    const prevArrow = wrapper.find(TTProgressBarArrow).first();
    expect(prevArrow.props().disabled).toEqual(false);
  });

  it('calls onClickLeft when left arrow is clicked and not disabled', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onClickLeft: fn, currentCardIndex: 1 });
    const btn = wrapper.find(TTProgressBarArrowContainer).first();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('does not call onClickLeft when left arrow is clicked and is disabled', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onClickLeft: fn, currentCardIndex: 0 });
    const btn = wrapper.find(TTProgressBarArrowContainer).first();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('calls onClickRight when right arrow is clicked', () => {
    const fn = jest.fn();
    const wrapper = shallowRender({ onClickRight: fn });
    const btn = wrapper.find(TTProgressBarArrowContainer).last();
    btn.simulate('click');
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

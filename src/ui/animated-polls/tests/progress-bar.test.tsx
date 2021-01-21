import * as React from 'react';
import { shallow } from 'enzyme';

import { ProgressBar } from '../progress-bar';
import { APProgressBarItem } from '../styles';

const options = [
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
];

function shallowRender(props?: any) {
  return shallow(<ProgressBar options={options} currentCardIndex={0} {...props} />);
}

describe('<ProgressBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct number of items', () => {
    const wrapper = shallowRender();
    const items = wrapper.find(APProgressBarItem);
    expect(items.length).toEqual(options.length);
  });

  it('highlights correct item', () => {
    const wrapper = shallowRender();
    const item = wrapper.find(APProgressBarItem).first();
    expect(item.props().viewed).toEqual(true);
    const wrapper2 = shallowRender({ currentCardIndex: 5 });
    const item2 = wrapper2.find(APProgressBarItem).last();
    expect(item2.props().viewed).toEqual(true);
  });
});

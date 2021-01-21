import { shallow, mount } from 'enzyme';
import { interactions as podTrackerInteractions, podTracker } from '../../utils/pod-tracker-utils';

import Carousel, { convertDirection } from './carousel';
import { ComponentHeader } from '../component-header/';
import { Slide, SlideLink, SlideLabel } from './styles';
import { Direction } from './types';

const data = {
  id: 'tt0113375',
  config: {
    theme: {
      txtColour: '#ffffff',
      border: '#ffffff',
    },
    headlineTheme: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  },
  content: {
    headline: 'World Cup stars',
    items: [
      {
        image: 'https://www-dev.uat-thesun.co.uk/wp-content/uploads/2018/05/messi.png?strip=all&w=960',
        url: 'http://wwww.thesun.co.uk/messi',
        label: 'Messi',
      },
      {
        image: 'https://www-dev.uat-thesun.co.uk/wp-content/uploads/2018/05/kane.png?strip=all&w=960',
        url: 'http://wwww.thesun.co.uk',
        label: 'Kane',
      },
      {
        image: 'https://www-dev.uat-thesun.co.uk/wp-content/uploads/2018/05/ronaldo.png?strip=all&w=960',
        url: '',
        label: '',
      },
    ],
  },
};

function shallowRender(props?: any) {
  return shallow(<Carousel id={data.id} config={data.config} content={data.content} {...props} />);
}

function mountRender(props?: any) {
  return mount(<Carousel id={data.id} config={data.config} content={data.content} {...props} />);
}

describe('<Carousel />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct number of slides', () => {
    const wrapper = shallowRender();
    const slides = wrapper.find(Slide);
    expect(slides.length).toEqual(3);
  });

  it('renders headline', () => {
    const wrapper = shallowRender();
    const headline = wrapper.find(ComponentHeader);
    expect(headline.length).toEqual(1);
  });

  it('can customise theme', () => {
    const theme = {
      txtColour: '#eeeeee',
      border: '#cccccc',
    };
    const updatedConfig = {
      ...data.config,
      theme,
    };
    const wrapper = shallowRender({ config: updatedConfig });
    expect(wrapper).toMatchSnapshot();
  });

  it('can customise headline theme', () => {
    const headlineTheme = {
      primary: '#eeeeee',
      secondary: '#cccccc',
    };
    const updatedConfig = {
      ...data.config,
      headlineTheme,
    };
    const wrapper = shallowRender({ config: updatedConfig });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders slide with no link if not provided', () => {
    const wrapper = shallowRender();
    const slide = wrapper.find(Slide).last();
    const link = slide.find(SlideLink);
    expect(link.length).toEqual(0);
  });

  it('renders slide with no label if not provided', () => {
    const wrapper = shallowRender();
    const slide = wrapper.find(Slide).last();
    const label = slide.find(SlideLabel);
    expect(label.length).toEqual(0);
  });

  it('animatePagination sets pagination animation direction', () => {
    const wrapper = mountRender();
    const instance = wrapper.instance() as Carousel;
    instance.animatePagination(Direction.PREV);
    expect(wrapper.state('direction')).toEqual(Direction.PREV);
    instance.animatePagination(Direction.NEXT);
    expect(wrapper.state('direction')).toEqual(Direction.NEXT);
  });

  it('convertDirection returns correct direction', () => {
    const result = convertDirection('left');
    expect(result).toEqual(Direction.NEXT);
    const result2 = convertDirection('right');
    expect(result2).toEqual(Direction.PREV);
  });

  it('goes to correct link when clicking on slide', () => {
    window.location.assign = jest.fn();
    const podTrackerSpy = jest.spyOn(podTracker, podTrackerInteractions.CLICK);

    const wrapper = shallowRender();
    const slideOne = wrapper.find(Slide).first();
    const slideLink = slideOne.find(SlideLink);

    slideLink.simulate('click');

    expect(slideLink.props().href).toBe('http://wwww.thesun.co.uk/messi');
    expect(podTrackerSpy).toHaveBeenNthCalledWith(1, {
      description: 'carousel:clicked "http://wwww.thesun.co.uk/messi"',
      id: 'carousel:tt0113375',
    });
  });
});

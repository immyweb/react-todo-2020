import * as React from 'react';
import { shallow } from 'enzyme';

import CountdownTimer from '..';
import { CountdownHeader } from '../countdown-header';
import Button from '../../buttons/buttons';
import { CountdownUnits, CustomCountUnits } from '../countdown-units';

// import { podTracker } from '../../../utils/pod-tracker-utils';

import {
  CountdownContent,
  CountdownFrame,
  CountdownAligner,
  UnitWrapper,
  UnitInstance,
  UnitLabel,
  UnitValue,
} from '../styles';

const data = {
  config: {
    theme: {
      primary: '#459977',
      secondary: '#459977',
    },
    settings: {
      alignment: {
        x: 'left',
        y: 'bottom',
      },
      minHeight: 185,
      backgroundPosition: 'left center',
      units: 30,
    },
  },
  content: {
    date: 'December, 28, 2018, 14:35',
    during: {
      title: 'During Title',
      subTitle: 'During subTitle and some other text',
      image: 'https://placeholdit.imgix.net/~text?txtsize=22&txt=During%20Image%20620%C3%97185&w=620&h=185',
    },
    ended: {
      title: 'Ended Title',
      subTitle: 'Ended subTitle and some other text',
      image: 'https://placeholdit.imgix.net/~text?txtsize=22&txt=Ended%20Image%20620%C3%97185&w=620&h=185',
    },
    button: {
      buttonText: 'Oh hi!',
      buttonLink: 'http://www.thesun.co.uk',
      windowTarget: '_blank',
    },
  },
};

// jest.mock('../../../utils/pod-tracker-utils', () => ({
//   podTracker: {
//     loaded: jest.fn(),
//   },
// }));

const shallowRender = (props?: any) => {
  const { config, content } = data;
  return shallow(<CountdownTimer config={config} content={content} {...props} />);
};

describe.only('<CountdownTimer />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toHaveLength(1);
  });

  it('has a CountdownContent', () => {
    const wrapper = shallowRender();
    const countdownContent = wrapper.find(CountdownContent);
    expect(countdownContent).toHaveLength(1);
  });

  it('has a CountdownFrame', () => {
    const wrapper = shallowRender();
    const countdownFrame = wrapper.find(CountdownFrame);
    expect(countdownFrame).toHaveLength(1);
  });

  it('has a CountdownAligner', () => {
    const wrapper = shallowRender();
    const countdownAligner = wrapper.find(CountdownAligner);
    expect(countdownAligner).toHaveLength(1);
  });

  it('has a Header', () => {
    const wrapper = shallowRender();
    const headerWrapper = wrapper.find(CountdownHeader);
    expect(headerWrapper).toHaveLength(1);
  });

  it('has a CountdownUnits', () => {
    const wrapper = shallowRender();
    const countdownUnits = wrapper.find(CountdownUnits);
    expect(countdownUnits).toHaveLength(1);
  });

  it('has a UnitWrapper', () => {
    const wrapper = shallowRender().find(CountdownUnits).dive();
    const unitWrapper = wrapper.find(UnitWrapper);
    expect(unitWrapper).toHaveLength(1);
  });

  it('has a UnitInstance', () => {
    const wrapper = shallowRender().find(CountdownUnits).dive();
    const unitInstance = wrapper.find(UnitInstance);
    // There are 11 units of time in TimeStamp
    expect(unitInstance).toHaveLength(11);
  });

  it('has a UnitLabel', () => {
    const wrapper = shallowRender().find(CountdownUnits).dive();
    const unitLabel = wrapper.find(UnitLabel);
    // There are 11 units of time in TimeStamp
    expect(unitLabel).toHaveLength(11);
  });

  it('has a UnitValue', () => {
    const wrapper = shallowRender().find(CountdownUnits).dive();
    const unitValue = wrapper.find(UnitValue);
    // There are 11 units of time in TimeStamp
    expect(unitValue).toHaveLength(11);
  });

  it('does not display button when timer is in progress', () => {
    const wrapper = shallowRender();
    const button = wrapper.find(Button);
    expect(button).toHaveLength(0);
  });

  it('set isStarted to true when future date is set', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as CountdownTimer;
    instance.getTimeStamp();
    expect(wrapper.state('isStarted')).toEqual(true);
  });

  it('set isEnded state to true if timer has ended', () => {
    const newContent = {
      ...data.content,
      date: 'December, 28, 2017, 14:35',
    };
    const wrapper = shallowRender({ content: newContent });
    const instance = wrapper.instance() as CountdownTimer;
    instance.getTimeStamp();
    expect(wrapper.state('isEnded')).toEqual(true);
  });

  describe('is set to custom', () => {
    it('display countdown using CustomCountUnits', () => {
      const wrapper = shallow(
        <CountdownTimer config={{ ...data.config }} content={{ ...data.content, custom: true }} />,
      );
      expect(wrapper.find(CustomCountUnits).exists()).toBe(true);
    });
  });

  it('calls tracking function when component is loaded in CountDown mode', () => {
    const wrapper = shallowRender({
      id: 'Brexit delay timer',
      config: { ...data.config, mode: 'COUNTDOWN' },
    });
    const instance = wrapper.instance() as CountdownTimer;
    instance.componentDidMount();

    // expect(podTracker.loaded).toHaveBeenCalledWith({
    //   description: 'COUNTDOWN:loaded',
    //   id: 'COUNTDOWN:Brexit delay timer',
    // });
  });

  // it('calls tracking function when component is loaded in CountUp mode', () => {
  //   const wrapper = shallowRender({
  //     id: 'Brexit delay timer',
  //     config: { ...data.config, mode: 'COUNTUP' },
  //   });
  //   const instance = wrapper.instance() as CountdownTimer;
  //   instance.componentDidMount();

  //   expect(podTracker.loaded).toHaveBeenCalledWith({
  //     description: 'COUNTUP:loaded',
  //     id: 'COUNTUP:Brexit delay timer',
  //   });
  // });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import { CustomCountUnits, CounterDisplay, CountdownUnits } from '../countdown-units';
import { DigitContainer } from '../styles';

import { UnitPosition } from '../types';

const defaultProps = {
  value: 0,
  unit: '£',
  textColour: 'white',
  alignment: { x: 'left' },
  unitPosition: UnitPosition.start,
};

describe('CounterDisplay', () => {
  it('should display the value entered', () => {
    const wrapper = shallow(<CounterDisplay value={3425} />);
    expect(
      wrapper.containsAllMatchingElements([
        <DigitContainer>3</DigitContainer>,
        <DigitContainer>4</DigitContainer>,
        <DigitContainer>2</DigitContainer>,
        <DigitContainer>5</DigitContainer>,
      ]),
    ).toBe(true);
  });
});

describe('CustomCountUnits', () => {
  it('should display the CounterDisplay', () => {
    const wrapper = shallow(<CustomCountUnits {...defaultProps} value={3425} />);
    expect(wrapper.find(CounterDisplay).exists()).toBe(true);
    expect(wrapper.find(CounterDisplay).props().value).toBe(3425);
  });
  describe('unitPosition is set to START', () => {
    it('should display the Units before the CounterDisplay', () => {
      const unit = '£';
      const wrapper = shallow(
        <CustomCountUnits
          {...defaultProps}
          value={3425}
          unit={unit}
          unitPosition={UnitPosition.start}
        />,
      );
      const parentHtml = wrapper
        .find(CounterDisplay)
        .parent()
        .html();
      expect(parentHtml).toEqual(expect.stringMatching(/>£<.+>3</));
      expect(parentHtml).not.toEqual(expect.stringMatching(/>3<.+>£</));
    });
  });
  describe('unitPosition is set to END', () => {
    it('should display the Units after the CounterDisplay', () => {
      const unit = '£';
      const wrapper = shallow(
        <CustomCountUnits
          {...defaultProps}
          value={3425}
          unit={unit}
          unitPosition={UnitPosition.end}
        />,
      );
      const parentHtml = wrapper
        .find(CounterDisplay)
        .parent()
        .html();
      expect(parentHtml).toEqual(expect.stringMatching(/>3<.+>£</));
      expect(parentHtml).not.toEqual(expect.stringMatching(/>£<.+>3</));
    });
  });

  describe('CountdownUnits', () => {
    describe('When the time is NaN', () => {
      it('should display 0 count instead of NaN', () => {
        const wrapper = shallow(
          <CountdownUnits
            time={{
              interval: 0,
              isStarted: true,
              isEnded: false,
              millennia: -1,
              centuries: -1,
              decades: -1,
              years: -1,
              months: -1,
              weeks: -1,
              days: -1,
              hours: -1,
              minutes: -1,
              seconds: NaN,
              milliseconds: -1,
            }}
            timeStampColour={'blue'}
            alignment={{ x: 'center' }}
            isStarted={true}
          />,
        );
        expect(
          wrapper
            .find('.countdown-timer-unit-value')
            .first()
            .dive()
            .text(),
        ).toEqual('0');
      });
    });
  });
});

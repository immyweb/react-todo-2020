import * as React from 'react';
import { shallow } from 'enzyme';
import { Chart } from './chart';
import { VictoryChart, VictoryAxis } from 'victory';

describe('<Chart />', () => {
  describe('only contains positive values of data', () => {
    const positiveData = {
      chartHeight: 50,
      chartWidth: 100,
      chartData: [
        {
          x: 'Lab',
          y: 9.5,
          colour: '#dc241f',
        },
        {
          x: 'Con',
          y: 5.9,
          colour: '#0087dc',
        },
        {
          x: 'Lib',
          y: 7,
          colour: '#fdbb30',
        },
      ],
    };
    it('has a range value of 0 to max', () => {
      const wrapper = shallow(<Chart {...positiveData} />);
      expect(wrapper.find(VictoryChart).props().domain).toEqual({ y: [0, 9.5] });
    });
    it('axis is transparent', () => {
      const wrapper = shallow(<Chart {...positiveData} />);
      expect(wrapper.find(VictoryAxis).props().style).toEqual({ axis: { stroke: 'transparent' } });
    });
    describe('also has a zero value', () => {
      const positiveAndZeroData = {
        chartHeight: 50,
        chartWidth: 100,
        chartData: [
          {
            x: 'Lab',
            y: 9.5,
            colour: '#dc241f',
          },
          {
            x: 'Con',
            y: 5.9,
            colour: '#0087dc',
          },
          {
            x: 'Lib',
            y: 0,
            colour: '#fdbb30',
          },
        ],
      };
      it('axis is transparent', () => {
        const wrapper = shallow(<Chart {...positiveAndZeroData} />);
        expect(wrapper.find(VictoryAxis).props().style).toEqual({
          axis: { stroke: 'transparent' },
        });
      });
    });
  });
  describe('only contains negative values of data', () => {
    const negativeData = {
      chartHeight: 50,
      chartWidth: 100,
      chartData: [
        {
          x: 'Lab',
          y: -9.5,
          colour: '#dc241f',
        },
        {
          x: 'Con',
          y: -5.9,
          colour: '#0087dc',
        },
        {
          x: 'Lib',
          y: -7,
          colour: '#fdbb30',
        },
      ],
    };
    it('has a range value of min to 0', () => {
      const wrapper = shallow(<Chart {...negativeData} />);
      expect(wrapper.find(VictoryChart).props().domain).toEqual({ y: [-9.5, 0] });
    });
    it('axis is transparent', () => {
      const wrapper = shallow(<Chart {...negativeData} />);
      expect(wrapper.find(VictoryAxis).props().style).toEqual({ axis: { stroke: 'transparent' } });
    });
    describe('also has a zero value', () => {
      const negativeAndZeroData = {
        chartHeight: 50,
        chartWidth: 100,
        chartData: [
          {
            x: 'Lab',
            y: -9.5,
            colour: '#dc241f',
          },
          {
            x: 'Con',
            y: -5.9,
            colour: '#0087dc',
          },
          {
            x: 'Lib',
            y: 0,
            colour: '#fdbb30',
          },
        ],
      };
      it('axis is transparent', () => {
        const wrapper = shallow(<Chart {...negativeAndZeroData} />);
        expect(wrapper.find(VictoryAxis).props().style).toEqual({
          axis: { stroke: 'transparent' },
        });
      });
    });
  });
  describe('contains mixed sign data', () => {
    const negativeData = {
      chartHeight: 50,
      chartWidth: 100,
      chartData: [
        {
          x: 'Lab',
          y: -9.5,
          colour: '#dc241f',
        },
        {
          x: 'Con',
          y: -5.9,
          colour: '#0087dc',
        },
        {
          x: 'Lib',
          y: 7,
          colour: '#fdbb30',
        },
      ],
    };
    it('has a range value of min to max', () => {
      const wrapper = shallow(<Chart {...negativeData} />);
      expect(wrapper.find(VictoryChart).props().domain).toEqual({ y: [-9.5, 7] });
    });
    it('axis is not transparent', () => {
      const wrapper = shallow(<Chart {...negativeData} />);
      expect(wrapper.find(VictoryAxis).props().style).toEqual({ axis: { stroke: '#adafb0' } });
    });
  });
});

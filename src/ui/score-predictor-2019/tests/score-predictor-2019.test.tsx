import * as React from 'react';
import { shallow } from 'enzyme';

import ScorePredictor2019 from '../';
import Predictor from '../predictor';
import FinalTable from '../final-table';

const data = require('../mock-data.json');

function shallowRender(props?: any) {
  return shallow(<ScorePredictor2019 config={data.config} content={data.content} {...props} />);
}

describe('<ScorePredictor2019 />', () => {
  it('renders <Predictor /> on launch', () => {
    const wrapper = shallowRender();
    const predicator = wrapper.find(Predictor);
    expect(predicator.length).toBe(1);
    const finalTable = wrapper.find(FinalTable);
    expect(finalTable.length).toBe(0);
  });

  it('renders <FinalTable /> when completed state is true', () => {
    const wrapper = shallowRender();
    wrapper.setState({ completed: true });
    const predicator = wrapper.find(Predictor);
    expect(predicator.length).toBe(0);
    const finalTable = wrapper.find(FinalTable);
    expect(finalTable.length).toBe(1);
  });

  it('calling finalise will show final table', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as ScorePredictor2019;
    instance.onFinalise();
    wrapper.update();
    expect(wrapper.state('completed')).toBe(true);
    const finalTable = wrapper.find(FinalTable);
    expect(finalTable.length).toBe(1);
  });

  it('calling onConfirm will show final table', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as ScorePredictor2019;
    instance.onConfirm();
    wrapper.update();
    expect(wrapper.state('completed')).toBe(true);
    const finalTable = wrapper.find(FinalTable);
    expect(finalTable.length).toBe(1);
  });

  it('calling onLoaded will set loaded to true', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as ScorePredictor2019;
    instance.onLoaded();
    wrapper.update();
    expect(wrapper.state('loaded')).toBe(true);
  });
});

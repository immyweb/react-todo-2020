import { storiesOf } from '@storybook/react';
import { SunColSix } from '../../styles/grids';

import BarChart from './index';

const data = require('./bar-chart.json');

const stories = storiesOf('Barchart', module);

stories.add('Default', () => {
  const { config, content } = data;
  return (
    <SunColSix>
      <BarChart config={config} content={content} />
    </SunColSix>
  );
});

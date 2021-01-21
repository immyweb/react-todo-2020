import { storiesOf } from '@storybook/react';
import { SunColSix } from '../../styles/grids';

import StackedBar from './index';

const data = require('./stacked-bar.json');

const stories = storiesOf('Stacked Barchart', module);

stories.add('Default', () => {
  const { config, content } = data;
  return (
    <SunColSix>
      <StackedBar config={config} content={content} />
    </SunColSix>
  );
});

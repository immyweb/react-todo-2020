import { storiesOf } from '@storybook/react';

import Weather from './';

import { SunColSix } from '../../styles/grids';

const data = require('./mock-data.json');

const stories = storiesOf('Weather', module);

stories.add('Weather', () => {
  const { config, content } = data;
  return (
    <SunColSix>
      <Weather config={config} content={content} />
    </SunColSix>
  );
});

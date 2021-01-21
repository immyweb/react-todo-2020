import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { SunColSix } from '../../styles/grids';

import ScorePredictor from '.';

const data = require('./data.json');

const stories = storiesOf('Score Predictor 2019', module);

stories.add('default usage', () => {
  return (
    <SunColSix>
      <ScorePredictor {...data} />
    </SunColSix>
  );
});

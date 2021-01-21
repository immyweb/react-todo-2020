import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { SunColSix } from '../../styles/grids';

import { ScorePredictor } from './score-predictor';
import { TableType } from './types';

const premPredictor = require('./prem-predictor.json');

storiesOf('Score Predictor 2018', module).add('Premier League', () => (
  <SunColSix>
    <ScorePredictor
      teams={premPredictor.teams as any}
      fixtures={premPredictor.fixtures as any}
      introHeadline={'PREMIER LEAGUE PREDICTOR'}
      introTxt={
        'Predict Home Win, Draw or Away Win to see who will finish in those crucial European and Relegation places.'
      }
      tableType={TableType.Prem}
    />
  </SunColSix>
));

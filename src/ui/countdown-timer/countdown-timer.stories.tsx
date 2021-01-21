import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { SunColSix } from '../../styles/grids';
import CountdownTimer from './';
import { colours } from '../../styles/colours';

const stories = storiesOf('Countdown Timer', module);

const data = require('./mock-data.json');
const rwdata = require('./royal-wedding.json');
const wcdata = require('./world-cup.json');
const upData = require('./up-data.json');
const notTimeData = require('./not-time-data.json');

stories.add('default useage', () => {
  const { config, content } = data;
  return (
    <SunColSix>
      <CountdownTimer config={config} content={content} />
    </SunColSix>
  );
});

stories.add('custom theme', () => {
  const { config, content } = data;
  const theme = {
    primary: colours.$fabulous,
    secondary: colours.$showbiz,
  };
  const updatedConfig = {
    ...config,
    theme,
  };
  return (
    <SunColSix>
      <CountdownTimer config={updatedConfig} content={content} />
    </SunColSix>
  );
});

stories.add('Royal Wedding', () => {
  const { config, content } = rwdata;
  return (
    <SunColSix>
      <CountdownTimer config={config} content={content} />
    </SunColSix>
  );
});

stories.add('World Cup', () => {
  const { config, content } = wcdata;
  return (
    <SunColSix>
      <CountdownTimer config={config} content={content} />
    </SunColSix>
  );
});

stories.add('CountUp', () => {
  const { config, content } = upData;
  return (
    <SunColSix>
      <CountdownTimer config={config} content={content} />
    </SunColSix>
  );
});

stories.add('CountUp Currency', () => {
  const { config, content } = notTimeData;
  return (
    <SunColSix>
      <CountdownTimer config={config} content={content} />
    </SunColSix>
  );
});

stories.add('top right', () => {
  const { config, content } = data;
  const alignment = {
    x: 'right',
    y: 'top',
  };
  const settings = {
    ...config.settings,
    alignment,
  };
  const updatedConfig = {
    ...config,
    settings,
  };

  return (
    <SunColSix>
      <CountdownTimer config={updatedConfig} content={content} />
    </SunColSix>
  );
});

stories.add('center center', () => {
  const { config, content } = data;
  const alignment = {
    x: 'center',
    y: 'center',
  };
  const settings = {
    ...config.settings,
    alignment,
  };
  const updatedConfig = {
    ...config,
    settings,
  };

  return (
    <SunColSix>
      <CountdownTimer config={updatedConfig} content={content} />
    </SunColSix>
  );
});

stories.add('bottom left', () => {
  const { config, content } = data;
  const alignment = {
    x: 'left',
    y: 'bottom',
  };
  const settings = {
    ...config.settings,
    alignment,
  };
  const updatedConfig = {
    ...config,
    settings,
  };

  return (
    <SunColSix>
      <CountdownTimer config={updatedConfig} content={content} />
    </SunColSix>
  );
});

stories.add('bottom right', () => {
  const { config, content } = data;
  const alignment = {
    x: 'right',
    y: 'bottom',
  };
  const settings = {
    ...config.settings,
    alignment,
  };
  const updatedConfig = {
    ...config,
    settings,
  };

  return (
    <SunColSix>
      <CountdownTimer config={updatedConfig} content={content} />
    </SunColSix>
  );
});

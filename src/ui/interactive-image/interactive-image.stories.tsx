import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { SunColSix } from '../../styles/grids';

import InteractiveImage from './index';
import { colours } from '../../styles/colours';

const data = require('./dummy-data.json');

const stories = storiesOf('Interactive image', module);

stories.add('Default', () => {
  const { config, content } = data;
  return (
    <SunColSix>
      <InteractiveImage config={config} content={content} />
    </SunColSix>
  );
});

stories.add('Header styling', () => {
  const { config, content } = data;
  const headlineTheme = {
    primary: colours.$fabulous,
    secondary: colours.$fabulousSecondary,
  };
  const updatedConfig = {
    ...config,
    headlineTheme,
  };
  return (
    <SunColSix>
      <InteractiveImage config={updatedConfig} content={content} />
    </SunColSix>
  );
});

stories.add('Label styling', () => {
  const { config, content } = data;
  const labelTheme = {
    txtColour: colours.$white,
    bkgndColour: colours.$fabulous,
  };
  const updatedConfig = {
    ...config,
    labelTheme,
  };
  return (
    <SunColSix>
      <InteractiveImage config={updatedConfig} content={content} />
    </SunColSix>
  );
});

stories.add('Pulse styling', () => {
  const { config, content } = data;
  const labelTheme = {
    txtColour: colours.$white,
    bkgndColour: colours.$fabulous,
    pulseColour: 'green',
  };
  const updatedConfig = {
    ...config,
    labelTheme,
  };
  return (
    <SunColSix>
      <InteractiveImage config={updatedConfig} content={content} />
    </SunColSix>
  );
});

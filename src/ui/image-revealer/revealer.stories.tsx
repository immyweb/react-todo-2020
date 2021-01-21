import { storiesOf } from '@storybook/react';

import { SunColSix } from '../../styles/grids';
import ImageRevealer from './';
import { StartPosition } from './types';

import { colours } from '../../styles/colours';

const data = require('./dummy-data.json');

const stories = storiesOf('Image Revealer', module);

stories.add('startPosition left', () => {
  const { config, content } = data;
  const startPosition = StartPosition.LEFT;
  const updatedConfig = {
    ...config,
    startPosition,
  };
  return (
    <SunColSix>
      <ImageRevealer config={updatedConfig} content={content} />
    </SunColSix>
  );
});

stories.add('startPosition center', () => {
  const { config, content } = data;
  return (
    <SunColSix>
      <ImageRevealer config={config} content={content} />
    </SunColSix>
  );
});

stories.add('startPosition right', () => {
  const { config, content } = data;
  const startPosition = StartPosition.RIGHT;
  const updatedConfig = {
    ...config,
    startPosition,
  };
  return (
    <SunColSix>
      <ImageRevealer config={updatedConfig} content={content} />
    </SunColSix>
  );
});

stories.add('theme', () => {
  const { config, content } = data;
  const theme = {
    primary: colours.$fabulous,
    secondary: colours.$fabulousSecondary,
  };
  const updatedConfig = {
    ...config,
    theme,
  };
  return (
    <SunColSix>
      <ImageRevealer config={updatedConfig} content={content} />
    </SunColSix>
  );
});

stories.add('labels', () => {
  const { config, content } = data;
  const original = {
    ...content.original,
    label: 'Before',
  };
  const modified = {
    ...content.modified,
    label: 'After',
  };
  const updatedContent = {
    ...content,
    original,
    modified,
  };
  return (
    <SunColSix>
      <ImageRevealer config={config} content={updatedContent} />
    </SunColSix>
  );
});

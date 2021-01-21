import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { SunColSix } from '../../styles/grids';

import { Accordion } from './accordion';
import { colours } from '../../styles/colours';

import { data, data2 } from './dummy-data';

const stories = storiesOf('Accordion', module);

stories.add('default useage', () => {
  const { config, content } = data as any;
  return (
    <SunColSix>
      <Accordion config={config} content={content} />
    </SunColSix>
  );
});

// stories.add('timeline mode', () => {
//   const { config, content } = data as any;
//   const newConfig = {
//     ...config,
//     timeline: true,
//   };
//   return (
//     <SunColSix>
//       <Accordion config={newConfig} content={content} />
//     </SunColSix>
//   );
// });

stories.add('expanded true', () => {
  const { config, content } = data2 as any;
  return (
    <SunColSix>
      <Accordion config={config} content={content} />
    </SunColSix>
  );
});

stories.add('themeing', () => {
  const { config, content } = data as any;
  const newConfig = {
    ...config,
    theme: {
      primary: colours.$fabulous,
      secondary: colours.$fabulousSecondary,
    },
  };
  return (
    <SunColSix>
      <Accordion config={newConfig} content={content} />
    </SunColSix>
  );
});

stories.add('single item', () => {
  const { config, content } = data as any;
  return (
    <SunColSix>
      <Accordion config={config} content={{ ...content, items: [content.items[0]] }} />
    </SunColSix>
  );
});

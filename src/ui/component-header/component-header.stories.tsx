// import * as React from 'react';

// import { storiesOf } from '@storybook/react';

// import { SunColSix } from '../../styles/grids';
// import { ComponentHeader } from '../component-header/';

// import { colours } from '../../styles/colours';

// const stories = storiesOf('Component Header', module);

// const theme = {
//   primary: colours.$fabulous,
//   secondary: colours.$fabulousSecondary,
// };

// stories.add('default useage', () => (
//   <SunColSix>
//     <ComponentHeader
//       highlight="highlight"
//       title="rest of headline"
//       subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
//     />
//   </SunColSix>
// ));

// stories.add('inline useage', () => (
//   <SunColSix>
//     <ComponentHeader
//       inline
//       highlight="highlight"
//       title="rest of headline"
//       subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
//     />
//   </SunColSix>
// ));

// stories.add('center align', () => (
//   <SunColSix>
//     <ComponentHeader
//       highlight="highlight"
//       title="rest of headline"
//       subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
//       alignment={{ x: 'center' }}
//     />
//   </SunColSix>
// ));

// stories.add('right align', () => (
//   <SunColSix>
//     <ComponentHeader
//       highlight="highlight"
//       title="rest of headline"
//       subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
//       alignment={{ x: 'right' }}
//     />
//   </SunColSix>
// ));

// stories.add('inline center', () => (
//   <SunColSix>
//     <ComponentHeader
//       inline
//       highlight="highlight"
//       title="rest of headline"
//       subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
//       alignment={{ x: 'center' }}
//     />
//   </SunColSix>
// ));

// stories.add('inline right', () => (
//   <SunColSix>
//     <ComponentHeader
//       inline
//       highlight="highlight"
//       title="rest of headline"
//       subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
//       alignment={{ x: 'right' }}
//     />
//   </SunColSix>
// ));

// stories.add('title only', () => (
//   <SunColSix>
//     <ComponentHeader title="rest of headline" />
//   </SunColSix>
// ));

// stories.add('highlight only', () => (
//   <SunColSix>
//     <ComponentHeader highlight="highlight" />
//   </SunColSix>
// ));

// stories.add('highlight only inline', () => (
//   <SunColSix>
//     <ComponentHeader highlight="highlight" inline />
//   </SunColSix>
// ));

// stories.add('subTitle only', () => (
//   <SunColSix>
//     <ComponentHeader subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus" />
//   </SunColSix>
// ));

// stories.add('with link', () => (
//   <SunColSix>
//     <ComponentHeader
//       highlight="highlight"
//       title="rest of headline"
//       subTitle="Lorem ipsum dolor sit amet, <a href='http://www.google.com' target='_blank'>consectetur adipiscing</a> elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
//     />
//   </SunColSix>
// ));

// stories.add('with theme', () => (
//   <SunColSix>
//     <ComponentHeader
//       highlight="highlight"
//       title="rest of headline"
//       subTitle="Lorem ipsum dolor sit amet, <a href='http://www.google.com' target='_blank'>consectetur adipiscing</a> elit. Ut accumsan venenatis neque quis malesuada. Sed ac porta enim, vel bibendum tellus"
//       theme={theme}
//     />
//   </SunColSix>
// ));

// stories.add('with background', () => (
//   <SunColSix>
//     <ComponentHeader title="rest of headline" theme={theme} background />
//   </SunColSix>
// ));

import { storiesOf } from '@storybook/react';
import { SunColSix } from '../../styles/grids';

import { colours } from '../../styles/colours';

import Carousel from './';

const data = require('./dummy-data.json');

const stories = storiesOf('Carousel', module);

stories.add('default', () => {
  const { content, config } = data;
  return (
    <SunColSix>
      <Carousel config={config} content={content} />
    </SunColSix>
  );
});

stories.add('theming', () => {
  const { content, config } = data;
  const theme = {
    primary: colours.$fabulous,
    secondary: colours.$fabulousSecondary,
  };
  const updatedConfig = {
    ...config,
    theme,
  };

  return (
    <div>
      <SunColSix>
        <Carousel config={updatedConfig} content={content} />
      </SunColSix>
    </div>
  );
});

// stories.add('label and pagination theming', () => {
//   const { content, config } = data;
//   const theme = {
//     txtColour: colours.$fabulous,
//     border: colours.$fabulousSecondary,
//   };
//   const updatedConfig = {
//     ...config,
//     theme,
//   };

//   return (
//     <div style={{ background: colours.$darkGrey, height: '100vh' }}>
//       <SunColSix>
//         <Carousel config={updatedConfig} content={content} />
//       </SunColSix>
//     </div>
//   );
// });

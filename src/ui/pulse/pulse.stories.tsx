// import * as React from 'react';
// import { css } from 'glamor';

// import { storiesOf } from '@storybook/react';

// import Pulse from './pulse';
// import PulseLabel from './pulse-label';
// import Label, { ArrowPosition } from '../label/label';
// import { colours } from '../../styles/colours';

// const stories = storiesOf('Pulse', module);

// const centerPage = css({
//   margin: '0 auto',
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
// });

// stories.add('default', () => (
//   <div {...centerPage}>
//     <Pulse />
//   </div>
// ));

// stories.add('colour', () => (
//   <div {...centerPage}>
//     <Pulse colour={colours.$fabulous} />
//   </div>
// ));

// stories.add('size', () => (
//   <div {...centerPage}>
//     <Pulse colour={colours.$travel} size={150} />
//   </div>
// ));

// stories.add('with Label', () => (
//   <div {...centerPage}>
//     <Label
//       arrowSide={ArrowPosition.TOP}
//       arrowPosition={ArrowPosition.RIGHT}
//       bkgColour={colours.$football}
//     >
//       Lovely label
//     </Label>
//     <PulseLabel
//       labelSide={ArrowPosition.TOP}
//       labelPosition={ArrowPosition.RIGHT}
//       colour={colours.$footballSecondary}
//     />
//   </div>
// ));

// import * as React from 'react';
// import { css } from 'glamor';

// import { storiesOf } from '@storybook/react';

// import Label, { ArrowPosition } from './label';
// import { LabelSubText } from './styles';
// import { colours } from '../../styles/colours';
// import { fonts } from '../../styles/fonts';
// import PulseLabel from '../pulse/pulse-label';

// const stories = storiesOf('Label', module);

// const centerPage = css({
//   height: '100vh',
//   width: '100vw',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   position: 'relative',
// });

// stories.add('default', () => (
//   <div {...centerPage}>
//     <Label
//       bkgColour={colours.$fabulous}
//       arrowSide={ArrowPosition.BOTTOM}
//       arrowPosition={ArrowPosition.CENTER}
//     >
//       Lionel Messi
//       <LabelSubText>2017 leading goals scorer and MVP</LabelSubText>
//     </Label>
//   </div>
// ));

// stories.add('colour customisation', () => (
//   <div {...centerPage}>
//     <Label
//       bkgColour={colours.$travel}
//       txtColour={colours.$motors}
//       arrowSide={ArrowPosition.BOTTOM}
//       arrowPosition={ArrowPosition.CENTER}
//     >
//       Lionel Messi
//       <LabelSubText>2017 leading goals scorer and MVP</LabelSubText>
//     </Label>
//   </div>
// ));

// stories.add('arrow placement', () => (
//   <div {...centerPage}>
//     <Label
//       bkgColour={colours.$fabulous}
//       arrowSide={ArrowPosition.BOTTOM}
//       arrowPosition={ArrowPosition.CENTER}
//     >
//       Lovely label
//     </Label>
//   </div>
// ));

// stories.add('Map label', () => (
//   <div {...centerPage}>
//     <Label
//       bkgColour={colours.$main}
//       arrowSide={ArrowPosition.TOP}
//       arrowPosition={ArrowPosition.LEFT}
//       uppercase={false}
//       fontfamily={fonts.$theSunMedium}
//       fontSizeDesktop={16}
//     >
//       Lovely label
//     </Label>
//   </div>
// ));

// stories.add('with Pulse', () => (
//   <div {...centerPage}>
//     <div style={{ position: 'relative' }}>
//       <Label
//         bkgColour={colours.$main}
//         arrowSide={ArrowPosition.BOTTOM}
//         arrowPosition={ArrowPosition.CENTER}
//       >
//         Lovely label
//         <LabelSubText>2017 leading goals scorer and MVP</LabelSubText>
//       </Label>
//       <PulseLabel labelSide={ArrowPosition.BOTTOM} labelPosition={ArrowPosition.CENTER} />
//     </div>
//   </div>
// ));

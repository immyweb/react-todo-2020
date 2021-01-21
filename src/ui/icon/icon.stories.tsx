// import * as React from 'react';
// import glamorous from 'glamorous';

// import { storiesOf } from '@storybook/react';

// import Icon from './icon';
// import { colours } from '../../styles/colours';
// import { P } from '../typography/typography';

// const IconPreviewBox = glamorous.div({
//   label: 'icon-preview-box',
//   display: 'inline-block',
//   width: 200,
//   height: 'auto',
//   textAlign: 'center',
//   margin: 10,
//   border: `1px solid ${colours.$lightGrey}`,
// });

// const IconPreview = glamorous.div({
//   label: 'icon-preview',
//   padding: '10px 0px',
// });

// const IconP = glamorous(P)({
//   label: 'icon-p',
//   textAlign: 'center',
//   fontFamily: 'TheSun-Regular',
// });

// const stories = storiesOf('Icons', module);

// stories.add('All the icons', () => (
//   <div>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="arrow-solid-right" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>arrow-solid-right</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="bullet-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>bullet-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="burger-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>burger-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="comment-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>comment-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="chevron-solid-down" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>chevron-solid-down</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="chevron-solid-left" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>chevron-solid-left</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="chevron-solid-right" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>chevron-solid-right</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="chevron-solid-up" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>chevron-solid-up</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="close-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>close-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="cross-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>cross-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="facebook-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>facebook-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="gallery-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>gallery-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="mail-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>mail-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="mark-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>mark-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="play-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>play-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="plus-outline" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>plus-outline</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="plus-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>plus-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="search-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>search-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="tick-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>tick-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="twitter-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>twitter-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="whatsapp-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>whatsapp-solid</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="plus-solo" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>plus-solo</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="i-solo" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>i-solo</IconP>
//     </IconPreviewBox>
//     <IconPreviewBox>
//       <IconPreview>
//         <Icon iconName="grouped-chevron-solid" iconColour={colours.$news} iconSize={32} />
//       </IconPreview>
//       <IconP>grouped-chevron-solid</IconP>
//     </IconPreviewBox>
//   </div>
// ));

// import * as React from 'react';
// import { css } from 'glamor';

// import { storiesOf } from '@storybook/react';

// import { SunColSix } from '../../styles/grids';

// import AnimatedPolls from '.';
// import { TeaserScreen } from './teaser';
// import { IntroScreen } from './intro';
// import { CardScreen } from './card';
// import { VoteScreen } from './vote';
// import { ResultsScreen } from './results';
// import { ProgressBar } from './progress-bar';
// import { Nav } from './nav';
// import { PollContainer } from './poll-container';

// const data = require('./dummy-data.json');

// const centerPage = css({
//   height: '100vh',
//   width: '100vw',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   position: 'relative',
// });

// const stories = storiesOf('Animated Polls', module);

// stories.add('Movember', () => {
//   const { config, content } = data;
//   return (
//     <SunColSix>
//       <AnimatedPolls config={config} content={content} />
//     </SunColSix>
//   );
// });

// stories.add('Teaser Screen', () => {
//   const {
//     config: { theme },
//     content: { teaserScreen },
//   } = data;
//   return (
//     <SunColSix>
//       <TeaserScreen theme={theme} onOpenModal={() => 'nothing'} {...teaserScreen} />
//     </SunColSix>
//   );
// });

// stories.add('Intro Screen', () => {
//   const {
//     content: { introScreen },
//   } = data;
//   return (
//     <SunColSix>
//       <IntroScreen {...introScreen} />
//     </SunColSix>
//   );
// });

// stories.add('Card Screen', () => {
//   const {
//     content: { cards },
//   } = data;
//   return (
//     <SunColSix>
//       <CardScreen {...cards[0]} />
//     </SunColSix>
//   );
// });

// stories.add('Vote Screen', () => {
//   const {
//     config: { theme },
//     content: { voteScreen, options },
//   } = data;
//   return (
//     <SunColSix>
//       <VoteScreen {...voteScreen} options={options} theme={theme} />
//     </SunColSix>
//   );
// });

// stories.add('Results Screen', () => {
//   const {
//     config: { theme },
//     content: { resultsScreen, options },
//   } = data;
//   return (
//     <SunColSix>
//       <ResultsScreen {...resultsScreen} options={options} theme={theme} />
//     </SunColSix>
//   );
// });

// stories.add('Progress bar', () => {
//   const {
//     content: { options },
//   } = data;
//   return (
//     <div style={{ background: '#000' }} {...centerPage}>
//       <ProgressBar options={options} currentCardIndex={0} />
//     </div>
//   );
// });

// stories.add('Navigation', () => {
//   return (
//     <div style={{ background: '#000' }} {...centerPage}>
//       <Nav currentCardIndex={0} onClickLeft={() => 'nothing'} onClickRight={() => 'nothing'} />
//     </div>
//   );
// });

// stories.add('Card container', () => {
//   const { config, content } = data;
//   return <PollContainer config={config} content={content} />;
// });

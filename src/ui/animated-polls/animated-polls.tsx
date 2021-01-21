import * as React from 'react';

import { TeaserScreen } from './teaser';
import { PollContainer } from './poll-container';
import { onOpenModal } from './immersive-modal-util';

import { APoll } from './styles';
import { IAnimatedPoll } from './types';

export const AnimatedPolls: React.SFC<IAnimatedPoll> = ({ config, content }) => {
  return (
    <APoll>
      <div id="animated-polls-modal" />
      <TeaserScreen theme={config.theme} {...content.teaserScreen} onOpenModal={onOpenModal}>
        <PollContainer config={config} content={content} />
      </TeaserScreen>
    </APoll>
  );
};

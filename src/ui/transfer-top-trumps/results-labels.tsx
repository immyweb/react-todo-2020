import * as React from 'react';

import { ResultsProfileLabel, ResultsProfileLabelContainer } from './styles';

import { IPlayer } from './types';

export const ResultsLabels: React.SFC<{ sortedProfiles: IPlayer[] }> = ({ sortedProfiles }) => {
  const profiles = sortedProfiles.map((profile, i) => {
    if (profile !== undefined) {
      const { fname, sName } = profile;
      return <ResultsProfileLabel key={i}>{`${fname} ${sName}`}</ResultsProfileLabel>;
    }
    return <div key={i} />;
  });
  return <ResultsProfileLabelContainer>{profiles}</ResultsProfileLabelContainer>;
};

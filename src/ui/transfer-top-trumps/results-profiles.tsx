import * as React from 'react';

import ButtonCta from './button-cta';

import {
  ResultsProfileImage,
  ResultsProfileInner,
  ResultsProfileIcon,
  ResultsProfileImageContainer,
} from './styles';
import { colours } from '../../styles/colours';

import { IPlayer } from './types';

export const ResultsProfiles: React.SFC<{ sortedProfiles: IPlayer[] }> = ({ sortedProfiles }) => {
  const profiles = sortedProfiles.map((profile: IPlayer, i: number) => {
    if (profile !== undefined) {
      const { imageMobile, sName, selected } = profile;
      return (
        <ResultsProfileInner key={i}>
          {selected && (
            <ResultsProfileIcon>
              <ButtonCta
                bkgndTop={colours.$lightGreen}
                bkgndBottom={colours.$darkGreen}
                iconName={'tick-solid'}
                size={20}
                borderWidth={1}
                iconSize={8}
                disabled={true}
              />
            </ResultsProfileIcon>
          )}
          {!selected && (
            <ResultsProfileIcon>
              <ButtonCta
                bkgndTop={colours.$lightRed}
                bkgndBottom={colours.$darkRed}
                iconName={'cross-solid'}
                size={20}
                borderWidth={1}
                iconSize={7}
                disabled={true}
              />
            </ResultsProfileIcon>
          )}
          <ResultsProfileImage>
            <img src={imageMobile} alt={sName} />
          </ResultsProfileImage>
        </ResultsProfileInner>
      );
    }
    return <div key={i} />;
  });
  return <ResultsProfileImageContainer>{profiles}</ResultsProfileImageContainer>;
};

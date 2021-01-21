import * as React from 'react';

import { WeatherCtaContainer, WeatherCtaIcon } from './styles';

export const WeatherCta: React.SFC<{ icon: string; url: string }> = ({ icon, url, children }) => {
  return (
    <WeatherCtaContainer href={url} target="_blank">
      <WeatherCtaIcon src={icon} alt={'cta'} />
      {children}
    </WeatherCtaContainer>
  );
};

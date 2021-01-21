import * as React from 'react';

import { WeatherCta } from './weather-cta';
import { WeatherIconUrls } from './enums';

import { WeatherBkgndContainer, WeatherIsland, WeatherAtmosphere } from './styles';

interface IProps {
  mapImg: string;
  atmosphereImg: string;
  ctaLabel: string;
  icon: WeatherIconUrls;
  url: string;
}

export const WeatherBkgnd: React.SFC<IProps> = ({
  mapImg,
  atmosphereImg,
  ctaLabel,
  icon,
  url,
  children,
}) => {
  return (
    <WeatherBkgndContainer>
      {children}
      <WeatherAtmosphere background={atmosphereImg} />
      <WeatherIsland background={mapImg} />
      <WeatherCta url={url} icon={icon}>
        {ctaLabel}
      </WeatherCta>
    </WeatherBkgndContainer>
  );
};

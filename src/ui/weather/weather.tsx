import * as React from 'react';

import Error from '../error';
import Loader from '../loader';
import { WeatherBkgnd } from './weather-bkgnd';
import { WeatherLabels } from './weather-labels';
import { WeatherTabRow } from './weather-tab-row';
import { WeatherTab } from './weather-tab';
import { convertDate, getDay, getDate } from './weather-utils';

import { WeatherRowContainer } from './styles';

import { IWeather, ITabItem, IDay } from './types';
import { WeatherAtmosphereUrls, WeatherIconUrls } from './enums';

// import fetch from 'unfetch';
const forecastData = require('./mock-forecast.json');

interface IState {
  selectedIndex: number;
  tabForecast: ITabItem[];
  weekForecast: IDay[];
  hasTabData: boolean;
  hasForecastData: boolean;
  hasErrored: boolean;
  isLoading: boolean;
}

export class Weather extends React.Component<IWeather, IState> {
  constructor(props: IWeather) {
    super(props);

    this.state = {
      selectedIndex: 0,
      tabForecast: [],
      weekForecast: [],
      hasTabData: false,
      hasForecastData: false,
      hasErrored: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    // const url = https://www-dev.uat-thesun.co.uk/nu-sun-pod-component-config-dev/weather/daily.json
    // const url = `https://${
    //   window.location.hostname
    // }/nu-sun-pod-component-config-prod/weather/daily.json`;

    // fetch(url, { cache: 'no-store' })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       hasErrored: false,
    //       isLoading: false,
    //     });
    //     this.sortTabData(data);
    //     this.sortLocationData(data);
    //   })
    //   .catch(e => {
    //     this.setState({
    //       hasErrored: true,
    //       isLoading: false,
    //     });
    //     // tslint:disable-next-line:no-console
    //     console.log('Weather data fetch failed', e);
    //   });

    this.setState({
      hasErrored: false,
      isLoading: false,
    });

    this.sortTabData(forecastData);
    this.sortLocationData(forecastData);
  }

  sortTabData(fiveDays: object) {
    const ukTabArray = [] as ITabItem[];
    const data = {
      ...fiveDays,
    };

    Object.keys(data).forEach((day) => {
      const utcDay = convertDate(day);
      const weekDay = getDay(utcDay);
      const date = getDate(utcDay);
      const singleDay = fiveDays[day].UK;

      const tabItem = {
        date,
        day: weekDay,
        status: singleDay.day.WeatherType,
        dayMax: singleDay.day.DayMaximumTemperature,
        nightMin: singleDay.night.NightMinimumTemperature,
      };
      ukTabArray.push(tabItem);
    });

    this.setState({
      tabForecast: ukTabArray,
      hasTabData: true,
    });
  }

  sortLocationData(fiveDays: object) {
    const weekForecast = [] as IDay[];
    const data = {
      ...fiveDays,
    };

    Object.keys(data).forEach((day) => {
      const dayForecast = data[day];
      weekForecast.push(dayForecast);
    });

    this.setState({
      weekForecast,
      hasForecastData: true,
    });
  }

  toggleTab = (index: number) => {
    this.setState({ selectedIndex: index });
  };

  renderTabs() {
    const { tabForecast } = this.state;
    return tabForecast.map((forecast, i) => {
      const status = forecast['status'];

      return (
        <WeatherTab
          key={i}
          day={forecast['day']}
          date={forecast['date']}
          icon={WeatherIconUrls[status]}
          dayMax={forecast['dayMax']}
          nightMin={forecast['nightMin']}
        />
      );
    });
  }

  render() {
    const { map, cta, locations } = this.props.content;
    // const {
    //   theme: { primary },
    // } = this.props.config;

    const { selectedIndex, hasErrored, hasTabData, tabForecast, hasForecastData, weekForecast, isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return hasErrored ? (
      <Error />
    ) : (
      hasTabData && hasForecastData && (
        <div>
          <WeatherBkgnd
            mapImg={map}
            atmosphereImg={WeatherAtmosphereUrls[tabForecast[selectedIndex].status]}
            ctaLabel={cta.label}
            icon={WeatherIconUrls[cta.icon]}
            url={cta.url}
          >
            <WeatherLabels locations={locations} selectedIndex={selectedIndex} weekForecast={weekForecast} />
            <WeatherRowContainer>
              <WeatherTabRow onClick={this.toggleTab}>{this.renderTabs()}</WeatherTabRow>
            </WeatherRowContainer>
          </WeatherBkgnd>
        </div>
      )
    );
  }
}

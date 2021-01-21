import countdown from 'countdown';

import { ITimespan } from './types';

export const getCountdown = (units: any, to: Date) => {
  const timespan = countdown(Date.now(), to, units) as ITimespan;

  let _isEnded = false;

  if (timespan.value && timespan.value <= 0) {
    _isEnded = true;
  }

  return {
    isEnded: _isEnded,
    millennia: getTimeStatus(_isEnded, timespan.millennia),
    centuries: getTimeStatus(_isEnded, timespan.centuries),
    decades: getTimeStatus(_isEnded, timespan.decades),
    years: getTimeStatus(_isEnded, timespan.years),
    months: getTimeStatus(_isEnded, timespan.months),
    weeks: getTimeStatus(_isEnded, timespan.weeks),
    days: getTimeStatus(_isEnded, timespan.days),
    hours: getTimeStatus(_isEnded, timespan.hours),
    minutes: getTimeStatus(_isEnded, timespan.minutes),
    seconds: getTimeStatus(_isEnded, timespan.seconds),
    milliseconds: getTimeStatus(_isEnded, timespan.milliseconds),
  };
};

export const getCountUp = (from: Date) => {
  const timespan = countdown(from, Date.now(), -1890) as ITimespan;

  return {
    isEnded: false,
    millennia: getTimeStatus(false, timespan.millennia),
    centuries: getTimeStatus(false, timespan.centuries),
    decades: getTimeStatus(false, timespan.decades),
    years: getTimeStatus(false, timespan.years),
    months: getTimeStatus(false, timespan.months),
    weeks: getTimeStatus(false, timespan.weeks),
    days: getTimeStatus(false, timespan.days),
    hours: getTimeStatus(false, timespan.hours),
    minutes: getTimeStatus(false, timespan.minutes),
    seconds: getTimeStatus(false, timespan.seconds),
    milliseconds: getTimeStatus(false, timespan.milliseconds),
  };
};

export const getCountUpSeconds = (from: Date) => {
  const timespan = countdown(from, Date.now(), -2046) as ITimespan;

  return {
    isEnded: false,
    millennia: getTimeStatus(false, timespan.millennia),
    centuries: getTimeStatus(false, timespan.centuries),
    decades: getTimeStatus(false, timespan.decades),
    years: getTimeStatus(false, timespan.years),
    months: getTimeStatus(false, timespan.months),
    weeks: getTimeStatus(false, timespan.weeks),
    days: getTimeStatus(false, timespan.days),
    hours: getTimeStatus(false, timespan.hours),
    minutes: getTimeStatus(false, timespan.minutes),
    seconds: getTimeStatus(false, timespan.seconds),
    milliseconds: getTimeStatus(false, timespan.milliseconds),
  };
};

export const getCountUpMilliseconds = (from: Date) => {
  const timespan = countdown(from, Date.now(), -2047) as ITimespan;

  return {
    isEnded: false,
    millennia: getTimeStatus(false, timespan.millennia),
    centuries: getTimeStatus(false, timespan.centuries),
    decades: getTimeStatus(false, timespan.decades),
    years: getTimeStatus(false, timespan.years),
    months: getTimeStatus(false, timespan.months),
    weeks: getTimeStatus(false, timespan.weeks),
    days: getTimeStatus(false, timespan.days),
    hours: getTimeStatus(false, timespan.hours),
    minutes: getTimeStatus(false, timespan.minutes),
    seconds: getTimeStatus(false, timespan.seconds),
    milliseconds: getTimeStatus(false, timespan.milliseconds),
  };
};

export const getTimeStatus = (isEnded: boolean, unit: number | undefined): number => {
  if (unit === undefined) {
    return -1;
  }
  if (unit !== -1 && !isEnded) {
    return unit;
  }
  if (unit !== -1 && isEnded) {
    return 0;
  }
  return -1;
};

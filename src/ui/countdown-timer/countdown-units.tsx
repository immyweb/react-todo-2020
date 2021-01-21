import * as React from 'react';

import { unitKeys } from './unit-keys';

import { UnitWrapper, UnitInstance, UnitLabel, UnitValue, DigitContainer } from './styles';

import { UnitPosition, ICustomCountUnits, ICountdownUnits } from './types';

export const CounterDisplay = ({ value = 0 }: { value: number }) => (
  <>
    {value
      .toString()
      .split('')
      .map((digit, index) => (
        <DigitContainer key={index}>{digit}</DigitContainer>
      ))}
  </>
);

export const CustomCountUnits = ({
  value,
  unit = '',
  textColour,
  alignment,
  unitPosition = UnitPosition.start,
}: ICustomCountUnits) => (
  <UnitWrapper opacity={1} alignment={alignment}>
    <UnitInstance key={value} className={`countdown-timer-unit-${unit}`}>
      <UnitValue textColour={textColour} className={'countdown-timer-unit-value'}>
        {unitPosition !== UnitPosition.end ? (
          <>
            <span>{unit}</span>
            <CounterDisplay value={value} />
          </>
        ) : (
          <>
            <CounterDisplay value={value} />
            <span>{unit}</span>
          </>
        )}
      </UnitValue>
    </UnitInstance>
  </UnitWrapper>
);

export const CountdownUnits = ({ time, timeStampColour, alignment, isStarted }: ICountdownUnits) => {
  const unitTable = {
    [unitKeys.millennia]: {
      label: 'Millennia',
    },
    [unitKeys.centuries]: {
      label: 'Centuries',
    },
    [unitKeys.decades]: {
      label: 'Decades',
    },
    [unitKeys.years]: {
      label: 'Years',
    },
    [unitKeys.months]: {
      label: 'Months',
    },
    [unitKeys.weeks]: {
      label: 'Weeks',
    },
    [unitKeys.days]: {
      label: 'Days',
    },
    [unitKeys.hours]: {
      label: 'Hours',
    },
    [unitKeys.minutes]: {
      label: 'Minutes',
    },
    [unitKeys.seconds]: {
      label: 'Seconds',
    },
    [unitKeys.milliseconds]: {
      label: 'MS',
    },
  };

  const returnTimeUnit = (value: number, name: string) => {
    return (
      value !== -1 &&
      unitKeys.hasOwnProperty(name) && (
        <UnitInstance key={name} className={`countdown-timer-unit-${unitTable[name].label}`}>
          <UnitValue textColour={timeStampColour} className={'countdown-timer-unit-value'}>
            {isNaN(value) ? 0 : value}
          </UnitValue>
          <UnitLabel textColour={timeStampColour} className={'countdown-timer-label'}>
            {unitTable[name].label}
          </UnitLabel>
        </UnitInstance>
      )
    );
  };
  return (
    <UnitWrapper opacity={isStarted ? 1 : 0} alignment={alignment}>
      {Object.keys(time).map((propsUnit: string) => {
        return returnTimeUnit(time[propsUnit], propsUnit);
      })}
    </UnitWrapper>
  );
};

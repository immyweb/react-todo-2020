import { getCountdown, getCountUp, getTimeStatus } from '../countdown-utils';

describe('getCountdown', () => {
  it('should set isEnded to false if date is set in the future', () => {
    const result = getCountdown('DAYS', new Date('July, 30, 2049, 06:35'));
    expect(result.isEnded).toEqual(false);
  });

  it('should set isEnded to false if date is set in the future', () => {
    const result = getCountdown('DAYS', new Date('July, 30, 2017, 06:35'));
    expect(result.isEnded).toEqual(true);
  });
});

describe('getCountUp', () => {
  describe('date is in the future', () => {
    it('should countdown to the future time', () => {
      const date = new Date();
      date.setMinutes(date.getMinutes() + 150);
      const result = getCountUp(date);
      expect(result.minutes).toBe(30);
      expect(result.hours).toBe(2);
    });
  });
  describe('date is in the past', () => {
    it('should countup after the past time', () => {
      const date = new Date();
      date.setMinutes(date.getMinutes() - 260);
      const result = getCountUp(date);
      expect(result.minutes).toBe(20);
      expect(result.hours).toBe(4);
    });
  });
});

describe('getTimeStatus', () => {
  it('returns correct value if unit is undefined', () => {
    const result = getTimeStatus(false, undefined);
    expect(result).toEqual(-1);
  });

  it('returns correct value if unit is not -1 and isEnded is false', () => {
    const result = getTimeStatus(false, 1);
    expect(result).toEqual(1);
  });

  it('returns correct value if unit is not -1 and isEnded is true', () => {
    const result = getTimeStatus(true, 1);
    expect(result).toEqual(0);
  });

  it('returns correct value if unit is -1 and isEnded is true', () => {
    const result = getTimeStatus(true, -1);
    expect(result).toEqual(-1);
  });

  it('returns correct value if unit is -1 and isEnded is false', () => {
    const result = getTimeStatus(false, -1);
    expect(result).toEqual(-1);
  });
});

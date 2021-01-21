import { convertDate, getDay, getDate } from '../weather-utils';

describe('Weather utils', () => {
  describe('convertDate', () => {
    it('returns correct UTC date', () => {
      const stringDate = '20181123';
      const result = convertDate(stringDate);
      expect(result).toEqual(expect.stringContaining('Fri Nov 23 2018'));

      const stringDate2 = '20180730';
      const result2 = convertDate(stringDate2);
      expect(result2).toEqual(expect.stringContaining('Mon Jul 30 2018'));
    });
  });

  describe('getDay', () => {
    it('returns correct day', () => {
      const utcDate = 'Fri Nov 23 2018 00:00:00 GMT+0000 (Greenwich Mean Time)';
      const result = getDay(utcDate);
      expect(result).toEqual('Fri');

      const utcDate2 = 'Mon Jul 30 2018 01:00:00 GMT+0100 (British Summer Time)';
      const result2 = getDay(utcDate2);
      expect(result2).toEqual('Mon');
    });
  });

  describe('getDate', () => {
    it('returns correct date', () => {
      const utcDate = 'Fri Nov 23 2018 00:00:00 GMT+0000 (Greenwich Mean Time)';
      const result = getDate(utcDate);
      expect(result).toEqual('Nov 23');

      const utcDate2 = 'Mon Jul 30 2018 01:00:00 GMT+0100 (British Summer Time)';
      const result2 = getDate(utcDate2);
      expect(result2).toEqual('Jul 30');
    });
  });
});

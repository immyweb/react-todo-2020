import { guessAPIHostname } from './hostname-helper';

describe('Hostname Helper', () => {
  describe('guessAPIHostname', () => {
    describe('when passed staging hostname', () => {
      it('returns the STAGING api url', () => {
        expect(guessAPIHostname('www.staging-thesun.co.uk')).toBe('www.staging-thesun.co.uk');
      });
    });
    describe('when passed production hostname', () => {
      it('returns the PRODUCTION api url', () => {
        expect(guessAPIHostname('www.thesun.co.uk')).toBe('www.thesun.co.uk');
      });
    });
    describe('when passed local hostname', () => {
      it('returns the UAT api url', () => {
        expect(guessAPIHostname('localhost')).toBe('www-dev.uat-thesun.co.uk');
      });
    });
    describe('when passed unknown hostname', () => {
      it('returns UAT api url', () => {
        expect(guessAPIHostname('')).toBe('www-dev.uat-thesun.co.uk');
      });
    });
  });
});

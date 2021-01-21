/* tslint:disable:only-arrow-functions */
import fetch from 'unfetch';
import * as apiServices from './api-service';

const mockJson = jest.fn(() => 'vs Freddy');
jest.mock('unfetch', () => ({
  default: jest.fn(() => ({
    status: 200,
    json: mockJson,
  })),
}));

const checkStatusCodeSpy = jest.spyOn(apiServices, 'checkStatusCode');

describe('apiService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('get', () => {
    it('should call fetch and return json', async () => {
      const options = {
        url: 'earl',
      };
      const res = await apiServices.apiService.get(options);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('earl', {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'GET',
      });
      expect(res).toEqual('vs Freddy');
      expect(mockJson).toHaveBeenCalledTimes(1);
      expect(checkStatusCodeSpy).toHaveBeenCalledTimes(1);
      expect(checkStatusCodeSpy).toHaveBeenCalledWith(200);
    });
  });
  describe('post', () => {
    it('should call fetch and return json', async () => {
      const options = {
        url: 'earl',
        body: 'grey',
      };
      const res = await apiServices.apiService.post(options);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('earl', {
        body: 'grey',
        method: 'POST',
      });
      expect(res).toEqual('vs Freddy');
      expect(mockJson).toHaveBeenCalledTimes(1);
      expect(checkStatusCodeSpy).toHaveBeenCalledTimes(1);
      expect(checkStatusCodeSpy).toHaveBeenCalledWith(200);
    });
  });
  describe('checkStatusCode', () => {
    it('should do nothing with a good status code', () => {
      const callCheckStatus = () => {
        apiServices.checkStatusCode(200);
      };
      expect(callCheckStatus).not.toThrowError();
    });
    it('should throw an error with a bad status code', () => {
      const callCheckStatus = () => {
        apiServices.checkStatusCode(300);
      };
      expect(callCheckStatus).toThrowError('Error when making request.');
    });
  });
});

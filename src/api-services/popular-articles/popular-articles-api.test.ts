import { popularArticlesAPI } from './popular-articles-api';

import { apiService } from '../api-service';

jest.mock('../api-service');

describe('Popular Articles API', () => {
  describe('getArticles', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    describe('provide section id 1 and limit 1', () => {
      it('returns an array of 1 rail data object', async () => {
        const res = await popularArticlesAPI.getArticles(1, 1);
        expect(apiService.get).toHaveBeenCalledWith({
          url: 'https://www.thesun.co.uk/wp-json/thesun/v2/popular?section_id=1&limit=1',
        });
        expect(res).toEqual([
          {
            miniHeadline: 'FESTI-FAIL',
            byline:
              "I had hot sex at Glastonbury... but I was the 20th guy she'd bedded that weekend",
            imageDesktop:
              'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=620&h=413&crop=1',

            imageMobile:
              'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=620&h=413&crop=1',
            url:
              'https://www.thesun.co.uk/uncategorized/4062426/dear-deidre-sanders-agony-aunt-advice/',
          },
        ]);
      });
    });
  });
});

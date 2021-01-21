import { apiService } from '../api-service';
import { IRail } from '../../ui/rails-alternates/types';
import { IArticleData } from './types';
import { guessAPIHostname } from '../hostname-helper';

const PROTOCOL = 'https';

const getUrlBase = () => {
  const domain = guessAPIHostname('www.thesun.co.uk'); // currently using live as there is no dev
  return `${PROTOCOL}://${domain}`;
};

const extractRailsData = ({
  meta: {
    teaser: { kicker: miniHeadline, headline: byline },
  },
  images: {
    landscape: {
      sizes: {
        'thesun-landscape-large': { source_url: imageDesktop },
      },
    },
    mobile: {
      sizes: {
        'thesun-mobile-medium': { source_url: imageMobile } = {
          source_url: '',
        },
        'thesun-landscape-medium': { source_url: imageMobileAlt } = {
          source_url: '',
        },
      },
    },
  },
  canonical_url: url,
}: IArticleData) => ({
  miniHeadline,
  byline,
  imageDesktop,
  url,
  imageMobile: imageMobile || imageMobileAlt,
});

export const popularArticlesAPI = {
  getArticles: async (sectionId: number, limit: number): Promise<IRail[]> => {
    const urlBase = getUrlBase();
    const url = `${urlBase}/wp-json/thesun/v2/popular?section_id=${sectionId}&limit=${limit}`;

    const articleData = (await apiService.get({
      url,
    })) as IArticleData[];

    return articleData.map(extractRailsData);
  },
};

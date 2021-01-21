const STAGING_API_DOMAIN = 'www.staging-thesun.co.uk';
const UAT_API_DOMAIN = 'www-dev.uat-thesun.co.uk';
const PROD_API_DOMAIN = 'www.thesun.co.uk';

export const guessAPIHostname = (hostname: string) => {
  switch (hostname) {
    case 'www.staging-thesun.co.uk':
      return STAGING_API_DOMAIN;

    case 'www.thesun.co.uk':
      return PROD_API_DOMAIN;

    case 'localhost':
    default:
      return UAT_API_DOMAIN;
  }
};

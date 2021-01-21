export interface IArticleData {
  meta: {
    teaser: {
      kicker: string;
      headline: string;
    };
  };
  images: {
    landscape: {
      sizes: {
        'thesun-landscape-large': {
          source_url: string;
        };
      };
    };
    mobile: {
      sizes: {
        'thesun-mobile-medium': {
          source_url: string;
        };
        'thesun-landscape-medium': {
          source_url: string;
        };
      };
    };
  };
  canonical_url: string;
}

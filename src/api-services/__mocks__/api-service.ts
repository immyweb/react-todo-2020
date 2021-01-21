export const apiService = {
  get: jest.fn(({ url }) => {
    if (url === 'https://www.thesun.co.uk/wp-json/thesun/v2/popular?section_id=1&limit=1') {
      return [
        {
          id: 4062426,
          type: 'post',
          slug: 'dear-deidre-sanders-agony-aunt-advice',
          title:
            "I had incredible sex with a girl at Glastonbury... then found out I was the 20th guy she'd bedded that weekend",
          canonical_url:
            'https://www.thesun.co.uk/uncategorized/4062426/dear-deidre-sanders-agony-aunt-advice/',
          date_created: '2017-07-20 17:48:40',
          date_modified: '2017-11-01 23:10:05',
          status: 'publish',
          meta: {
            teaser: {
              kicker: 'FESTI-FAIL',
              headline:
                "I had hot sex at Glastonbury... but I was the 20th guy she'd bedded that weekend",
              lead:
                "WE'RE still in touch and I like her but I can't help but be worried that she seems to sleep around",
            },
            liveblog_status: '',
            comment_count: '0',
            article_slug: '',
            byline: 'By Deidre Sanders, Agony Aunt',
            featured_video: [],
          },
          taxonomy: [
            {
              slug: 'category',
              label_singular: 'Section',
              label_plural: 'Sections',
              hierarchical: true,
              terms: [
                {
                  id: 1,
                  slug: 'uncategorized',
                  name: 'Uncategorized',
                  parent: 0,
                  url: 'https://www.thesun.co.uk/uncategorized/',
                },
              ],
            },
            {
              slug: 'post_tag',
              label_singular: 'Topic',
              label_plural: 'Topics',
              hierarchical: false,
              terms: [
                {
                  id: 732,
                  slug: 'sex',
                  name: 'Sex',
                  parent: 0,
                  url: 'https://www.thesun.co.uk/topic/sex/',
                },
              ],
            },
            {
              slug: 'zoninator_zones',
              label_singular: 'Zones',
              label_plural: 'Zones',
              hierarchical: false,
              terms: [],
            },
            {
              slug: 'customizer_category',
              label_singular: 'Customizer Section',
              label_plural: 'Customizer Sections',
              hierarchical: true,
              terms: [],
            },
          ],
          images: {
            landscape: {
              id: 4062849,
              description:
                '<p class="attachment"><a href=\'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg\'><img width="300" height="200" src="https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&amp;w=300" class="attachment-medium size-medium" alt="Couple kissing at festival" /></a></p>\n',
              caption: '<p>Couple kissing at festival</p>\n',
              alt_text: 'Couple kissing at festival',
              mime_type: 'image/jpeg',
              post: 4062426,
              src_url:
                'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all',
              src_width: 960,
              src_height: 640,
              sizes: {
                'thesun-video-rail': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=200&h=113&crop=1',
                  width: 200,
                  height: 113,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-landscape-large': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=620&h=413&crop=1',
                  width: 620,
                  height: 413,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-landscape-med-large': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=360&h=240&crop=1',
                  width: 360,
                  height: 240,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-landscape-medium': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=300&h=192&crop=1',
                  width: 300,
                  height: 192,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-landscape-small': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=150&h=100&crop=1',
                  width: 150,
                  height: 100,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
              },
            },
            portrait: {
              id: 4062849,
              description:
                '<p class="attachment"><a href=\'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg\'><img width="300" height="200" src="https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&amp;w=300" class="attachment-medium size-medium" alt="Couple kissing at festival" /></a></p>\n',
              caption: '<p>Couple kissing at festival</p>\n',
              alt_text: 'Couple kissing at festival',
              mime_type: 'image/jpeg',
              post: 4062426,
              src_url:
                'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all',
              src_width: 960,
              src_height: 640,
              sizes: {
                'thesun-video-rail': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=200&h=113&crop=1',
                  width: 200,
                  height: 113,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-portrait-medium': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=300&h=450&crop=1',
                  width: 300,
                  height: 450,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-portrait-small': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=150&h=225&crop=1',
                  width: 150,
                  height: 225,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
              },
            },
            hero: {
              id: 4062849,
              description:
                '<p class="attachment"><a href=\'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg\'><img width="300" height="200" src="https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&amp;w=300" class="attachment-medium size-medium" alt="Couple kissing at festival" /></a></p>\n',
              caption: '<p>Couple kissing at festival</p>\n',
              alt_text: 'Couple kissing at festival',
              mime_type: 'image/jpeg',
              post: 4062426,
              src_url:
                'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all',
              src_width: 960,
              src_height: 640,
              sizes: {
                'thesun-video-rail': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=200&h=113&crop=1',
                  width: 200,
                  height: 113,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-hero-full': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=940&h=400&crop=1',
                  width: 940,
                  height: 400,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-hero-large': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=620&h=295&crop=1',
                  width: 620,
                  height: 295,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-hero-small': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=150&h=71&crop=1',
                  width: 150,
                  height: 71,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
              },
            },
            mobile: {
              id: 4062849,
              description:
                '<p class="attachment"><a href=\'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg\'><img width="300" height="200" src="https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&amp;w=300" class="attachment-medium size-medium" alt="Couple kissing at festival" /></a></p>\n',
              caption: '<p>Couple kissing at festival</p>\n',
              alt_text: 'Couple kissing at festival',
              mime_type: 'image/jpeg',
              post: 4062426,
              src_url:
                'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all',
              src_width: 960,
              src_height: 640,
              sizes: {
                'thesun-video-rail': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=200&h=113&crop=1',
                  width: 200,
                  height: 113,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-mobile-small': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=150&h=96&crop=1',
                  width: 150,
                  height: 96,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-mobile-medium': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=620&h=413&crop=1',
                  width: 620,
                  height: 413,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
              },
            },
            app_vertical: {
              id: 4062849,
              description:
                '<p class="attachment"><a href=\'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg\'><img width="300" height="200" src="https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&amp;w=300" class="attachment-medium size-medium" alt="Couple kissing at festival" /></a></p>\n',
              caption: '<p>Couple kissing at festival</p>\n',
              alt_text: 'Couple kissing at festival',
              mime_type: 'image/jpeg',
              post: 4062426,
              src_url:
                'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all',
              src_width: 960,
              src_height: 640,
              sizes: {
                'thesun-video-rail': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=200&h=113&crop=1',
                  width: 200,
                  height: 113,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-app-vertical-small': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=150&h=267&crop=1',
                  width: 150,
                  height: 267,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
                'thesun-app-vertical': {
                  source_url:
                    'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000333815765.jpg?strip=all&w=750&h=1334&crop=1',
                  width: 750,
                  height: 1334,
                  crop: ['center', 'top'],
                  crop_coordinates: [],
                },
              },
            },
          },
          videos: {
            app_vertical_video: [],
          },
        },
      ];
    }
    return {};
  }),
};

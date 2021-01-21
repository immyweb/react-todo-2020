import * as React from 'react';
import glamorous from 'glamorous';

const Banner = () => {
  return (
    <div>
      <Link href="https://www.sunbets.co.uk/sunsix?n=101&b=19079960&c=3&utm_source=22&utm_medium=3&utm_content=%3Fpayload%3Dfootball_predictor&utm_campaign=101">
        <Image
          src="https://www.thesun.co.uk/wp-content/uploads/2018/03/pod-fixtures-fullbanner1.png"
          alt="Get six scores right &amp; WIN £1 MILLION"
        />
      </Link>
    </div>
  );
};

const Link = glamorous.a({
  label: 'banner-link',
  display: 'block',
});

const Image = glamorous.img({
  label: 'banner-image',
  width: '100%',
  marginBottom: 25,
});

export default Banner;

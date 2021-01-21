import * as React from 'react';
import { shallow } from 'enzyme';

import {
  ModalContainer,
  APTeaserLogo,
  APIntroImg,
  APVoteImgBkgnd,
  APOptionBarLabel,
  APOptionBarCta,
  APProgressBarItem,
  APNavIcon,
} from '../styles';

describe('<ModalContainer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ModalContainer open={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders when open', () => {
    const wrapper = shallow(<ModalContainer open={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<APTeaserLogo />', () => {
  it('renders correctly with backghround colour', () => {
    const wrapper = shallow(<APTeaserLogo backgroundColour={'#000000'} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<APIntroImg />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <APIntroImg imageMobile={'smallImage.jpg'} imageDesktop={'bigImage.jpg'} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<APVoteImgBkgnd />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <APVoteImgBkgnd imageMobile={'smallImage.jpg'} imageDesktop={'bigImage.jpg'} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<APOptionBarLabel />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<APOptionBarLabel bkgnd={'smallImage.jpg'} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<APOptionBarCta />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<APOptionBarCta bkgnd={'smallImage.jpg'} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<APProgressBarItem />', () => {
  it('renders correctly if not highlighted', () => {
    const wrapper = shallow(<APProgressBarItem viewed={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<APProgressBarItem viewed={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<APNavIcon />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<APNavIcon disabled={false} onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly if disabled', () => {
    const wrapper = shallow(<APNavIcon disabled={true} onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});

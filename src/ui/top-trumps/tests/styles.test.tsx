import * as React from 'react';
import { shallow } from 'enzyme';

import {
  TTIntroInner,
  TTDefaultInner,
  TTButton,
  TTCard,
  TTProgressBarContainer,
  TTProgressBarCircle,
  TTProgressBarArrow,
  TTProgressBarArrowContainer,
  TTVoteHeadline,
  TTVoteButton,
  TTVoteButtonText,
  TTResultsButtonLink,
} from '../styles';

describe('Top Trumps styles', () => {
  describe('<TTIntroInner />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<TTIntroInner imageMobile={'red.jpg'} imageDesktop={'blue.jpg'} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTDefaultInner />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<TTDefaultInner imageMobile={'red.jpg'} imageDesktop={'blue.jpg'} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTButton />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <TTButton backgroundColour={'#000000'} hoverBackgroundColour={'#ffffff'} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTCard />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<TTCard imageMobile={'red.jpg'} imageDesktop={'blue.jpg'} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTProgressBarContainer />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <TTProgressBarContainer bkgnd={'#000000'} borderColour={'#000000'} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTProgressBarCircle />', () => {
    it('renders correctly when viewed', () => {
      const wrapper = shallow(<TTProgressBarCircle viewed={true} inactiveColour={'#000000'} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly when not viewed', () => {
      const wrapper = shallow(<TTProgressBarCircle viewed={false} inactiveColour={'#000000'} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTProgressBarArrow />', () => {
    it('renders correctly left arrow and disabled', () => {
      const wrapper = shallow(<TTProgressBarArrow right={false} disabled={true} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly right arrow and disabled', () => {
      const wrapper = shallow(<TTProgressBarArrow right={true} disabled={true} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly left arrow and enabled', () => {
      const wrapper = shallow(<TTProgressBarArrow right={false} disabled={false} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly right arrow and enabled', () => {
      const wrapper = shallow(<TTProgressBarArrow right={true} disabled={false} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTProgressBarArrowContainer />', () => {
    it('renders correctly on right', () => {
      const wrapper = shallow(<TTProgressBarArrowContainer right={true} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly on left', () => {
      const wrapper = shallow(<TTProgressBarArrowContainer right={false} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTVoteHeadline />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<TTVoteHeadline colour={'#000000'} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTVoteButton />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <TTVoteButton colour={'#000000'} hoverBackgroundColour={'#000000'} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTVoteButtonText />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<TTVoteButtonText colour={'#000000'} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<TTResultsButtonLink />', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <TTResultsButtonLink colour={'#000000'} hoverBackgroundColour={'#000000'} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});

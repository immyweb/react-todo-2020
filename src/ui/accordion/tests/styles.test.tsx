import * as React from 'react';
import { shallow } from 'enzyme';

import { Border, Link, TextHolder, Item, Header, Title, Panel, Copy } from '../styles';

describe('<Border />', () => {
  it('renders correctly with background colour', () => {
    const wrapper = shallow(<Border colour={'#000000'} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Item />', () => {
  it('renders correctly without border', () => {
    const wrapper = shallow(
      <Item
        open={true}
        index={1}
        theme={{ primary: '#000000', secondary: '#ffffff' }}
        border={false}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with border', () => {
    const wrapper = shallow(
      <Item
        open={true}
        index={1}
        theme={{ primary: '#000000', secondary: '#ffffff' }}
        border={true}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when open', () => {
    const wrapper = shallow(
      <Item open={true} index={1} theme={{ primary: '#000000', secondary: '#ffffff' }} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when closed', () => {
    const wrapper = shallow(
      <Item open={false} index={1} theme={{ primary: '#000000', secondary: '#ffffff' }} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<TextHolder />', () => {
  it('renders correctly with no badge', () => {
    const wrapper = shallow(<TextHolder hasBadge={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with badge', () => {
    const wrapper = shallow(<TextHolder hasBadge={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Header />', () => {
  it('renders correctly when opened', () => {
    const wrapper = shallow(<Header open={true} colour={'#000000'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when closed', () => {
    const wrapper = shallow(<Header open={false} colour={'#000000'} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Title />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Title index={1} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Panel />', () => {
  it('renders correctly when opened', () => {
    const wrapper = shallow(<Panel open={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when closed', () => {
    const wrapper = shallow(<Panel open={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Copy />', () => {
  it('renders correctly with background colour', () => {
    const wrapper = shallow(<Copy colour={'#000000'} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Link />', () => {
  it('renders correctly with background colour', () => {
    const wrapper = shallow(<Link colour={'#000000'} />);
    expect(wrapper).toMatchSnapshot();
  });
});

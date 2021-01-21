import * as React from 'react';
import { shallow } from 'enzyme';

import { ResultsLabels } from './results-labels';
import { ResultsProfileLabel } from './styles';

const players = [
  {
    id: 'willian',
    fname: '',
    sName: 'Willian',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/WILLIAN_mobile_@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/WILLIAN_desktop_@2x.jpg',
    club: 'Chelsea',
    clubBadge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/chelsea_@2x.png',
    age: 29,
    fee: '£60m',
    position: 'CAM',
    voted: true,
    selected: false,
    active: false,
    idx: 0,
    voteCount: 20,
  },
  {
    id: 'a_sandro',
    fname: 'Alex',
    sName: 'Sandro',
    imageMobile: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/SANDRO_mobile_@2x.jpg',
    imageDesktop: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/SANDRO_desktop_@2x.jpg',
    club: 'Juventus',
    clubBadge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/juventus_@2x1.png',
    age: 27,
    fee: '£60m',
    position: 'LB',
    voted: true,
    selected: true,
    active: false,
    idx: 1,
    voteCount: 50,
  },
  {
    id: 's_m_savic',
    fname: 'Sergej',
    sName: 'Milinković-Savić',
    imageMobile:
      'https://www.thesun.co.uk/wp-content/uploads/2018/07/MILINKOVIC-SAVIC_mobile_@2x.jpg',
    imageDesktop:
      'https://www.thesun.co.uk/wp-content/uploads/2018/07/MILINKOVIC-SAVIC_desktop_@2x.jpg',
    club: 'SS Lazio',
    clubBadge: 'https://www.thesun.co.uk/wp-content/uploads/2018/07/lazio_@2x1.png',
    age: 23,
    fee: '£70m',
    position: 'CM',
    voted: false,
    selected: false,
    active: true,
    idx: 2,
    voteCount: 60,
  },
];

function shallowRender(props?: any) {
  return shallow(<ResultsLabels sortedProfiles={players} {...props} />);
}

describe('<ResultsLabels />', () => {
  it('renders correctly', () => {
    const wrapper = shallowRender();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct number of labels', () => {
    const wrapper = shallowRender();
    const labels = wrapper.find(ResultsProfileLabel);
    expect(labels.length).toEqual(3);
    const wrapper2 = shallowRender({ sortedProfiles: [] });
    const labels2 = wrapper2.find(ResultsProfileLabel);
    expect(labels2.length).toEqual(0);
  });

  it('renders empty div if no profile provided', () => {
    const wrapper = shallowRender({ sortedProfiles: [] });
    const labels = wrapper.find(ResultsProfileLabel);
    expect(labels.length).toEqual(0);
  });
});

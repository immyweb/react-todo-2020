import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TransferCard from '.';

const data = {
  config: {
    color: '#266773',
  },
  content: {
    name: 'Frenkie De Jong',
    stats: [
      { stat: 'Height', value: "5'11''" },
      { stat: 'Age', value: '21' },
      { stat: 'FIFA 19 Rating', value: '77' },
      { stat: 'Contract until', value: '2022' },
    ],
    copy: [
      'Barcelona great Xavi said De Jong reminds him of Sergio Busquets',
      'Was voted best young player in Holland in 2017',
      'Part of Ajax side that lost the 2017 Europa League final to Man Utd',
    ],
    cardImage: 'https://www-dev.uat-thesun.co.uk/wp-content/uploads/2018/12/DeJong.png',
    backgroundImageUrl: 'https://www-dev.uat-thesun.co.uk/wp-content/uploads/2018/12/bg.png',
    sections: [
      {
        title: 'Strengths',
        copy: 'Acceleration, Pace, Agility',
      },
      {
        title: 'Our Verdict',
        copy:
          'Pepe has an impressive array of skills so clubs should buy him now before his price rockets',
      },
    ],
  },
};

const unwrapGlamourousText = (wrapper: ShallowWrapper) => wrapper.childAt(0).text();

describe('Transfer Card', () => {
  it('has an Overflow component', () => {
    const wrapper = shallow(<TransferCard {...data} />);
    expect(wrapper.find('OverFlow').exists()).toBe(true);
  });
  it('displays the name in the data', () => {
    const wrapper = shallow(<TransferCard {...data} />);
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--name').first())).toBe(
      'Frenkie De Jong',
    );
  });
  it('displays the copy in the data', () => {
    const wrapper = shallow(<TransferCard {...data} />);
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--copy').at(0))).toBe(
      data.content.copy[0],
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--copy').at(1))).toBe(
      data.content.copy[1],
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--copy').at(2))).toBe(
      data.content.copy[2],
    );
  });
  it('displays the stats in the data', () => {
    const wrapper = shallow(<TransferCard {...data} />);
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--stat-name').at(0))).toBe(
      data.content.stats[0].stat,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--stat-value').at(0))).toBe(
      data.content.stats[0].value,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--stat-name').at(1))).toBe(
      data.content.stats[1].stat,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--stat-value').at(1))).toBe(
      data.content.stats[1].value,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--stat-name').at(2))).toBe(
      data.content.stats[2].stat,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--stat-value').at(2))).toBe(
      data.content.stats[2].value,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--stat-name').at(3))).toBe(
      data.content.stats[3].stat,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--stat-value').at(3))).toBe(
      data.content.stats[3].value,
    );
  });
  it('displays the sections in the data', () => {
    const wrapper = shallow(<TransferCard {...data} />);
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--section--title').at(0))).toBe(
      data.content.sections[0].title,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--section--copy').at(0))).toBe(
      data.content.sections[0].copy,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--section--title').at(1))).toBe(
      data.content.sections[1].title,
    );
    expect(unwrapGlamourousText(wrapper.find('.transfer-card--section--copy').at(1))).toBe(
      data.content.sections[1].copy,
    );
  });
  it('displays the card image provided', () => {
    const wrapper = shallow(<TransferCard {...data} />);
    expect(
      (wrapper
        .find('.transfer-card--card')
        .first()
        .props() as any).cardImage,
    ).toBe(data.content.cardImage);
  });
});

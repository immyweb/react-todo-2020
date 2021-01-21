import * as React from 'react';
import { shallow } from 'enzyme';
import AccordionItemBody from '../accordion-item-body';
import { Copy, Link } from '../styles';
import { Image } from '../../../styles/globals';
import { colours } from '../../../styles/colours';

const copy =
  'Harry flew straight from his Caribbean tour to Toronto to be with Ms Markle, making a 1,700-mile (2,736 km) detour instead of flying to London.';

const theme = {
  primary: colours.$fabulous,
  secondary: colours.$fabulousSecondary,
};

function shallowRender(props?: any) {
  return shallow(
    <AccordionItemBody
      title={'Title'}
      imageTop={'imagetop.jpg'}
      imageBottom={''}
      copy={copy}
      active={false}
      linkUrl={'http://www.thesun.co.uk'}
      linkText={'A link'}
      theme={theme}
      {...props}
    />,
  );
}

describe('<AccordionItemBody />', () => {
  it('should display imageTop if provided', () => {
    const wrapper = shallowRender();
    expect(wrapper.dive().find(Image)).toHaveLength(1);
  });

  it('should not display imageTop if not provided', () => {
    const wrapper = shallowRender({ imageTop: '' });
    expect(wrapper.dive().find(Image)).toHaveLength(0);
  });

  it('should display imageBottom if provided', () => {
    const wrapper = shallowRender({
      imageTop: '',
      imageBottom: 'imageBottom.jpg',
    });
    expect(wrapper.dive().find(Image)).toHaveLength(1);
  });

  it('should display copy', () => {
    const wrapper = shallowRender();
    expect(wrapper.dive().find(Copy)).toHaveLength(1);
  });

  it('should not display copy if not provided', () => {
    const wrapper = shallowRender({ copy: '' });
    expect(wrapper.find(Copy)).toHaveLength(0);
  });

  it('should display link if link provided', () => {
    const wrapper = shallowRender();
    expect(wrapper.dive().find(Link)).toHaveLength(1);
  });

  it('should not display link if link not provided', () => {
    const wrapper = shallowRender({ linkUrl: '', linkText: '' });
    expect(wrapper.dive().find(Link)).toHaveLength(0);
  });
});

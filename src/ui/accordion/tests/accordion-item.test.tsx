import * as React from 'react';
import { shallow } from 'enzyme';
import AccordionItem from '../accordion-item';
import { colours } from '../../../styles/colours';
// import { podTracker } from '../../../utils/pod-tracker-utils';

// jest.mock('../../../utils/pod-tracker-utils', () => ({
//   podTracker: {
//     click: jest.fn(),
//   },
// }));

const content = {
  title: 'Harry makes a detour to see Meghan',
  subTitle: 'Lorem Ipsum',
  imageTop:
    'https://i1.wp.com/www.thesun.co.uk/wp-content/uploads/2017/12/nintchdbpict000369470973.jpg?zoom=2&crop=0px%2C0px%2C2342px%2C1562px&resize=300%2C192&ssl=1',
  imageBottom: '',
  copy:
    'Harry flew straight from his Caribbean tour to Toronto to be with Ms Markle, making a 1,700-mile (2,736 km) detour instead of flying to London.',
};

const theme = {
  primary: colours.$fabulous,
  secondary: colours.$fabulousSecondary,
};

function shallowRender(props?: any) {
  return shallow(
    <AccordionItem item={content} theme={theme} expanded={false} border={false} index={1} id={'Megain'} {...props} />,
  );
}

describe('<AccordionItem />', () => {
  it('toggles active state when toggle function is called', () => {
    const wrapper = shallowRender();
    const instance = wrapper.instance() as AccordionItem;
    instance.toggle();
    expect(wrapper.state('active')).toBe(true);
    instance.toggle();
    expect(wrapper.state('active')).toBe(false);
  });

  // it('tracks event when toggle function is called', () => {
  //   const wrapper = shallowRender();
  //   const instance = wrapper.instance() as AccordionItem;
  //   instance.toggle();

  //   expect(podTracker.click).toHaveBeenCalledWith({
  //     description: 'accordion:Harry makes a detour to see Meghan',
  //     id: 'accordion:Megain',
  //   });
  // });

  it('item is set to active if highlight prop is provided', () => {
    const wrapper = shallowRender({ expanded: true });
    expect(wrapper.state('active')).toBe(true);
  });

  it('item is set to not active if highlight prop is not provided', () => {
    const wrapper = shallowRender();
    expect(wrapper.state('active')).toBe(false);
  });
});

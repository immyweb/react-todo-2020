import * as React from 'react';

import { SlideNav } from './styles';
import { ICarouselNav, Direction } from './types';

import { ReactComponent as ChevronLeft } from '../images/icons/chevron-solid-left.svg';
import { ReactComponent as ChevronRight } from '../images/icons/chevron-solid-right.svg';

const CarouselNav = (props: ICarouselNav) => {
  const { onClick, direction, handleNavClick } = props;

  return (
    <SlideNav onClick={() => handleNavClick(onClick, direction)} direction={direction}>
      {direction === Direction.PREV ? <ChevronLeft width={18} /> : <ChevronRight width={18} />}
      {/* <Icon
        iconName={direction === Direction.PREV ? 'chevron-solid-left' : 'chevron-solid-right'}
        iconColour={colour}
        iconSize={18}
      /> */}
    </SlideNav>
  );
};

export default CarouselNav;

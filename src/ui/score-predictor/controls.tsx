import * as React from 'react';
import { colours } from '../../styles/colours';
import Icon from '../icon/icon';
import { NavHolder, Nav, PageIndex, CurrentNum, SlideCount } from './styles';

interface IProps {
  currentSlide: number;
  slideCount: number;
  onTogglePrev(): void;
  onToggleNext(): void;
}

const Controls: React.SFC<IProps> = ({ currentSlide, slideCount, onTogglePrev, onToggleNext }) => {
  const firstPage: boolean = currentSlide === 0 ? true : false;
  const lastPage: boolean = currentSlide === slideCount - 1 ? true : false;

  return (
    <NavHolder>
      <Nav onClick={onTogglePrev} disabled={firstPage}>
        <Icon
          iconName="chevron-solid-left"
          iconColour={firstPage ? colours.$lightGrey : colours.$offBlack}
          iconSize={18}
        />
      </Nav>
      <PageIndex>
        <CurrentNum>{`${currentSlide + 1}`}</CurrentNum> /{' '}
        <SlideCount>{`${slideCount}`}</SlideCount>
      </PageIndex>
      <Nav onClick={onToggleNext} disabled={lastPage}>
        <Icon
          iconName="chevron-solid-right"
          iconColour={lastPage ? colours.$lightGrey : colours.$offBlack}
          iconSize={18}
        />
      </Nav>
    </NavHolder>
  );
};

export default Controls;

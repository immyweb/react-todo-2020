import * as React from 'react';

import Icon from '../icon/icon';
import { colours } from '../../styles/colours';

import { NavHolder, Nav, PageIndex, CurrentNum } from './styles';

interface IProps {
  primary: string;
  currentSlide: number;
  slideCount: number;
  onTogglePrev(): void;
  onToggleNext(): void;
}

const Controls: React.FC<IProps> = ({
  primary,
  currentSlide,
  slideCount,
  onTogglePrev,
  onToggleNext,
}) => {
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
        <CurrentNum colour={primary}>{`${currentSlide + 1}`}</CurrentNum> /{' '}
        <span className="control__slidecount">{`${slideCount}`}</span>
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

import { CustomArrowProps } from 'react-slick';

export interface ICarouselNav extends CustomArrowProps {
  colour: string;
  direction: Direction;
  handleNavClick(onClick: any, direction: Direction): void;
}

export enum Direction {
  PREV = 'PREV',
  NEXT = 'NEXT',
}

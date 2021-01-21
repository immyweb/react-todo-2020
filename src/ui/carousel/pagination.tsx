import * as React from 'react';
import { TimelineLite } from 'gsap';

import { Direction } from './types';
import { ITheme } from '../../types/';
import { PaginationContainer, Dot } from './styles';

interface IProps {
  theme: ITheme;
  animateDirection: string;
}

const items = [{ key: 'dot1' }, { key: 'dot2' }, { key: 'dot3' }, { key: 'dot4' }, { key: 'dot5' }];

export const rearrangeItems = (dots: any, moveFromIndex: number, moveToIndex: number) => {
  const movingItem = dots[moveFromIndex];
  dots.splice(moveFromIndex, 1);
  dots.splice(moveToIndex, 0, movingItem);

  return dots;
};

export default class Pagination extends React.Component<IProps, {}> {
  private pagiContainer: any = null;

  componentDidMount() {
    if (this.pagiContainer !== null) {
      const firstDot = this.pagiContainer.firstChild;
      const secondDot = this.pagiContainer.childNodes[1];
      const thirdDot = this.pagiContainer.childNodes[2];
      const fourthDot = this.pagiContainer.childNodes[3];
      const fifthDot = this.pagiContainer.lastChild;
      const tl = new TimelineLite();
      tl.set(firstDot, { width: 5, height: 5, opacity: 0.4 })
        .set(secondDot, { width: 10, height: 10, opacity: 0.6 })
        .set(thirdDot, { width: 14, height: 14, opacity: 1.0 })
        .set(fourthDot, { width: 10, height: 10, opacity: 0.6 })
        .set(fifthDot, { width: 5, height: 5, opacity: 0.4 });
    }
  }

  animateNext() {
    const secondDot = this.pagiContainer.childNodes[1];
    const thirdDot = this.pagiContainer.childNodes[2];
    const fourthDot = this.pagiContainer.childNodes[3];
    const fifthDot = this.pagiContainer.lastChild;

    const tl = new TimelineLite();
    tl.to(secondDot, 0.5, { width: 5, height: 5, opacity: 0.4 })
      .to(thirdDot, 0.5, { width: 10, height: 10, opacity: 0.6 }, '-=0.5')
      .to(fourthDot, 0.5, { width: 14, height: 14, opacity: 1.0 }, '-=0.5')
      .to(fifthDot, 0.5, { width: 10, height: 10, opacity: 0.6 }, '-=0.5');

    rearrangeItems(items, 0, 4);
  }

  animatePrev() {
    const firstDot = this.pagiContainer.firstChild;
    const secondDot = this.pagiContainer.childNodes[1];
    const thirdDot = this.pagiContainer.childNodes[2];
    const fourthDot = this.pagiContainer.childNodes[3];

    const tl = new TimelineLite();
    tl.to(firstDot, 0.5, { width: 10, height: 10, opacity: 0.6 })
      .to(secondDot, 0.5, { width: 14, height: 14, opacity: 1.0 }, '-=0.5')
      .to(thirdDot, 0.5, { width: 10, height: 10, opacity: 0.6 }, '-=0.5')
      .to(fourthDot, 0.5, { width: 5, height: 5, opacity: 0.4 }, '-=0.5');

    rearrangeItems(items, 4, 0);
  }

  render() {
    const { theme, animateDirection } = this.props;
    if (animateDirection === Direction.NEXT) {
      this.animateNext();
    } else if (animateDirection === Direction.PREV) {
      this.animatePrev();
    }
    return (
      <PaginationContainer innerRef={(el) => (this.pagiContainer = el)} className={'carousel-pagination'}>
        {items.map((item) => {
          return <Dot colour={theme.primary} key={item.key} label={item.key} />;
        })}
      </PaginationContainer>
    );
  }
}

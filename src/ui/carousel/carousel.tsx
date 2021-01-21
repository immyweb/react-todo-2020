import * as React from 'react';

import Slider, { SwipeDirection } from 'react-slick';
import CarouselNav from './carousel-nav';
import Pagination from './pagination';
import { CarouselContainer, Slide, SlideLink, SlideImg, SlideLabel } from './styles';
import { breakPoints } from '../../styles/breakpoints';
import { ComponentHeader } from '../component-header/';

import { Direction } from './types';
import { ICarousel, IItem, ITheme } from '../../types/';

import { IComponentProps } from '../../types/tracking';

import 'slick-carousel/slick/slick.css';

export const convertDirection = (direction: SwipeDirection) => {
  if (direction === 'left') {
    return Direction.NEXT;
  }
  return Direction.PREV;
};

interface IProps extends ICarousel, IComponentProps {
  isCmsPreviewMobile?: boolean;
}

interface IState {
  direction: string;
}

export default class Carousel extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      direction: '',
    };
  }

  animatePagination(direction: Direction) {
    if (direction === Direction.NEXT) {
      this.setState({ direction: Direction.NEXT });
    }
    if (direction === Direction.PREV) {
      this.setState({ direction: Direction.PREV });
    }
  }

  handleNavClick = (onClick: any, direction: Direction) => {
    onClick();
    this.animatePagination(direction);
  };

  onHandleSlideLink(url: string) {}

  renderSlides(data: IItem[], theme: ITheme) {
    const { primary } = theme;
    const {
      config: { commercial },
    } = this.props;
    return data.map((item) => {
      return (
        <Slide key={item.label} className={'carousel-item'}>
          {item.url ? (
            <SlideLink
              href={item.url}
              target="_blank"
              {...(commercial ? { rel: 'nofollow' } : null)}
              onClick={() => this.onHandleSlideLink(item.url as string) as any}
            >
              <SlideImg src={item.image} alt={item.label} borderColour={primary} className={'carousel-item-image'} />
              {item.label && (
                <SlideLabel txtColour={primary} className={'carousel-item-label'}>
                  {item.label}
                </SlideLabel>
              )}
            </SlideLink>
          ) : (
            <div>
              <SlideImg src={item.image} alt={item.label} borderColour={primary} className={'carousel-item-image'} />
              {item.label && (
                <SlideLabel txtColour={primary} className={'carousel-item-label'}>
                  {item.label}
                </SlideLabel>
              )}
            </div>
          )}
        </Slide>
      );
    });
  }

  render() {
    const {
      config: { theme },
      content: { headline, items },
      isCmsPreviewMobile,
    } = this.props;

    const defaultSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipe: true,
      ...(isCmsPreviewMobile && { centerMode: true, slidesToShow: 1, initialSlide: 1 }),
      responsive: [
        {
          breakpoint: breakPoints.$tabletPortrait,
          settings: {
            slidesToShow: 3,
            initialSlide: 0,
          },
        },
        {
          breakpoint: breakPoints.$mobileInner,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            initialSlide: 1,
          },
        },
      ],
      onSwipe: (swipeDirection: SwipeDirection) => {
        this.animatePagination(convertDirection(swipeDirection));
      },
    };

    return (
      <CarouselContainer>
        <ComponentHeader
          className={'carousel-header'}
          title={headline}
          theme={{
            primary: theme.primary,
            secondary: theme.secondary,
          }}
          background
        />
        <Slider
          {...defaultSettings}
          nextArrow={
            <CarouselNav direction={Direction.NEXT} colour={theme.primary} handleNavClick={this.handleNavClick} />
          }
          prevArrow={
            <CarouselNav direction={Direction.PREV} colour={theme.primary} handleNavClick={this.handleNavClick} />
          }
        >
          {this.renderSlides(items, theme)}
        </Slider>
        <Pagination theme={theme} animateDirection={this.state.direction} />
        {/* <OverFlow color={theme.primary} /> */}
      </CarouselContainer>
    );
  }
}

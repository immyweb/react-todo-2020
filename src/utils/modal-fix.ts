// Fix for Page swipe 'will-change' & 'transform' property breaking 'position fixed'
export function setSwipeEnabled(enabled: boolean) {
  const carouselScroller: any | null = document.querySelector('#article-carousel-scroller');
  if (carouselScroller) {
    if (enabled) {
      carouselScroller.style.willChange = 'initial';
      carouselScroller.style.transform = 'none';
    } else {
      carouselScroller.style.willChange = 'transform';
      carouselScroller.style.transform = 'translateX(0px)';
    }
  }
}

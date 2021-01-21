import * as React from 'react';
import Draggable from 'react-draggable';
import { ComponentHeader } from '../component-header/';

import {
  RevealerWrapper,
  RevealerContainer,
  LabelContainer,
  Label,
  Modified,
  Handle,
  IconHolder,
  Footer,
} from './styles';
import { ReactComponent as DragIcon } from '../images/slider-icon.svg';

import { IImageRevealer } from './types';

import { IComponentProps } from '../../types/tracking';

interface IProps extends IImageRevealer, IComponentProps {}

interface IState {
  loaded: boolean;
  width: number;
  sliderValue: number;
  startValue: number;
  controlledPosition: {
    x: number;
    y: number;
  };
  interactedWith: boolean;
}

const alignment = {
  Left: 7,
  Right: 93,
  Center: 50,
};

export class ImageRevealer extends React.Component<IProps, IState> {
  private imgRevealr: any = null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      loaded: !!props.isCmsPreview,
      width: 0,
      sliderValue: 50,
      startValue: 0,
      controlledPosition: { x: 0, y: 0 },
      interactedWith: false,
    };
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.config.startPosition !== prevProps.config.startPosition) {
      const startX = (this.state.width * alignment[this.props.config.startPosition]) / 100;
      this.setState({
        sliderValue: alignment[this.props.config.startPosition],
        controlledPosition: { x: startX - 22.5, y: 0 },
        interactedWith: true,
      });
    }
  }

  componentDidMount() {
    // This is so the slider stays in correct postion when
    // toggling between tabs in CMS Live Preview
    if (this.imgRevealr !== null) {
      const width = this.imgRevealr.getBoundingClientRect().width;
      const startX = (width * alignment[this.props.config.startPosition]) / 100;
      this.setState({
        width,
        sliderValue: alignment[this.props.config.startPosition],
        controlledPosition: { x: startX - 22.5, y: 0 },
      });
    }
  }

  onImgLoad(e: React.FormEvent<HTMLImageElement>) {
    if (this.imgRevealr !== null) {
      const width = this.imgRevealr.getBoundingClientRect().width;
      const startX = (width * alignment[this.props.config.startPosition]) / 100;

      this.setState({
        width,
        loaded: true,
        sliderValue: alignment[this.props.config.startPosition],
        startValue: alignment[this.props.config.startPosition],
        controlledPosition: { x: startX - 22.5, y: 0 },
      });
    }
  }

  handleDrag = (e: MouseEvent, position: any) => {
    e.stopPropagation();

    const { x, y } = position;
    const centerX = x + 22.5;
    const percDiff = (centerX / this.state.width) * 100;

    this.setState({
      sliderValue: percDiff,
      controlledPosition: { x, y },
      interactedWith: true,
    });
  };

  render() {
    const { theme } = this.props.config;
    const { original, modified, headline } = this.props.content;
    const { sliderValue, loaded, width, controlledPosition, interactedWith } = this.state;

    return (
      <section ref={(imgRevealr) => (this.imgRevealr = imgRevealr as HTMLElement)}>
        <ComponentHeader
          className={'image-revealer-header'}
          title={headline}
          theme={{
            primary: theme.primary,
            secondary: theme.secondary,
          }}
          background
        />
        <RevealerWrapper loaded={loaded}>
          {(modified.label || original.label) && (
            <LabelContainer>
              <Label opacity={sliderValue / 100} className={'image-revealer-label-modified'}>
                {modified.label}
              </Label>
              <Label opacity={-sliderValue / 100 + 1} className={'image-revealer-label-original'}>
                {original.label}
              </Label>
            </LabelContainer>
          )}

          <RevealerContainer className={'image-revealer-body'}>
            <img
              className={'image-revealer-original-img'}
              src={original.src}
              onLoad={(e) => this.onImgLoad(e)}
              alt={`Original`}
            />
            <Modified
              className={'image-revealer-modified-img'}
              src={modified.src}
              style={{ backgroundSize: 'auto 100%', width: `${sliderValue}%` }}
            />
            <Draggable
              axis={'x'}
              bounds={{ top: 0, left: 0 - 22.5, right: width - 20.5, bottom: 0 }}
              position={controlledPosition}
              onDrag={this.handleDrag}
            >
              <Handle className={'image-revealer-handle'}>
                <IconHolder theme={theme} endAnimation={interactedWith}>
                  <DragIcon width={'100%'} height={'100%'} />
                </IconHolder>
              </Handle>
            </Draggable>
          </RevealerContainer>
          <Footer theme={theme} disappear={interactedWith}>
            SLIDE TO REVEAL
          </Footer>
        </RevealerWrapper>
        {/* <OverFlow color={theme.secondary} /> */}
      </section>
    );
  }
}

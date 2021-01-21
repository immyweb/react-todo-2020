import * as React from 'react';
import Measure from 'react-measure';

import { ModalContainer, ModalInner, ModalContent, BtnClose, BtnOpen } from './styles';
import { setSwipeEnabled } from '../../utils/modal-fix';

import { ReactComponent as CloseIcon } from '../images/icons/close-solid.svg';

interface IProps {
  content: React.ReactNode;
  standalone: boolean;
  openTxt?: string;
  active?: boolean;
  onCloseModal?: () => void;
}

interface IState {
  showModal: boolean;
  outerHeight: number;
  innerHeight: number;
  innerTaller: boolean;
}

export class Modal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showModal: props.active ? props.active : false,
      outerHeight: 0,
      innerHeight: 0,
      innerTaller: false,
    };
  }

  UNSAFE_componentWillMount() {
    setSwipeEnabled(true);
  }

  componentDidMount() {
    this.setState({ outerHeight: window.innerHeight - 40 }); // subtrack padding top/bottom
  }

  componentWillUnmount() {
    this.setState({
      showModal: false,
      innerTaller: false,
      outerHeight: 0,
    });

    setSwipeEnabled(false);
  }

  onClose() {
    if (this.props.onCloseModal) {
      this.props.onCloseModal();
    }
  }

  toggle() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    const { standalone, openTxt, content } = this.props;
    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          const iHeight = contentRect.bounds!.height;
          this.setState({ innerHeight: iHeight + 110 }); // add padding top/bottom
          if (this.state.innerHeight > this.state.outerHeight) {
            this.setState({ innerTaller: true });
          }
        }}
      >
        {({ measureRef }) => (
          <div>
            {standalone && <BtnOpen onClick={() => this.toggle()}>{openTxt ? openTxt : 'Open'}</BtnOpen>}
            <ModalContainer open={this.state.showModal}>
              <ModalInner innerTaller={this.state.innerTaller}>
                <ModalContent innerTaller={this.state.innerTaller}>
                  <div ref={measureRef}>{content}</div>
                </ModalContent>
                <BtnClose onClick={standalone ? () => this.toggle() : () => this.onClose()}>
                  <CloseIcon />
                </BtnClose>
              </ModalInner>
            </ModalContainer>
          </div>
        )}
      </Measure>
    );
  }
}

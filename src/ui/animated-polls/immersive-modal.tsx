import * as React from 'react';
import Icon from '../icon/icon';

import { ModalContainer, ModalInner, ModalContent, BtnClose } from './styles';
import { colours } from '../../styles/colours';
import { setSwipeEnabled } from '../../utils/modal-fix';

interface IProps {
  content: React.ReactNode;
  active?: boolean;
  onCloseModal?: () => void;
}

interface IState {
  showModal: boolean;
}

export class ImmersiveModal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showModal: props.active ? props.active : false,
    };
  }

  UNSAFE_componentWillMount() {
    setSwipeEnabled(true);
  }

  componentWillUnmount() {
    this.setState({
      showModal: false,
    });

    setSwipeEnabled(false);
  }

  onClose() {
    if (this.props.onCloseModal) {
      this.props.onCloseModal();
    }
  }

  render() {
    const { content } = this.props;
    return (
      <ModalContainer open={this.state.showModal} onTouchStart={(e) => e.stopPropagation()}>
        <ModalInner>
          <ModalContent>{content}</ModalContent>
          <BtnClose onClick={() => this.onClose()}>
            <Icon iconName="cross-solid" iconSize={26} iconColour={colours.$white} />
          </BtnClose>
        </ModalInner>
      </ModalContainer>
    );
  }
}

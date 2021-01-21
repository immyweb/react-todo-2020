import * as React from 'react';

import { colours } from '../../styles/colours';

import Button from '../buttons/buttons';
import { MessageContainer, Heading, Graphic, Copy } from './styles';

interface IProps {
  slideWidth: number;
  onConfirm(): void;
}

export const Confirmation: React.SFC<IProps> = ({ slideWidth, onConfirm }) => {
  return (
    <MessageContainer width={slideWidth}>
      <div>
        <Graphic src="https://www.thesun.co.uk/wp-content/uploads/2018/03/celebrate.png" />
        <Heading fontColour={colours.$football}>NICE ONE!</Heading>
        <Copy>You're ready to go!</Copy>
        <Button background={colours.$football} onClick={onConfirm}>
          See final table
        </Button>
      </div>
    </MessageContainer>
  );
};

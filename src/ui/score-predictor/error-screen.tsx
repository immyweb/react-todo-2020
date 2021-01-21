import * as React from 'react';

import { colours } from '../../styles/colours';

import Button from '../buttons/buttons';
import { MessageContainer, Heading, Graphic } from './styles';

const ErrorScreen = () => {
  const refreshPage = () => {
    location.reload();
  };

  return (
    <MessageContainer errorScreen={true}>
      <div>
        <Graphic src="https://www.thesun.co.uk/wp-content/uploads/2018/03/banana.png" />
        <Heading fontColour={colours.$football}>UH OH!</Heading>
        <Heading>THERE WAS A LOADING ERROR</Heading>
        <Button background={colours.$football} onClick={() => refreshPage()}>
          Refresh page
        </Button>
      </div>
    </MessageContainer>
  );
};

export default ErrorScreen;

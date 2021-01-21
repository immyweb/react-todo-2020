import * as React from 'react';

import { ErrorGraphic } from './error-graphic';
import { ErrorWrapper, Heading } from './styles';
import Button from '../buttons/buttons';
import { colours } from '../../styles/colours';

import { ITheme } from '../../types/theme';

interface IProps {
  theme?: ITheme;
  backgroundColour?: string;
}

const defaultProps = {
  theme: {
    primary: colours.$main,
    secondary: colours.$mainSecondary,
  },
  backgroundColour: colours.$white,
};

export const Error: React.FC<IProps> = ({ backgroundColour, theme }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <ErrorWrapper backgroundColour={backgroundColour ? backgroundColour : defaultProps.backgroundColour}>
      <ErrorGraphic colour={theme ? theme.primary : defaultProps.theme.primary} />
      <Heading fontColour={theme ? theme.primary : defaultProps.theme.primary}>UH OH!</Heading>
      <Heading marginBottom={15}>THERE WAS A LOADING ERROR</Heading>
      <Button background={theme ? theme.primary : defaultProps.theme.primary} onClick={() => refreshPage()}>
        Refresh page
      </Button>
    </ErrorWrapper>
  );
};

Error.defaultProps = defaultProps;

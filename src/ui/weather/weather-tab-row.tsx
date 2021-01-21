import * as React from 'react';

import { WeatherTabRowContainer } from './styles';

interface IProps {
  children: JSX.Element[];
  onClick: (x: number) => void;
}
interface IState {
  selectedIndex: number;
}

export class WeatherTabRow extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  clickTab(newIndex: number, onClick: (x: number) => void) {
    this.setState({
      selectedIndex: newIndex,
    });
    onClick(newIndex);
  }

  render() {
    const { children, onClick } = this.props;
    const clickableChildren = React.Children.map(children, (child, i) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        key: i,
        selected: i === this.state.selectedIndex,
        onClick: this.clickTab.bind(this, i, onClick),
      });
    });
    return (
      <WeatherTabRowContainer className="WeatherTabRow">{clickableChildren}</WeatherTabRowContainer>
    );
  }
}

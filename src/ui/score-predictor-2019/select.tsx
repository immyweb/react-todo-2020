import * as React from 'react';

import { FixtureSelect } from './styles';

interface IProps {
  team: string;
  startPrediction: number;
  onSelectTeam(value: string): void;
}

export default class Select extends React.Component<IProps, {}> {
  state = {
    value: '',
  };

  componentDidMount() {
    this.setState({ value: this.props.startPrediction.toString() });
  }

  handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedValue = evt.target.value;
    this.setState({ value: updatedValue });
    this.props.onSelectTeam(updatedValue);
  };

  render() {
    return (
      <FixtureSelect
        value={this.state.value}
        name={this.props.team}
        id={this.props.team}
        onChange={this.handleChange}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </FixtureSelect>
    );
  }
}

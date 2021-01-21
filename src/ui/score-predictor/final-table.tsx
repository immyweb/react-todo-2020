import * as React from 'react';

import { EndScreen } from './end-screen';

import { ITeam, TableType } from './types';
import { FixtureTable, THead, THeading, THBorder, TrPrem, TrChamp, TdTeam, Badge, Headline } from './styles';
import { fonts } from '../../styles/fonts';

interface IProps {
  table: ITeam[];
  timer: number;
  exitUrl: string;
  tableType: string;
}

interface IState {
  showEndScreen: boolean;
}

export class FinalTable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showEndScreen: false,
    };
  }

  componentDidMount() {
    // Display End Screen after 10 seconds
    setTimeout(() => {
      this.setState({ showEndScreen: true });
    }, this.props.timer);
  }

  onGoToUrl = () => {
    window.location.assign(this.props.exitUrl);
  };

  onCloseScreen = () => {
    this.setState({ showEndScreen: false });
  };

  // Preact currently does not support fragments.
  // See https://github.com/developit/preact/issues/946
  // Please refactor this, when support for this feature is enabled.

  // renderContent(result: ITeam, i: number) {
  // 	return (
  // 		<>
  // 			<TdTeam definedWidth={20} fontName={fonts.$Roboto}>
  // 				{i + 1}
  // 			</TdTeam>
  // 			<TdTeam definedWidth={45}>
  // 				<Badge alt={result.team} src={result.badge} />
  // 			</TdTeam>
  // 			<TdTeam fontAlignment="left">{result.team}</TdTeam>
  // 			<TdTeam fontName={fonts.$Roboto}>{result.played}</TdTeam>
  // 			<TdTeam fontName={fonts.$Roboto}>{result.win}</TdTeam>
  // 			<TdTeam fontName={fonts.$Roboto}>{result.draw}</TdTeam>
  // 			<TdTeam fontName={fonts.$Roboto}>{result.lose}</TdTeam>
  // 			<TdTeam>{result.points}</TdTeam>
  // 		</>
  // 	);
  // }

  renderRows(table: ITeam[], tableType: string) {
    return table.map((result, i) => {
      if (tableType === TableType.Prem) {
        return (
          <TrPrem key={result.team} definedHeight={49}>
            <TdTeam definedWidth={20} fontName={fonts.$Roboto}>
              {i + 1}
            </TdTeam>
            <TdTeam definedWidth={45}>
              <Badge alt={result.team} src={result.badge} />
            </TdTeam>
            <TdTeam fontAlignment="left">{result.team}</TdTeam>
            <TdTeam fontName={fonts.$Roboto}>{result.played}</TdTeam>
            <TdTeam fontName={fonts.$Roboto}>{result.win}</TdTeam>
            <TdTeam fontName={fonts.$Roboto}>{result.draw}</TdTeam>
            <TdTeam fontName={fonts.$Roboto}>{result.lose}</TdTeam>
            <TdTeam>{result.points}</TdTeam>
          </TrPrem>
        );
      }
      if (tableType === TableType.Champ) {
        return (
          <TrChamp key={result.team} definedHeight={49}>
            <TdTeam definedWidth={20} fontName={fonts.$Roboto}>
              {i + 1}
            </TdTeam>
            <TdTeam definedWidth={45}>
              <Badge alt={result.team} src={result.badge} />
            </TdTeam>
            <TdTeam fontAlignment="left">{result.team}</TdTeam>
            <TdTeam fontName={fonts.$Roboto}>{result.played}</TdTeam>
            <TdTeam fontName={fonts.$Roboto}>{result.win}</TdTeam>
            <TdTeam fontName={fonts.$Roboto}>{result.draw}</TdTeam>
            <TdTeam fontName={fonts.$Roboto}>{result.lose}</TdTeam>
            <TdTeam>{result.points}</TdTeam>
          </TrChamp>
        );
      }
      return (
        <TrPrem key={result.team} definedHeight={49}>
          <TdTeam definedWidth={20} fontName={fonts.$Roboto}>
            {i + 1}
          </TdTeam>
          <TdTeam definedWidth={45}>
            <Badge alt={result.team} src={result.badge} />
          </TdTeam>
          <TdTeam fontAlignment="left">{result.team}</TdTeam>
          <TdTeam fontName={fonts.$Roboto}>{result.played}</TdTeam>
          <TdTeam fontName={fonts.$Roboto}>{result.win}</TdTeam>
          <TdTeam fontName={fonts.$Roboto}>{result.draw}</TdTeam>
          <TdTeam fontName={fonts.$Roboto}>{result.lose}</TdTeam>
          <TdTeam>{result.points}</TdTeam>
        </TrPrem>
      );
    });
  }

  render() {
    return (
      <div>
        <Headline fontName={fonts.$theSunHeavyCondensed}>Here's how YOU think the table will finish</Headline>
        <FixtureTable>
          <THead>
            <tr>
              <THeading />
              <THeading />
              <THeading borderRight={true} fontAlignment="left">
                Team
              </THeading>
              <THeading definedWidth={35}>
                Pl <THBorder>|</THBorder>
              </THeading>
              <THeading definedWidth={35}>
                W <THBorder>|</THBorder>
              </THeading>
              <THeading definedWidth={35}>
                D <THBorder>|</THBorder>
              </THeading>
              <THeading definedWidth={35}>
                L<THBorder>|</THBorder>
              </THeading>
              <THeading definedWidth={35}>Pts</THeading>
            </tr>
          </THead>
          <tbody>{this.renderRows(this.props.table, this.props.tableType)}</tbody>
        </FixtureTable>
        {this.state.showEndScreen && <EndScreen onCloseScreen={this.onCloseScreen} onGoToUrl={this.onGoToUrl} />}
      </div>
    );
  }
}

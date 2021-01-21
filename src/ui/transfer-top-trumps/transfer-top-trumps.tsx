import * as React from 'react';

import { transferTinderAPI } from '../../api-services';
import { IntroScreen } from './intro-screen';
import { Card } from './card';
import { Controls } from './controls';
import { ProgressBar } from './progress-bar';
import { Results } from './results';
import Error from '../error';

import { TTContainer, Game } from './styles';

import { IComponentProps } from '../../types/tracking';
import { ITheme } from '../../types/theme';
import { IPlayer, Vote, IClub, IIntro, IResults, IVoteCount, ICard } from './types';

interface IProps extends IComponentProps {
  theme: ITheme;
  introScreen: IIntro;
  cardScreen: ICard;
  resultsScreen: IResults;
  targetClub: IClub;
  players: IPlayer[];
}

interface IState {
  players: IPlayer[];
  currentPlayer: IPlayer;
  showIntro: boolean;
  playGame: boolean;
  showResults: boolean;
  playerVotes: IVoteCount[];
  hasErrored: boolean;
}

interface IVoteIds {
  yes: string[];
  no: string[];
}

export class TransferTopTrumps extends React.Component<IProps, IState> {
  cachedWarmState = {};

  initialState = {
    players: [],
    currentPlayer: {
      id: '',
      fname: '',
      sName: '',
      imageMobile: '',
      imageDesktop: '',
      club: '',
      clubBadge: '',
      age: 0,
      fee: '',
      position: '',
      idx: 0,
    },
    showIntro: true,
    playGame: false,
    showResults: false,
    playerVotes: [],
    hasErrored: false,
  };

  constructor(props: IProps) {
    super(props);
    this.state = this.initialState;

    this.updateCard = this.updateCard.bind(this);
  }

  async componentDidMount() {
    const {
      targetClub: { id: targetClubId },
    } = this.props;

    const newPlayers = this.addPlayerStatus(this.props.players);

    // Get votes from API.
    const playerIds = newPlayers.map((player: IPlayer) => player.id);
    try {
      const playerVotes = await transferTinderAPI.getPlayerVotes(targetClubId, playerIds);

      this.cachedWarmState = {
        playerVotes,
        players: newPlayers,
        currentPlayer: newPlayers[0],
      };

      this.setState(this.cachedWarmState);
    } catch (e) {
      this.setState({ hasErrored: true });
    }
  }

  addPlayerStatus(players: IPlayer[]) {
    return players.map((player, i) => {
      if (i === 0) {
        return {
          ...player,
          voted: false,
          selected: false,
          active: true,
          idx: 0,
        };
      }
      return {
        ...player,
        voted: false,
        selected: false,
        active: false,
        idx: i,
      };
    });
  }

  onStartGame = () => {
    this.setState({
      showIntro: false,
      playGame: true,
    });
  };

  onGoToLink = () => {
    window.location.assign(this.props.resultsScreen.exitUrl);
  };

  updateCurrentPlayer(players: IPlayer[], currentPlayer: IPlayer, vote: Vote) {
    return players.map((player: IPlayer) => {
      if (player.id === currentPlayer.id) {
        return {
          ...player,
          voted: true,
          active: false,
          selected: vote === Vote.no ? false : true,
        };
      }
      return player;
    });
  }

  updateCard(currentPlayer: IPlayer, vote: Vote) {
    const {
      targetClub: { id: targetClubId },
    } = this.props;

    // Update current player info
    const newPlayers = this.updateCurrentPlayer(this.state.players, currentPlayer, vote);

    // Move to next player or complete game if last player
    if (currentPlayer.idx! + 1 < this.state.players.length) {
      const nextPlayer = newPlayers[currentPlayer.idx! + 1];

      const newPlayersUpdated = newPlayers.map((player) => {
        if (player.idx === nextPlayer.idx) {
          return {
            ...player,
            active: true,
          };
        }
        return player;
      });

      this.setState({ currentPlayer: nextPlayer, players: newPlayersUpdated });
    } else if (currentPlayer.idx! + 1 === this.state.players.length) {
      this.finishVoting(newPlayers, targetClubId);
    }
  }

  finishVoting = async (newPlayers: IPlayer[], targetClubId: string) => {
    this.setState({
      playGame: false,
      showResults: true,
      players: newPlayers,
    });

    // Send votes to API.
    const votedPlayers = newPlayers.reduce(
      (currentVotedPlayers: IVoteIds, player: IPlayer) => {
        return player.selected
          ? {
              ...currentVotedPlayers,
              yes: [...currentVotedPlayers.yes, player.id],
            }
          : {
              ...currentVotedPlayers,
              no: [...currentVotedPlayers.no, player.id],
            };
      },
      { yes: [], no: [] },
    );

    await transferTinderAPI.addPlayerVotes(targetClubId, votedPlayers.yes, votedPlayers.no);
  };

  render() {
    const { introScreen, resultsScreen, cardScreen, targetClub, theme } = this.props;
    const { showIntro, playGame, showResults, players, currentPlayer, hasErrored } = this.state;

    return hasErrored ? (
      <Error />
    ) : (
      <TTContainer className="ttt-container">
        {showIntro && (
          <IntroScreen
            className={'ttt-intro-screen'}
            {...introScreen}
            onStartGame={this.onStartGame}
            theme={theme}
            targetClub={targetClub}
          />
        )}
        {playGame && (
          <Game className={'ttt-game'}>
            <Card className={'ttt-card'} {...cardScreen} player={currentPlayer} theme={theme} />
            <Controls className={'ttt-controls'} onCastVote={this.updateCard} currentPlayer={currentPlayer} />
            <ProgressBar players={players} theme={theme} />
          </Game>
        )}
        {showResults && (
          <Results
            {...resultsScreen}
            players={this.state.players}
            playerVotes={this.state.playerVotes}
            theme={theme}
            targetClub={targetClub}
            onGoToLink={this.onGoToLink}
          />
        )}
      </TTContainer>
    );
  }
}

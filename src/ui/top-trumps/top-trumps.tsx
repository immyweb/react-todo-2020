import * as React from 'react';

import { transferTinderAPI } from '../../api-services';
import { IntroScreen } from './intro-screen';
import { Card } from './card';
import { Vote } from './vote';
import { ProgressBar } from './progress-bar';
import { Results } from './results';
import Error from '../error';

import { TTContainer, TTGame } from './styles';

import { IComponentProps } from '../../types/tracking';
import { ITheme } from '../../types/theme';
import { IIntroScreen, IVoteScreen, IResultsScreen, IVoteCount, ICard } from './types';

interface IProps extends IComponentProps {
  theme: ITheme;
  targetClubId: string;
  cards: ICard[];
  introScreen: IIntroScreen;
  voteScreen: IVoteScreen;
  resultsScreen: IResultsScreen;
}

interface IState {
  currentCardIndex: number;
  cards: ICard[];
  showIntro: boolean;
  showCards: boolean;
  showVote: boolean;
  showResults: boolean;
  hasErrored: boolean;
  voteCount?: IVoteCount;
  currentCard?: ICard;
}

export class TopTrumps extends React.Component<IProps, IState> {
  cachedWarmState = {};

  initialState = {
    currentCardIndex: 0,
    cards: [],
    showIntro: true,
    showCards: false,
    showVote: false,
    showResults: false,
    hasErrored: false,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      ...this.initialState,
      cards: props.cards,
    };
  }

  async componentDidMount() {
    const { targetClubId, cards } = this.props;
    const cardIds = cards.map((card: ICard) => card.id);
    try {
      const cardVotes = await transferTinderAPI.getPlayerVotes(targetClubId, cardIds);

      const cardsWithVotes = this.mergeVotes(cardVotes, cards) as ICard[];
      this.setState({ cards: cardsWithVotes });
    } catch (e) {
      this.setState({ hasErrored: true });
    }
  }

  mergeVotes = (results: IVoteCount[], cards: ICard[]) => {
    return cards.map((card) => {
      const matchingResult = results.find((result) => {
        return card.id === result.player;
      });
      return matchingResult ? { ...card, voteCount: matchingResult } : { ...card };
    });
  };

  onStartGame = () => {
    this.setState({
      showIntro: false,
      showCards: true,
    });
  };

  clickLink = () => {
    window.location.assign(this.props.resultsScreen.linkUrl);
  };

  clickVote = async (votesYes: string[]) => {
    const { targetClubId } = this.props;
    this.setState({
      showVote: false,
      showResults: true,
    });

    await transferTinderAPI.addPlayerVotes(targetClubId, votesYes, []);
  };

  clickLeft = () => {
    this.setState({
      currentCardIndex: Math.max(0, this.state.currentCardIndex - 1),
    });
  };

  clickRight = () => {
    const { currentCardIndex, cards } = this.state;
    if (currentCardIndex === cards.length - 1) {
      this.setState({
        showCards: false,
        showVote: true,
      });
    } else {
      this.setState({
        currentCardIndex: Math.min(cards.length, currentCardIndex + 1),
      });
    }
  };

  render() {
    const { introScreen, resultsScreen, voteScreen, theme } = this.props;
    const { showIntro, showCards, showVote, showResults, cards, currentCardIndex, hasErrored } = this.state;

    return hasErrored ? (
      <Error />
    ) : (
      <TTContainer className="ttt-container">
        {showIntro && (
          <IntroScreen className="ttt-intro-screen" {...introScreen} onStartGame={this.onStartGame} theme={theme} />
        )}
        {showCards && (
          <TTGame className="tt-game">
            <Card className="tt-card" card={cards[currentCardIndex]} theme={theme} />
            <ProgressBar
              className="tt-progress_bar"
              cards={cards}
              currentCardIndex={currentCardIndex}
              theme={theme}
              onClickLeft={this.clickLeft}
              onClickRight={this.clickRight}
            />
          </TTGame>
        )}
        {showVote && (
          <Vote className="tt-vote" {...voteScreen} cards={cards} theme={theme} clickVote={this.clickVote} />
        )}
        {showResults && (
          <Results className="tt-results" {...resultsScreen} cards={cards} theme={theme} linkClick={this.clickLink} />
        )}
      </TTContainer>
    );
  }
}

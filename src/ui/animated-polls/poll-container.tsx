import * as React from 'react';

import { IntroScreen } from './intro';
import { Nav } from './nav';
import { ProgressBar } from './progress-bar';
import { CardScreen } from './card';
import { VoteScreen } from './vote';
import { ResultsScreen } from './results';
import Error from '../error';
import Icon from '../icon/icon';
import { colours } from '../../styles/colours';
import { podTracker } from '../../utils/pod-tracker-utils';
import { transferTinderAPI } from '../../api-services';

import { APNavHolder, APProgressHolder, APNavIcon, APNavIntroHolder } from './styles';

import { ICard, IAnimatedPoll, IVoteCount } from './types';
import { IComponentProps } from '../../types/tracking';

interface IProps extends IAnimatedPoll, IComponentProps {}

interface IState {
  currentCardIndex: number;
  cards: ICard[];
  showIntro: boolean;
  showCards: boolean;
  showVote: boolean;
  showResults: boolean;
  hasErrored: boolean;
}

export class PollContainer extends React.Component<IProps, IState> {
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

  constructor(props: IAnimatedPoll) {
    super(props);

    this.state = {
      ...this.initialState,
      cards: props.content.cards,
    };
  }

  async componentDidMount() {
    const {
      config: { targetClubId },
      content: { cards },
    } = this.props;
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
    return cards.map(card => {
      const matchingResult = results.find(result => {
        return card.id === result.player;
      });
      return matchingResult ? { ...card, voteCount: matchingResult } : { ...card };
    });
  };

  startPoll = () => {
    this.setState({
      showIntro: false,
      showCards: true,
    });

    podTracker.click({
      id: this.props.id,
      description: `Generic Animated Poll started`,
    });
  };

  clickLeft = () => {
    podTracker.click({
      id: this.props.id,
      description: `Generic Animated Poll click back`,
    });

    this.setState({
      currentCardIndex: Math.max(0, this.state.currentCardIndex - 1),
    });
  };

  clickRight = () => {
    podTracker.click({
      id: this.props.id,
      description: `Generic Animated Poll click forward`,
    });

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

  clickVote = async (votesYes: string[]) => {
    podTracker.click({
      id: this.props.id,
      description: `Generic Animated Poll click vote`,
    });

    const { targetClubId } = this.props.config;
    this.setState({
      showVote: false,
      showResults: true,
    });

    await transferTinderAPI.addPlayerVotes(targetClubId, votesYes, []);
  };

  render() {
    const { introScreen, voteScreen, resultsScreen } = this.props.content;
    const { theme } = this.props.config;
    const {
      showIntro,
      showCards,
      showVote,
      showResults,
      cards,
      currentCardIndex,
      hasErrored,
    } = this.state;

    return hasErrored ? (
      <Error />
    ) : (
      <div>
        {showIntro && (
          <div>
            <IntroScreen {...introScreen} />
            <APNavIntroHolder>
              <APNavIcon disabled={false} onClick={this.startPoll}>
                <Icon iconName={'chevron-solid-right'} iconSize={16} iconColour={colours.$white} />
              </APNavIcon>
            </APNavIntroHolder>
          </div>
        )}
        {showCards && (
          <div>
            <APProgressHolder>
              <ProgressBar options={cards} currentCardIndex={currentCardIndex} />
            </APProgressHolder>
            <CardScreen {...cards[currentCardIndex]} />
            <APNavHolder>
              <Nav
                currentCardIndex={currentCardIndex}
                onClickLeft={this.clickLeft}
                onClickRight={this.clickRight}
              />
            </APNavHolder>
          </div>
        )}
        {showVote && (
          <VoteScreen {...voteScreen} options={cards} theme={theme} clickVote={this.clickVote} />
        )}
        {showResults && <ResultsScreen {...resultsScreen} options={cards} theme={theme} />}
      </div>
    );
  }
}

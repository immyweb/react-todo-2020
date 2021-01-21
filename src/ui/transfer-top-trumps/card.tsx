import * as React from 'react';

import { Gradient } from './gradient';
import {
  CardContainer,
  CardHeader,
  CardInfo,
  CardLabel,
  CardProfileImage,
  Badge,
  BadgeImageHolder,
  CardFirstname,
  CardSurname,
  CardContent,
  CardClub,
  CardPlayer,
  CardStats,
  Divider,
  BadgeImage,
} from './styles';
import { colours } from '../../styles/colours';

import { ITheme } from '../../types/theme';
import { IPlayer, ICard } from './types';

interface IProps extends ICard {
  player: IPlayer;
  theme: ITheme;
  className?: string;
}

export const Card: React.SFC<IProps> = ({ currentClub, pos, estFee, playerAge, player, theme }) => {
  const {
    fname,
    sName,
    imageMobile,
    imageDesktop,
    club,
    clubBadge,
    age,
    fee,
    position,
    voted,
  } = player;

  return (
    <div>
      <CardContainer voted={voted}>
        <CardHeader className={'ttt-card-header'}>
          <CardFirstname fontColour={theme.primary}>{fname}</CardFirstname>
          <CardSurname fontColour={colours.$white}>{sName}</CardSurname>
        </CardHeader>
        <CardProfileImage
          className={'ttt-card-profileimage'}
          imageMobile={imageMobile}
          imageDesktop={imageDesktop}
        />
        <CardInfo className={'ttt-card-info'}>
          <BadgeImageHolder>
            <Gradient colour={colours.$white} height={4} top={17} opacity={0.5} />
            <Badge>{clubBadge && <BadgeImage src={clubBadge} alt={currentClub} />}</Badge>
          </BadgeImageHolder>
          <CardStats className={'ttt-card-stats'}>
            <CardClub>
              <CardLabel color={theme.primary}>{currentClub}</CardLabel>{' '}
              <CardContent>{club}</CardContent>
            </CardClub>
            <Divider height={41} mobileHide={true} />
            <CardPlayer>
              <CardLabel color={theme.primary}>{pos}</CardLabel>{' '}
              <CardContent>{position}</CardContent>
            </CardPlayer>
            <Divider height={41} />
            <CardPlayer>
              <CardLabel color={theme.primary}>{estFee}</CardLabel> <CardContent>{fee}</CardContent>
            </CardPlayer>
            <Divider height={41} />
            <CardPlayer>
              <CardLabel color={theme.primary}>{playerAge}</CardLabel>{' '}
              <CardContent>{age}</CardContent>
            </CardPlayer>
          </CardStats>
        </CardInfo>
      </CardContainer>
    </div>
  );
};

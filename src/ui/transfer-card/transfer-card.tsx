import * as React from 'react';

import {
  Wrapper,
  CardContainer,
  CardWrapper,
  Card,
  Coating,
  Shadow,
  Text,
  Name,
  Stat,
  StatName,
  StatValue,
  Copy,
  SectionTitle,
} from './styles';

import { OverFlow } from '../overflow/over-flow';

interface IStat {
  stat: string;
  value: string;
}

interface ISection {
  title: string;
  copy: string;
}

interface IProps {
  config: {
    color: string;
  };
  id?: string;
  content: {
    name: string;
    stats: IStat[];
    copy: string[];
    cardImage: string;
    backgroundImageUrl?: string;
    sections: ISection[];
  };
}

export const TransferCard = ({
  config: { color },
  content: { name, stats, copy, cardImage, backgroundImageUrl = '', sections },
}: IProps) => (
  <div className="transfer-card--container">
    <Wrapper backgroundImageUrl={backgroundImageUrl}>
      <CardContainer backgroundImageUrl={backgroundImageUrl}>
        <CardWrapper>
          <Card className="transfer-card--card" cardImage={cardImage}>
            <Coating />
          </Card>
          <Shadow />
        </CardWrapper>
      </CardContainer>
      <Text className="transfer-card--text">
        <Name className="transfer-card--name">{`${name}`}</Name>
        {stats.map(({ stat, value }, i) => (
          <Stat key={i}>
            <StatName className="transfer-card--stat-name">{stat}</StatName>
            <StatValue className="transfer-card--stat-value">{value}</StatValue>
          </Stat>
        ))}
        {copy.map((text, i) => (
          <Copy className="transfer-card--copy" key={i}>
            {text}
          </Copy>
        ))}
        {sections.map(({ title, copy: text }, i) => (
          <div key={i} className="transfer-card--section">
            <Copy>
              <SectionTitle className="transfer-card--section--title">{title}</SectionTitle>
              <span className="transfer-card--section--copy">{text}</span>
            </Copy>
          </div>
        ))}
      </Text>
    </Wrapper>
    <OverFlow color={color} />
  </div>
);

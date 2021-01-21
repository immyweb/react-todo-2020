import * as React from 'react';

import { Header, BadgeHolder, Badge, TextHolder, Title, SubTitle } from './styles';

import { ReactComponent as ChevronUp } from '../images/icons/chevron-solid-up.svg';
import { ReactComponent as ChevronDown } from '../images/icons/chevron-solid-down.svg';

import { ITheme } from '../../types/theme';

interface IProps {
  title: string;
  subTitle?: string;
  badge?: string;
  index: number;
  theme: ITheme;
  active: boolean;
  toggle(): void;
}

const AccordionItemHead: React.FC<IProps> = ({ title, subTitle, badge, toggle, active, index, theme }) => {
  // const iconClass = active ? 'chevron-solid-up' : 'chevron-solid-down';
  const { primary } = theme;
  const hasBadge = badge ? true : false;

  return (
    <Header onClick={toggle} open={active} colour={primary} className={'accordion-item-header'}>
      {badge && (
        <BadgeHolder className={'accordion-badge'}>
          <Badge alt={title} src={badge} />
        </BadgeHolder>
      )}
      <TextHolder hasBadge={hasBadge}>
        {title && (
          <Title index={index} className={'accordion-item-title'}>
            {title}
          </Title>
        )}
        {subTitle && <SubTitle className={'accordion-item-subtitle'}>{subTitle}</SubTitle>}
      </TextHolder>

      {/* <Icon iconName={iconClass} iconColour={secondary} iconSize={12} /> */}
      {active ? <ChevronUp width={18} /> : <ChevronDown width={18} />}
    </Header>
  );
};

export default AccordionItemHead;

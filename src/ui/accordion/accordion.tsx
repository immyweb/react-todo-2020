import * as React from 'react';

import { ComponentHeader } from '../component-header/';
import AccordionItem from './accordion-item';
import { AccordionContainer, Border } from './styles';

import { IComponentProps } from '../../types/tracking';
import { IAccordion, IItem } from './types';

export interface IProps extends IAccordion, IComponentProps {}

export const Accordion: React.FC<IProps> = ({ config, content, id }) => {
  const { timeline, theme, commercial } = config;
  const { headline, items } = content;

  return (
    <AccordionContainer>
      {timeline && <Border colour={theme.secondary} />}
      <ComponentHeader
        className={'accordion-header'}
        title={headline}
        theme={{
          primary: theme.primary,
          secondary: theme.secondary,
        }}
        background
      />
      {items.map((item: IItem, i: number) => {
        return (
          <AccordionItem
            item={item}
            expanded={item.expanded}
            key={i + 1}
            theme={theme}
            index={i + 1}
            border={timeline}
            id={id}
            commercial={commercial}
          />
        );
      })}
      {/* <OverFlow color={theme.secondary} /> */}
    </AccordionContainer>
  );
};

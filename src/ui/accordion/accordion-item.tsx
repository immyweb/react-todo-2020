import * as React from 'react';

import AccordionItemHead from './accordion-item-head';
import AccordionItemBody from './accordion-item-body';

import { Item } from './styles';

import { ITheme } from '../../types/theme';
import { IComponentProps } from '../../types/tracking';
import { IItem } from './types';

interface IProps extends IComponentProps {
  expanded: boolean;
  item: IItem;
  theme: ITheme;
  index: number;
  border: boolean;
  commercial?: boolean;
}

interface IState {
  active: boolean;
}

export default class AccordionItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      active: props.expanded ? props.expanded : false,
    };
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.expanded !== prevProps.expanded) {
      this.setState({
        active: this.props.expanded,
      });
    }
  }

  toggle = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    const { index, theme, border, item, commercial } = this.props;
    const { title, subTitle, badge, copy, imageTop, imageBottom, linkText, linkUrl } = item;
    const { active } = this.state;
    return (
      <Item open={active} index={index} theme={theme} border={border}>
        <AccordionItemHead
          title={title}
          subTitle={subTitle}
          badge={badge}
          index={index}
          theme={theme}
          toggle={this.toggle}
          active={active}
        />
        <AccordionItemBody
          title={title}
          copy={copy}
          imageTop={imageTop}
          imageBottom={imageBottom}
          linkText={linkText}
          linkUrl={linkUrl}
          theme={theme}
          active={active}
          commercial={commercial}
        />
      </Item>
    );
  }
}

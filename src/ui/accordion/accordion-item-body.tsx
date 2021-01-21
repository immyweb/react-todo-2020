import * as React from 'react';
import { Transition } from 'react-transition-group';

import { defaultStyle, transitionStyles, Panel, Copy, Link } from './styles';
import { Image } from '../../styles/globals';
import { P } from '../../ui/typography/typography';
import { dangerouslySet } from '../../utils/dangerouslySet';

import { ITheme } from '../../types/theme';

interface IProps {
  title: string;
  imageTop?: string;
  imageBottom?: string;
  copy?: string;
  active: boolean;
  linkText?: string;
  linkUrl?: string;
  theme: ITheme;
  commercial?: boolean;
}

const AccordionItemBody: React.FC<IProps> = ({
  title,
  copy,
  imageTop,
  imageBottom,
  active,
  linkText,
  linkUrl,
  theme,
  commercial,
}) => {
  const { primary } = theme;

  const setImage = (image: string) => {
    return <Image src={image} alt={title} marginBottom={25} className={'accordion-item-image'} />;
  };

  return (
    <Transition in={active} timeout={150}>
      {(state: any) => (
        <Panel
          open={active}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {imageTop && setImage(imageTop)}
          {copy && (
            <Copy colour={primary} className={'accordion-item-copy'}>
              <P style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={dangerouslySet(copy)} />
            </Copy>
          )}
          {imageBottom && setImage(imageBottom)}
          {(linkUrl || linkText) && (
            <Link
              href={linkUrl}
              target={'_blank'}
              colour={primary}
              className={'accordion-item-link'}
              {...(commercial ? { rel: 'nofollow' } : null)}
            >
              {linkText}
            </Link>
          )}
        </Panel>
      )}
    </Transition>
  );
};

export default AccordionItemBody;

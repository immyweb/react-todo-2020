export enum actions {
  LOADED = 'loaded',
}

export enum interactions {
  CLICK = 'click',
  SWIPE = 'swipe',
  DRAG = 'drag',
}

interface IProps {
  type?: string;
  id: string | undefined;
  description: string;
}

export const podTracker = {
  [actions.LOADED]: ({ id, description }: IProps) => {
    triggerUtag({
      id,
      description,
      type: actions.LOADED,
    });
  },

  [interactions.CLICK]: ({ id, description }: IProps) => {
    triggerUtag({
      id,
      description,
      type: interactions.CLICK,
    });
  },

  [interactions.SWIPE]: ({ id, description }: IProps) => {
    triggerUtag({
      id,
      description,
      type: interactions.SWIPE,
    });
  },

  [interactions.DRAG]: ({ id, description }: IProps) => {
    triggerUtag({
      id,
      description,
      type: interactions.DRAG,
    });
  },
};

const triggerUtag = ({ type, id, description }: IProps) => {
  if (window['utag']) {
    window['utag'].link({
      event_navigation_action: 'navigation',
      event_navigation_name: description,
      event_navigation_browsing_method: type,
      article_parent_name: id,
    });
  }
};

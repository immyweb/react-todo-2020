import * as React from 'react';
import * as styles from './styles.css';

import { inIframe } from './helpers';

export class OverFlow extends React.Component<{ color: string }, { viewPort: number }> {
  clearInterval: any;
  constructor(props: any) {
    super(props);
    this.updateViewPort = this.updateViewPort.bind(this);
    this.state = {
      viewPort: Math.max(
        (document && document.documentElement && document.documentElement.clientHeight) || 0,
        window.innerHeight || 0,
      ),
    };
  }

  componentDidMount() {
    this.updateViewPort();
    if (inIframe()) {
      this.clearInterval = setInterval(this.updateViewPort, 1000);
    }
    window.addEventListener('resize', this.updateViewPort);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewPort);
    if (this.clearInterval) {
      clearInterval(this.clearInterval);
    }
  }

  updateViewPort() {
    this.setState({
      viewPort: Math.max(
        (document && document.documentElement && document.documentElement.clientHeight) || 0,
        window.innerHeight || 0,
      ),
    });
  }
  render() {
    if (inIframe()) {
      const { viewPort } = this.state;
      const { color } = this.props;

      const height = document && document.documentElement && document.documentElement.scrollHeight;
      if ((height || 0) > viewPort) {
        return (
          <div
            className={styles.OverFlowContainer}
            style={{
              top: viewPort - 200,
            }}
          >
            <div
              className={styles.OverFlowButton}
              style={{
                background: color,
              }}
            >
              Tell me more
            </div>
          </div>
        );
      }
    }

    return null;
  }
}

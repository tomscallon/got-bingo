/* @flow */

import styles from './Popover.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

type Props = {
  trigger: React.Node,
  content: React.Node,
  minWidth: number,
};

type State = {
  shown: boolean,
};

type RefObject<C> = {
  current: null | React.ElementRef<C>,
};

// Create the containing element for popovers.
const popoverContainer = document.createElement('div');
popoverContainer.classList.add(styles.container);

window.addEventListener('DOMContentLoaded', () => {
  // document.body should NEVER be null here
  if (document.body === null) {
    throw new Error('document.body null inside DOMContentLoaded listener');
  }
  document.body.appendChild(popoverContainer);
});

// How much space between popover and its trigger element, edges of screen.
// Keep this in sync with the `padding` declaration in the SCSS file.
const PADDING = 10;

class Popover extends React.Component<Props, State> {
  state = {
    shown: false,
  };

  triggerRef: RefObject<'div'>;
  wrapperRef: RefObject<'div'>;

  constructor(props: Props) {
    super(props);
    this.triggerRef = React.createRef();
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.reposition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.reposition);
  }

  reposition = () => {
    if (!this.state.shown) return;

    let triggerEl = this.triggerRef.current;
    const wrapperEl = this.wrapperRef.current;
    const { minWidth } = this.props;

    if (triggerEl) triggerEl = triggerEl.firstElementChild;

    if (triggerEl == null || wrapperEl === null) return;

    const triggerRect = triggerEl.getBoundingClientRect();

    // TODO make this more general.
    // First, try positioning to the right.
    console.log(window.innerWidth, window.innerHeight, triggerRect);
    if (window.innerWidth - triggerRect.right - 2 * PADDING >= minWidth) {
      wrapperEl.style.left = `${triggerRect.right}px`;
      wrapperEl.style.right = '0px';
    } else if (triggerRect.left - 2 * PADDING >= minWidth) {
      wrapperEl.style.left = '0px';
      wrapperEl.style.right = `${triggerRect.left}px`;
    } else {
      wrapperEl.style.left = wrapperEl.style.right = '0px';
    }
  };

  toggleShown = () => {
    this.setState(({ shown }) => ({ shown: !shown }), this.reposition);
  };

  render(): React.Node {
    const { trigger, content } = this.props;
    const { shown } = this.state;
    const popover = (
      <div ref={this.wrapperRef} className={styles.wrapper}>
        <div className={styles.content}>{content}</div>
      </div>
    );

    return (
      <div className={styles.root}>
        <div
          ref={this.triggerRef}
          className={styles.trigger}
          onClick={this.toggleShown}
        >
          {trigger}
        </div>
        {shown ? ReactDOM.createPortal(popover, popoverContainer) : null}
      </div>
    );
  }
}

export default Popover;

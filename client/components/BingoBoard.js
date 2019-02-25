/* @flow */

import styles from './BingoBoard.scss';
import * as React from 'react';

type Props<T> = {
  className?: string,
  items: Array<?T>,
  renderItemSpace: (
    item: ?T,
    row: number,
    col: number,
    index: number,
  ) => React.Node,
  renderFreeSpace: () => React.Node,
};

class BingoBoard<T> extends React.Component<Props<T>> {
  static defaultProps = {
    renderFreeSpace: () => 'Free Space',
  };

  _renderSpace(item: ?T, row: number, col: number, index: number): React.Node {
    return this.props.renderItemSpace(item, row, col, index);
  }

  _renderFreeSpace(): React.Node {
    return this.props.renderFreeSpace();
  }

  render() {
    const { className, items, renderFreeSpace } = this.props;
    const renderedItems = [];
    for (let itemIndex = 0, row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        // Skip the free space.
        if (row === 2 && col === 2) continue;

        // Render the item at the current spot.
        renderedItems.push(
          this._renderSpace(items[itemIndex], row, col, itemIndex++),
        );
      }
    }

    // Insert the free space.
    renderedItems.splice(12, 0, this._renderFreeSpace());

    return (
      <div className={`${className || ''} ${styles.root}`}>{renderedItems}</div>
    );
  }
}

export default BingoBoard;

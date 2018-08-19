/* @flow */

import './BingoBoard.scss';
import * as React from 'react';

type Props<T> = {
  className?: string,
  items: Array<T>,
  renderItem: (item: T, row: number, col: number) => React.Node,
  renderFreeSpace: () => React.Node,
}

class BingoBoard<T> extends React.Component<Props<T>> {
  static defaultProps = {
    renderFreeSpace: () => "Free Space",
  };

  static boardClassName = 'bingo-board';
  static rowClassName = 'bingo-board-row';
  static itemClassName = 'bingo-board-item';

  _renderItem(item: ?T, row: number, col: number): React.Node {
    const {renderItem} = this.props;

    return (
      <div className={BingoBoard.itemClassName}>
        {
          item === null || item === undefined ?
            null :
            renderItem(item, row, col)
        }
      </div>
    );
  }

  _renderFreeSpace(): React.Node {
    return (
      <div className={BingoBoard.itemClassName}>
        {this.props.renderFreeSpace()}
      </div>
    );
  }

  render() {
    const {className, items, renderFreeSpace} = this.props;
    const renderedItems = [];
    for (let itemIndex = 0, row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        // Skip the free space.
        if (row === 2 && col === 2) continue;

        // Render the item at the current spot.
        renderedItems.push(this._renderItem(items[itemIndex++], row, col));
      }
    }

    // Insert the free space.
    renderedItems.splice(12, 0, this._renderFreeSpace());

    return (
      <div className={`${className || ''} ${BingoBoard.boardClassName}`}>
        {renderedItems}
      </div>
    );
  }
}

export default BingoBoard;

/* @flow */

const React = require('react');

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

  _renderRow(row: number): React.Node {
    const {items, renderFreeSpace} = this.props;
    let itemIndex = 5 * row + (row > 2 ? -1 : 0);

    return (
      <div className={BingoBoard.rowClassName}>{[
        this._renderItem(items[itemIndex++], row, 0),
        this._renderItem(items[itemIndex++], row, 1),

        // If this is the middle row, render a free space instead of an item
        row === 2 ?
          renderFreeSpace() :
          this._renderItem(items[itemIndex++], row, 2),

        this._renderItem(items[itemIndex++], row, 3),
        this._renderItem(items[itemIndex++], row, 4),
      ]}</div>
    );
  }

  render() {
    const {className} = this.props;

    return (
      <div className={className}>
        {[0, 1, 2, 3, 4].map(i => this._renderRow(i))}
      </div>
    );
  }
}

export default BingoBoard;

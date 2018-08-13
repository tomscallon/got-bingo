/* @flow */

const React = require('react');

type Props<T> = {
  items: Array<T>,
  renderItem: T => React.Element<*>,
  wrapRows?: boolean,
  wrapItems?: boolean
}

class BingoBoard<T> extends React.Component<Props<T>> {
  static defaultProps = {
    wrapRows: true,
    wrapItems: true
  };
}

export default BingoBoard;

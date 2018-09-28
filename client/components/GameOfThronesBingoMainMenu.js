/* @flow */

import styles from './GameOfThronesBingoMainMenu.scss';

import type { Board } from '../types';

import * as React from 'react';

const createBlankBoard = () => ({
  id: null, // Not yet saved to server
  title: '',
  items: new Array(24).fill(null),
});

type Props = {
  loadBoard: Board => void,
};

class GameOfThronesBingoMainMenu extends React.Component<Props> {
  _loadNewEmptyBoard = () => {
    this.props.loadBoard(createBlankBoard());
  };

  render(): React.Node {
    return (
      <div className={styles.root}>
        <button onClick={this._loadNewEmptyBoard}>Start New Board</button>
        <button>Load Existing Board</button>
        <button>What is this?</button>
      </div>
    );
  }
}

export default GameOfThronesBingoMainMenu;

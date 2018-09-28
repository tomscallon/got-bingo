/* @flow */
import styles from './GameOfThronesBingo.scss';

import type { Board, Character } from '../types';

import * as React from 'react';
import GameOfThronesBingoBoard from './GameOfThronesBingoBoard';
import GameOfThronesBingoMainMenu from './GameOfThronesBingoMainMenu';

type State = {|
  currentBoard: ?Board,
|};

class GameOfThronesBingo extends React.Component<{}, State> {
  state: State = {
    currentBoard: null,
  };

  _loadBoard = (board: Board) => {
    this.setState(() => ({ currentBoard: board }));
  };

  render(): React.Node {
    const { currentBoard } = this.state;
    // If currentBoard is null, then render the main menu. Otherwise, render
    // that board.
    let content = !currentBoard ? (
      <GameOfThronesBingoMainMenu loadBoard={this._loadBoard} />
    ) : (
      <GameOfThronesBingoBoard board={currentBoard} />
    );

    return (
      <div className={styles.root}>
        <h1 className={styles.title}>Game of Thrones Bingo</h1>
        <h2 className={styles.subtitle}>Winter is Here</h2>
        <div>{content}</div>
      </div>
    );
  }
}

export default GameOfThronesBingo;

/* @flow */
import styles from './GameOfThronesBingo.scss';

import type { Board, Character } from '../types';

import * as React from 'react';
import GameOfThronesBingoBoard from './GameOfThronesBingoBoard';
import GameOfThronesBingoMainMenu from './GameOfThronesBingoMainMenu';
import GameOfThronesBingoCharacterDrawer from './GameOfThronesBingoCharacterDrawer';

import { createBlankBoard } from '../util/boardUtils';

type State = {|
  currentBoard: ?Board,
|};

class GameOfThronesBingo extends React.Component<{}, State> {
  state: State = {
    currentBoard: createBlankBoard(),
  };

  _loadBoard = (board: Board) => {
    this.setState(() => ({ currentBoard: board }));
  };

  render(): React.Node {
    const { currentBoard } = this.state;

    return (
      <div className={styles.root}>
        <GameOfThronesBingoMainMenu loadBoard={this._loadBoard} />
        <GameOfThronesBingoBoard board={currentBoard} />
        <GameOfThronesBingoCharacterDrawer />
      </div>
    );
  }
}

export default GameOfThronesBingo;

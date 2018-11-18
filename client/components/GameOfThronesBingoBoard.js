/* @flow */

import styles from './GameOfThronesBingoBoard.scss';

import type { Board } from '../types';

import * as React from 'react';
import BingoBoard from './BingoBoard';
import GameOfThronesBingoBoardItem from './GameOfThronesBingoBoardItem';

type Props = {
  board: ?Board,
};

class GameOfThronesBingoBoard extends React.Component<Props> {
  render(): React.Node {
    const { board } = this.props;

    if (board == null) {
      return 'Use the menu to start a new board or open an existing one';
    }

    const { items } = board;

    return (
      <div>
        <input className={styles.titleInput} placeholder="My New Board" />
        <BingoBoard
          className={styles.root}
          items={items}
          renderFreeSpace={c => (
            <GameOfThronesBingoBoardItem freeSpace={true} />
          )}
          renderItemSpace={c => <GameOfThronesBingoBoardItem character={c} />}
        />
      </div>
    );
  }
}

export default GameOfThronesBingoBoard;

/* @flow */

import styles from './GameOfThronesBingoBoard.scss';

import type { Board } from '../types';

import * as React from 'react';
import BingoBoard from './BingoBoard';
import GameOfThronesBingoBoardItem from './GameOfThronesBingoBoardItem';

type Props = {
  board: Board,
};

class GameOfThronesBingoBoard extends React.Component<Props> {
  render(): React.Node {
    const {
      board: { items },
    } = this.props;

    return (
      <BingoBoard
        className={styles.root}
        items={items}
        renderFreeSpace={c => <GameOfThronesBingoBoardItem freeSpace={true} />}
        renderItemSpace={c => <GameOfThronesBingoBoardItem character={c} />}
      />
    );
  }
}

export default GameOfThronesBingoBoard;

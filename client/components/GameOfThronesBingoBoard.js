/* @flow */

import './GameOfThronesBingoBoard.scss';

import type { Board } from '../types';

import * as React from 'react';
import BingoBoard from './BingoBoard';

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
        className="game-of-thrones-bingo-board"
        items={items}
        renderItem={({ name }) => name}
        renderEmptySpace={() => '(empty)'}
      />
    );
  }
}

export default GameOfThronesBingoBoard;

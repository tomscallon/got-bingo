/* @flow */
import './GameOfThronesBingo.scss';

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
      <div className="game-of-thrones-bingo">
        <h1 className="game-of-thrones-bingo-title">Game of Thrones Bingo</h1>
        <h2 className="game-of-thrones-bingo-subtitle">Winter is Coming</h2>
        <div className="game-of-thrones-bingo-main">{content}</div>
      </div>
    );
  }
}

export default GameOfThronesBingo;

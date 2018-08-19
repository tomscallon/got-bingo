/* @flow */
import './GameOfThronesBingo.scss';

import type {Board, Character} from '../types';

import * as React from 'react';
import GameOfThronesBingoBoard from './GameOfThronesBingoBoard';
import GameOfThronesBingoMainMenu from './GameOfThronesBingoMainMenu';

type State = {|
  currentBoard: ?Board,
|};

class GameOfThronesBingo extends React.Component<{}, State> {
  state: State = {
    currentBoard: null
  };

  render(): React.Node {
    const {currentBoard} = this.state;
    let content = null;;

    // If currentBoard is null, then render the main menu.
    if (!currentBoard) {
      content = <GameOfThronesBingoMainMenu />;
    } else {
      // Otherwise, render that board.
      content = <GameOfThronesBingoBoard board={currentBoard} />;
    }

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

/* @flow */
import './GameOfThronesBingo.scss';

import type {Board, Character} from '../types';

import * as React from 'react';
import GameOfThronesBingoBoard from './GameOfThronesBingoBoard';

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
      content = 'Hey';
    } else {
      // Otherwise, render that board.
      content = <GameOfThronesBingoBoard board={currentBoard} />;
    }

    return (
      <div className="game-of-thrones-bingo">
        {content}
      </div>
    );
  }
}

export default GameOfThronesBingo;

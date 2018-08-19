/* @flow */

import './GameOfThronesBingoMainMenu.scss';

import * as React from 'react';

class GameOfThronesBingoMainMenu extends React.Component<{}> {
  render(): React.Node {
    return (
      <div className="game-of-thrones-bingo-main-menu">
        <button>Start New Board</button>
        <button>Load Existing Board</button>
        <button>What is this?</button>
      </div>
    );
  }
}

export default GameOfThronesBingoMainMenu;

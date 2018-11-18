/* @flow */

import styles from './GameOfThronesBingoMainMenu.scss';

import type { Board } from '../types';

import * as React from 'react';

import { createBlankBoard } from '../util/boardUtils';

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
        <h1 className={styles.title}>Game of Thrones Bingo</h1>
        <h2 className={styles.subtitle}>Winter is Here</h2>
        <button className={styles.button} onClick={this._loadNewEmptyBoard}>
          Start New Board
        </button>
        <button className={styles.button}>Load Existing Board</button>
        <button className={styles.button}>What is this?</button>
      </div>
    );
  }
}

export default GameOfThronesBingoMainMenu;

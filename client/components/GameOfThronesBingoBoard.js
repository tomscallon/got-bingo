/* @flow */

import styles from './GameOfThronesBingoBoard.scss';

import type { Board } from '../types';

import * as React from 'react';
import BingoBoard from './BingoBoard';
import GameOfThronesBingoBoardItem from './GameOfThronesBingoBoardItem';

type Props = {
  board: ?Board,
  selectedItem?: ?number,
  onClickItem?: (index: number) => void,
};

class GameOfThronesBingoBoard extends React.Component<Props> {
  render(): React.Node {
    const { board, selectedItem, onClickItem } = this.props;

    if (board == null) {
      return 'Use the menu to start a new board or open an existing one';
    }

    const { items } = board;

    return (
      <div>
        <input className={styles.titleInput} placeholder="Name your board..." />
        <BingoBoard
          className={styles.root}
          items={items}
          renderFreeSpace={c => (
            <GameOfThronesBingoBoardItem freeSpace={true} />
          )}
          renderItemSpace={(c, _r, _c, i) => (
            <GameOfThronesBingoBoardItem
              character={c}
              selected={selectedItem === i}
              onClick={onClickItem && (() => onClickItem(i))}
            />
          )}
        />
      </div>
    );
  }
}

export default GameOfThronesBingoBoard;

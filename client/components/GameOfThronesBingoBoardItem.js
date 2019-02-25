/* @flow */

import styles from './GameOfThronesBingoBoardItem.scss';

import type { Character } from '../types';

import cx from 'classnames';

import * as React from 'react';
import GameOfThronesBingoCharacterTile from './GameOfThronesBingoCharacterTile';

type Props = {
  character?: ?Character,
  freeSpace: boolean,
  selected?: boolean,
  onClick?: (index: number) => void,
};

class GameOfThronesBingoBoardItem extends React.Component<Props> {
  static defaultProps = {
    freeSpace: false,
  };

  render(): React.Node {
    const { character, freeSpace, selected, onClick } = this.props;

    let content: React.Node;
    if (freeSpace) {
      content = 'Free Space';
    } else if (character) {
      content = <GameOfThronesBingoCharacterTile character={character} />;
    } else {
      content = 'Click to Edit';
    }

    content = (
      <div
        tabindex={freeSpace ? undefined : 0}
        className={cx({
          [styles.root]: true,
          [styles.free]: freeSpace,
          [styles.empty]: !freeSpace && !character,
          [styles.selected]: selected,
        })}
        onClick={onClick}
      >
        {content}
      </div>
    );

    return content;
  }
}

export default GameOfThronesBingoBoardItem;

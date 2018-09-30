/* @flow */

import styles from './GameOfThronesBingoBoardItem.scss';

import type { Character } from '../types';

import cx from 'classnames';

import * as React from 'react';

import GameOfThronesBingoCharacterTile from './GameOfThronesBingoCharacterTile';

type Props = {
  freeSpace: boolean,
  character?: ?Character,
  onChange?: (?Character) => void,
};

class GameOfThronesBingoBoardItem extends React.Component<Props> {
  static defaultProps = {
    freeSpace: false,
  };

  render(): React.Node {
    const { character, freeSpace } = this.props;

    let content: React.Node;
    if (freeSpace) {
      content = 'Free Space';
    } else if (character) {
      content = <GameOfThronesBingoCharacterTile character={character} />;
    } else {
      content = 'Click to Edit';
    }

    return (
      <div
        tabindex={0}
        className={cx({
          [styles.root]: true,
          [styles.free]: freeSpace,
          [styles.empty]: !freeSpace && !character,
        })}
      >
        {content}
      </div>
    );
  }
}

export default GameOfThronesBingoBoardItem;

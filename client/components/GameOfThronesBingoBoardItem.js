/* @flow */

import styles from './GameOfThronesBingoBoardItem.scss';

import type { Character } from '../types';

import cx from 'classnames';

import * as React from 'react';

import Popover from './ui/Popover';
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

    let trigger: React.Node;
    if (freeSpace) {
      trigger = 'Free Space';
    } else if (character) {
      trigger = <GameOfThronesBingoCharacterTile character={character} />;
    } else {
      trigger = 'Click to Edit';
    }

    trigger = (
      <div
        tabindex={0}
        className={cx({
          [styles.root]: true,
          [styles.free]: freeSpace,
          [styles.empty]: !freeSpace && !character,
        })}
      >
        {trigger}
      </div>
    );

    return (
      <Popover
        trigger={trigger}
        content={<div>Hello there...</div>}
        minWidth={100}
      />
    );
  }
}

export default GameOfThronesBingoBoardItem;

/* @flow */

import styles from './GameOfThronesBingoBoardItemPopover.scss';

import * as React from 'react';

type Props = {};

class GameOfThronesBingoBoardItemPopover extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <input
          className={styles.search}
          placeholder="Search for a character..."
        />
        <div>Characters will appear here...</div>
      </div>
    );
  }
}

export default GameOfThronesBingoBoardItemPopover;

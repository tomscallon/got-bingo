/* @flow */

import styles from './GameOfThronesBingoCharacterTile.scss';

import type { Character } from '../types';

import * as React from 'react';

type Props = {
  character: Character,
};

class GameOfThronesBingoCharacterTile extends React.Component<Props> {
  render(): React.Node {
    const { name, imageURL } = this.props.character;
    const style = { backgroundImage: `url(${imageURL})` };

    return (
      <div className={styles.root}>
        <div className={styles.background} style={style} />
        <div className={styles.name}>{name}</div>
      </div>
    );
  }
}

export default GameOfThronesBingoCharacterTile;

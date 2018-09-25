/* @flow */

import type { Character } from '../types';

import * as React from 'react';

type Props = {
  character: Character,
};

class GameOfThronesBingoCharacterTile extends React.Component<Props> {
  render(): React.Node {
    const { name } = this.props.character;

    return (
      <div className="GameOfThronesBingoCharacterTile/root">
        <div className="GameOfThronesBingoCharacterTile/name">{name}</div>
      </div>
    );
  }
}

export default GameOfThronesBingoCharacterTile;

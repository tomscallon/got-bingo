/* @flow */

import type { Character } from '../types';

import * as React from 'react';

import GameOfThronesBingoCharacterTile from './GameOfThronesBingoCharacterTile';

type Props = {
  character?: ?Character,
  onChange?: (?Character) => void,
};

class GameOfThronesBingoBoardItem extends React.Component<Props> {
  render(): React.Node {
    const { character } = this.props;

    return (
      <div className="GameOfThronesBingoBoardItem/root">
        {character && <GameOfThronesBingoCharacterTile character={character} />}
      </div>
    );
  }
}

export default GameOfThronesBingoBoardItem;

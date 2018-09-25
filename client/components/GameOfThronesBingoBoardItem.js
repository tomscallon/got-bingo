/* @flow */

import type { Character } from '../types';

import * as React from 'react';

type Props = {
  character?: ?Character,
  onChange?: (?Character) => void,
};

class GameOfThronesBingoBoardItem extends React.Component<Props> {
  render(): React.Node {
    const { character } = this.props;

    return character ? character.name : '(empty)';
  }
}

export default GameOfThronesBingoBoardItem;

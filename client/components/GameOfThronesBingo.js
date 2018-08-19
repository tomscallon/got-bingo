/* @flow */
import './GameOfThronesBingo.scss';

import * as React from 'react';
import BingoBoard from './BingoBoard';

class GameOfThronesBingo extends React.Component<{}> {
  render(): React.Node {
    return (
      <BingoBoard
        items={"After the war I went back to New York a-after the war I went back to New York I finished up my studies and".split(' ')}
        renderItem={(item, row, col) => `${item} @ (${row}, ${col})`}
      />
    );
  }
}

export default GameOfThronesBingo;

/* @flow */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BingoBoard from './components/BingoBoard';

class App extends React.Component<{}> {
  render(): React.Node {
    return (
      <BingoBoard
        items={"After the war I went back to New York a-after the war I went back to New York I finished up my studies and".split(' ')}
        renderItem={(item, row, col) => `${item} @ (${row}, ${col})`}
      />
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  console.log('Looking for root');
  if (root) {
    ReactDOM.render(<App />, root);
    console.log('Hello there...');
  } else {
    console.log('Did not find it...');
  }
});

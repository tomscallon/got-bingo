/* @flow */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GameOfThronesBingo from './components/GameOfThronesBingo';

class App extends React.Component<{}> {
  render(): React.Node {
    return (
      <GameOfThronesBingo />
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

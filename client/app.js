/* @flow */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GameOfThronesBingo from './components/GameOfThronesBingo';

class App extends React.Component<{}> {
  render(): React.Node {
    return <GameOfThronesBingo />;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  if (root) {
    ReactDOM.render(<App />, root);
  }
});

/* @flow */

import styles from './GameOfThronesBingoBoardItemPopover.scss';

import * as React from 'react';

import characters from '../data/characters';

type Props = {};
type State = { search: string };

class GameOfThronesBingoBoardItemPopover extends React.Component<Props, State> {
  state = { search: '' };

  onInputChange = (ev: Event) => this.setState({ search: ev.target.value });

  renderCharacters(): React.Node {
    const search = this.state.search.toLowerCase();
    const matchingCharacters = search
      ? characters.filter(
          c =>
            c.name.toLowerCase().includes(search) ||
            c.nicknames.some(name => name.toLowerCase().includes(search)),
        )
      : characters;

    return (
      <div>
        {matchingCharacters.map(c => (
          <div>{c.name}</div>
        ))}
      </div>
    );
  }

  render(): React.Node {
    return (
      <div>
        <input
          className={styles.search}
          placeholder="Search for a character..."
          onChange={this.onInputChange}
        />
        {this.renderCharacters()}
      </div>
    );
  }
}

export default GameOfThronesBingoBoardItemPopover;

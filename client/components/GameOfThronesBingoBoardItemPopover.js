/* @flow */

import styles from './GameOfThronesBingoBoardItemPopover.scss';

import * as React from 'react';
import GameOfThronesBingoCharacterTile from './GameOfThronesBingoCharacterTile';

import characters from '../data/characters';

type Props = {};
type State = { search: string };

class GameOfThronesBingoBoardItemPopover extends React.Component<Props, State> {
  state = { search: '' };

  onInputChange = (ev: Event) => {
    if (!(ev.target instanceof HTMLInputElement)) return;

    this.setState({ search: ev.target.value });
  };

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
      <div className={styles.resultWrapper}>
        {matchingCharacters.length === 0 ? (
          <div className={styles.noResults}>Nobody matched your search!</div>
        ) : (
          <div className={styles.grid}>
            {matchingCharacters.map(c => (
              <GameOfThronesBingoCharacterTile character={c} />
            ))}
          </div>
        )}
      </div>
    );
  }

  render(): React.Node {
    return (
      <div className={styles.root}>
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

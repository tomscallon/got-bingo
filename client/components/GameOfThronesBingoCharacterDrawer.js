/* @flow */

import styles from './GameOfThronesBingoCharacterDrawer.scss';

import * as React from 'react';
import GameOfThronesBingoCharacterTile from './GameOfThronesBingoCharacterTile';

import characters from '../data/characters';

type Props = { onClickCharacter: (id: number) => void };
type State = { search: string };

class GameOfThronesBingoCharacterDrawer extends React.Component<Props, State> {
  state = { search: '' };

  _inputRef: ?HTMLInputElement = null;

  focusInput(): void {
    if (this._inputRef) {
      this._inputRef.focus();
    }
  }

  _onInputChange = (ev: Event) => {
    if (!(ev.target instanceof HTMLInputElement)) return;

    this.setState({ search: ev.target.value });
  };

  _renderCharacters(): React.Node {
    const { onClickCharacter } = this.props;
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
              <GameOfThronesBingoCharacterTile
                character={c}
                onClick={() => onClickCharacter(c.id)}
              />
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
          ref={e => (this._inputRef = e)}
          className={styles.search}
          placeholder="Search for a character..."
          onChange={this._onInputChange}
        />
        {this._renderCharacters()}
      </div>
    );
  }
}

export default GameOfThronesBingoCharacterDrawer;

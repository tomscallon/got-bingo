/* @flow */

import styles from './GameOfThronesBingoCharacterDrawer.scss';

import type { Character } from '../types';

import * as React from 'react';
import GameOfThronesBingoCharacterTile from './GameOfThronesBingoCharacterTile';

import characters from '../data/characters';

import { nullthrows } from '../util/func';

type Props = { onSelectCharacter: (id: number) => void };
type State = { search: string };

const ENTER_KEY = 13;

class GameOfThronesBingoCharacterDrawer extends React.Component<Props, State> {
  state = { search: '' };

  _inputRef: ?HTMLInputElement = null;
  _lastMatchingCharacterList: Array<Character> = [];

  focusInput(): void {
    nullthrows(this._inputRef).focus();
  }

  clearInput(): void {
    console.log('clearing input');
    this.setState({
      search: '',
    });
  }

  _onInputChange = (ev: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ search: ev.currentTarget.value });
  };

  _onInputKeyPress = (ev: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const key = ev.keyCode || ev.which;

    if (key === ENTER_KEY && this._lastMatchingCharacterList.length === 1) {
      this.props.onSelectCharacter(this._lastMatchingCharacterList[0].id);
    }
  };

  _renderCharacters(): React.Node {
    const { onSelectCharacter } = this.props;
    const search = this.state.search.toLowerCase();
    const matchingCharacters = search
      ? characters.filter(
          c =>
            c.name.toLowerCase().includes(search) ||
            c.nicknames.some(name => name.toLowerCase().includes(search)),
        )
      : characters;

    // Save the matching character list for later use.
    this._lastMatchingCharacterList = matchingCharacters;

    return (
      <div className={styles.resultWrapper}>
        {matchingCharacters.length === 0 ? (
          <div className={styles.noResults}>Nobody matched your search!</div>
        ) : (
          <div className={styles.grid}>
            {matchingCharacters.map(c => (
              <GameOfThronesBingoCharacterTile
                character={c}
                onClick={() => onSelectCharacter(c.id)}
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
          value={this.state.search}
          placeholder="Search for a character..."
          onChange={this._onInputChange}
          onKeyPress={this._onInputKeyPress}
        />
        {this._renderCharacters()}
      </div>
    );
  }
}

export default GameOfThronesBingoCharacterDrawer;

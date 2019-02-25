/* @flow */
import styles from './GameOfThronesBingo.scss';

import type { Board, Character } from '../types';

import * as React from 'react';
import GameOfThronesBingoBoard from './GameOfThronesBingoBoard';
import GameOfThronesBingoMainMenu from './GameOfThronesBingoMainMenu';
import GameOfThronesBingoCharacterDrawer from './GameOfThronesBingoCharacterDrawer';

import { createBlankBoard, setItem } from '../util/boardUtils';
import { nullthrows } from '../util/func';

import characters from '../data/characters';

type EditState = {| type: 'item' | 'character', index: number |};

type State = {|
  currentBoard: ?Board,
  editState: ?EditState,
|};

class GameOfThronesBingo extends React.Component<{}, State> {
  _drawerRef: ?GameOfThronesBingoCharacterDrawer = null;

  state: State = {
    currentBoard: createBlankBoard(),
    editState: null,
  };

  _loadBoard = (board: Board) => {
    this.setState(() => ({ currentBoard: board }));
  };

  _updateEditState = (type: 'item' | 'character') => (index: number) => {
    const { editState } = this.state;
    console.log(`Update edit state: type = ${type}, index = ${index}`);
    if (editState == null || editState.type === type) {
      // If nothing is currently selected, or if another thing
      // of the current type is selected, just update the edit
      // state.
      this.setState(() => ({ editState: { type, index } }));

      // If a board item was just selected, focus the character
      // search field.
      if (type === 'item' && this._drawerRef) {
        this._drawerRef.focusInput();
      }
    } else {
      // Otherwise, set the selected item to the selected character,
      // and deselected the previously selected thing.
      let [itemIndex, characterID] =
        type === 'item' ? [index, editState.index] : [editState.index, index];
      this.setState(({ currentBoard }) => ({
        currentBoard: setItem(
          nullthrows(currentBoard),
          itemIndex,
          nullthrows(characters.find(({ id }) => id === characterID)),
        ),
        editState: null,
      }));
    }
  };

  render(): React.Node {
    const { currentBoard, editState } = this.state;

    return (
      <div className={styles.root}>
        <GameOfThronesBingoMainMenu loadBoard={this._loadBoard} />
        <GameOfThronesBingoBoard
          board={currentBoard}
          selectedItem={
            editState && editState.type === 'item' ? editState.index : null
          }
          onClickItem={this._updateEditState('item')}
        />
        <GameOfThronesBingoCharacterDrawer
          ref={c => (this._drawerRef = c)}
          onClickCharacter={this._updateEditState('character')}
        />
      </div>
    );
  }
}

export default GameOfThronesBingo;

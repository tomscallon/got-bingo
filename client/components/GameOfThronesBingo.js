/* @flow */
import styles from './GameOfThronesBingo.scss';

import type { Board, Character } from '../types';

import * as React from 'react';
import GameOfThronesBingoBoard from './GameOfThronesBingoBoard';
import GameOfThronesBingoMainMenu from './GameOfThronesBingoMainMenu';
import GameOfThronesBingoCharacterDrawer from './GameOfThronesBingoCharacterDrawer';

import {
  createBlankBoard,
  findNextEmptySpace,
  setItem,
} from '../util/boardUtils';
import { nullthrows } from '../util/func';

import characters from '../data/characters';

type EditState = {| type: 'item' | 'character', index: number |};

type State = {|
  currentBoard: ?Board,
  editState: ?EditState,
|};

class GameOfThronesBingo extends React.Component<{}, State> {
  state: State = {
    currentBoard: createBlankBoard(),
    editState: null,
  };

  _drawerRef: ?GameOfThronesBingoCharacterDrawer = null;

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
      if (type === 'item') {
        nullthrows(this._drawerRef).focusInput();
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

      // Clear the character drawer input.
      nullthrows(this._drawerRef).clearInput();

      // If possible, select the next empty space on the board.
      // Otherwise, reset the edit state to empty.
      const nextEmptyBoardIndex = findNextEmptySpace(
        nullthrows(this.state.currentBoard),
        itemIndex + 1,
        true,
      );
      console.log('Selecting', nextEmptyBoardIndex);
      const nextEditState =
        nextEmptyBoardIndex != null && nextEmptyBoardIndex != itemIndex
          ? { type: 'item', index: nextEmptyBoardIndex }
          : null;
      this.setState({ editState: nextEditState });

      // If the edit state was set, focus the drawer input.
      if (nextEditState != null) {
        nullthrows(this._drawerRef).focusInput();
      }
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
          onSelectCharacter={this._updateEditState('character')}
        />
      </div>
    );
  }
}

export default GameOfThronesBingo;

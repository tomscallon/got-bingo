/* @flow */

import type { Board, Character } from '../types';

export const createBlankBoard = (): Board => ({
  id: null, // Not yet saved to server
  title: '',
  items: new Array(24).fill(null),
});

export const findNextEmptySpace = (
  b: Board,
  fromIndex: number = 0,
  wrap: boolean = false,
): ?number => {
  console.log(b.items.slice(fromIndex), b.items.slice(0, fromIndex));
  return (
    fromIndex + b.items.slice(fromIndex).findIndex(c => c == null) ??
    (wrap ? b.items.slice(0, fromIndex).findIndex(c => c == null) : null)
  );
};

export const setItem = (
  { id, title, items }: Board,
  i: number,
  c: Character,
): Board => ({
  id,
  title,
  items: [...items.slice(0, i), c, ...items.slice(i + 1)],
});

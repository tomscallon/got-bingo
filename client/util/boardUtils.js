/* @flow */

import type { Board } from '../types';

export const createBlankBoard = (): Board => ({
  id: null, // Not yet saved to server
  title: '',
  items: new Array(24).fill(null),
});

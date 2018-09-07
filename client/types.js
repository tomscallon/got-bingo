/* @flow */

export type Character = {|
  name: string,
  nicknames: Array<string>,
  imageURL: string,
|};

export type Board = {|
  id: ?string,
  title: string,
  items: Array<Character>,
|};

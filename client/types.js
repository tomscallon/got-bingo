export type Character = {|
  name: string,
  image: string,
|};

export type Board = {|
  id: ?string,
  title: string,
  items: Array<Character>,
|};

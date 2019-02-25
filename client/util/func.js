export const nullthrows = <T>(thing: ?T): T => {
  if (thing == null) {
    throw new Exception('Got unexpected null');
  }

  return thing;
};

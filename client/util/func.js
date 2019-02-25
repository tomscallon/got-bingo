/* @flow */

export const nullthrows = <T>(thing: ?T): T => {
  if (thing == null) {
    throw new Error('Got unexpected null');
  }

  return thing;
};

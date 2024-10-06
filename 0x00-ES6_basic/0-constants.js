export const taskFirst = () => 'I prefer const when I can.';

export const getLast = () => ' is okay';

export const taskNext = () => {
  return `But sometimes let${getLast()}`;
};

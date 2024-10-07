export default function concatArrays(array1, array2, string) {
  const concatenated = [...array1, ...array2, ...string];
  return concatenated;
}


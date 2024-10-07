export default function iterateThroughObject(reportWithIterator) {
  if (!reportWithIterator || typeof reportWithIterator[Symbol.iterator] !== 'function') {
    throw new TypeError('Input must be an iterable object');
  }

  return [...reportWithIterator].join(' | ');
}

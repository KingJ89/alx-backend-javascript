const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let total = weakMap.get(endpoint) || 0;
  total += 1;
  weakMap.set(endpoint, total);
  if (total >= 5) throw new Error('Endpoint load is high');
  return total;
};

export { weakMap, queryAPI };

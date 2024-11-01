const updateUniqueItems = (itemMap) => {
  if (!(itemMap instanceof Map)) throw new Error('Cannot process');

  itemMap.forEach((value, key) => {
    if (value === 1) itemMap.set(key, 100);
  });
};

export default updateUniqueItems;


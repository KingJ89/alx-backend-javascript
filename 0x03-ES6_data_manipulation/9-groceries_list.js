export default function groceriesList() {
  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const groceryMap = new Map();
  for (const [item, quantity] of items) {
    groceryMap.set(item, quantity);
  }
  return groceryMap;
}

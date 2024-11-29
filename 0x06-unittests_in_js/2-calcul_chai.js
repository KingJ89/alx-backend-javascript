function calculateNumber(type, a, b) {
  const anum = Math.round(a);
  const bnum = Math.round(b);

  switch (type) {
    case "SUM":
      return anum + bnum;

    case "SUBTRACT":
      return anum - bnum;

    case "DIVIDE":
      return bnum === 0 ? "Error" : anum / bnum;

    default:
      throw new Error("Invalid operation type");
  }
}

module.exports = calculateNumber;

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = getCurrentYear(); // Call the function once and store the result

  return {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
}

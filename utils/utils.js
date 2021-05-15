export function checkEventYearAndEventMonth(year, month) {
  return (
    isNaN(year) ||
    isNaN(month) ||
    year < 2021 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  );
}

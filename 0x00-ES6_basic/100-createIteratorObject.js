export default function createIteratorObject(report) {
  function* employeeIterator() {
    for (const department of Object.values(report.allEmployees)) {
      yield* department; // Use yield* to simplify the inner loop
    }
  }
  return employeeIterator();
}

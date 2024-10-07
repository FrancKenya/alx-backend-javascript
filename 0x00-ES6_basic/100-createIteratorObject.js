export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];

  for (const department of Object.values(allEmployees)) {
    employees.push(...department);
  }

  return employees[Symbol.iterator]();
}

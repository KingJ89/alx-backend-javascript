interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const [student1, student2] = [
  {
    firstName: "Gift",
    lastName: "Mutewera",
    age: 36,
    location: "Polokwane"
  },
  {
    firstName: "Salomy",
    lastName: "Mashiri",
    age: 32,
    location: "Mhondoro"
  }
];

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const firstCellHead: HTMLTableCellElement = rowHead.insertCell(0);
const secondCellHead: HTMLTableCellElement = rowHead.insertCell(1);

firstCellHead.innerHTML = "First Name";
secondCellHead.innerHTML = "Location";
table.append(thead);

studentsList.forEach(student => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const firstCell: HTMLTableCellElement = row.insertCell(0);
  const secondCell: HTMLTableCellElement = row.insertCell(1);

  firstCell.innerHTML = student.firstName;
  secondCell.innerHTML = student.location;
});

table.append(tbody);
body.appendChild(table);


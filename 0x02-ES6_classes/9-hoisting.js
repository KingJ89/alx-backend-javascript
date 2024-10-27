export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  get year() {
    return this._year;
  }

  set year(year) {
    if (typeof year !== 'number') {
      throw new TypeError('Year must be a number');
    }
    this._year = year;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    if (typeof firstName !== 'string') {
      throw new TypeError('First name must be a string');
    }
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    if (typeof lastName !== 'string') {
      throw new TypeError('Last name must be a string');
    }
    this._lastName = lastName;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  set holbertonClass(holbertonClass) {
    if (!(holbertonClass instanceof HolbertonClass)) {
      throw new TypeError('holbertonClass must be an instance of HolbertonClass');
    }
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instantiate classes
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export default [student1, student2, student3, student4, student5];

class Employee {
  const;

  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`name: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    console.log(`name: ${this.name}, department: ${this.department}`);
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();
const manager = new Manager("John Doe", "Sales");
manager.displayInfo();

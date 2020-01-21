class Employee {
  empSalary: number;
  empName: string;

  constructor(salary: number, name: string) {
    this.empName = name;
    this.empSalary = salary;
  }

  getSalaryByName() : string {
    return `Employee ${this.empName} with salary ${this.empSalary}`;
  }
}

let emp = new Employee(100,"Steve");

console.log(emp.getSalaryByName());


/* include modifiers: Public, private, protected . */
// private
class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}
// let cat = new Animal("Cat").name; // Error: 'name' is private;

// protected
class Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee1 extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

/* readonly: chi duoc khoi tao or gan trong constructor */
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
console.log(dad.numberOfLegs);
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.


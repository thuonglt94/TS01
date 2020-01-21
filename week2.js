var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(salary, name) {
        this.empName = name;
        this.empSalary = salary;
    }
    Employee.prototype.getSalaryByName = function () {
        return "Employee " + this.empName + " with salary " + this.empSalary;
    };
    return Employee;
}());
var emp = new Employee(100, "Steve");
console.log(emp.getSalaryByName());

/* include modifiers: Public, private, protected . */ 
// private
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
// let cat = new Animal("Cat").name; // Error: 'name' is private;

// protected
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee1;
}(Person));
var howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error


/*readonly: chi duoc khoi tao or gan trong constructor */
var Octopus = /** @class */ (function () {
    function Octopus(theName, numberOf) {
        this.numberOfLegs = 8;
        this.name = theName;
        this.numberOfLegs = numberOf;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs", 9);
console.log(dad.numberOfLegs);
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.

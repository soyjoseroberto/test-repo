class Department {
    name: string;
    employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe() {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');
console.log(accounting);

accounting.addEmployee('Jose');
accounting.addEmployee('Arielle');

accounting.printEmployeeInformation();
// Talking about 'this'
const accountingCopy = { describe: accounting.describe } // not executing the function
accounting.describe(); // this yields undefined since 'this.name' does not exist in accountingCopy


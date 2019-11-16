import { observable, action, decorate } from 'mobx';
import Employee from '../classes/Employee';

export default class EmployeeStore {

    constructor() {
        let employees = JSON.parse(localStorage.getItem('employees'));
        if (!employees) {
            employees = [
                new Employee({
                    englishName: 'Frank', 
                    vietnameseName: 'Tú'
                }),
                new Employee({
                    englishName: 'Jeff', 
                    vietnameseName: 'Khánh'
                }),
                new Employee({
                    englishName: 'Patrik', 
                    vietnameseName: 'Thái'
                })
            ];
            localStorage.setItem('employees', JSON.stringify(this.employees));
        }
        this.employees = employees;
    }

    employee = new Employee({});

    setEmployee(employee) {
        this.employee = employee;
    }

    setEmployees(employees) {
        this.employees = employees;
    }

}

decorate(EmployeeStore, {
    employees: observable,
    setEmployee: action,
    setEmployees: action
})
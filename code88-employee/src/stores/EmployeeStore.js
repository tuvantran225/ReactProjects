import { observable, action, decorate, computed } from 'mobx';
import _ from 'lodash';
import Employee from '../classes/Employee';
import { DEPARTMENT, GENDER } from '../constants/EmployeeConstant';

export default class EmployeeStore {

    constructor() {
        let employees = JSON.parse(localStorage.getItem('employees'));
        if (!employees) {
            employees = [
                new Employee({
                    englishName: 'Frank', 
                    vietnameseName: 'Tú',
                    department: DEPARTMENT.DEV,
                    gender: GENDER.MALE
                }),
                new Employee({
                    englishName: 'Jeff', 
                    vietnameseName: 'Khánh',
                    department: DEPARTMENT.DEV,
                    gender: GENDER.MALE
                }),
                new Employee({
                    englishName: 'Patrik', 
                    vietnameseName: 'Thái',
                    department: DEPARTMENT.DEV,
                    gender: GENDER.MALE
                })
            ];
            localStorage.setItem('employees', JSON.stringify(employees));
        }
        this.setEmployees(employees);
    }

    modal = {
        employee: new Employee({}),
        isDetails: false
    };

    employees = [];
    
    setModal(employee, isDetails) {
        this.modal.employee = employee;
        this.modal.isDetails = isDetails;
    }
    
    setEmployees(employees) {
        this.employees = employees;
    }

    get totalManager() {
        return _.reduce(this.employees, (acc, cur) => cur.manager ? acc + 1 : acc, 0);
    }

}

decorate(EmployeeStore, {
    modal: observable,
    employees: observable,
    setModal: action,
    setEmployees: action,
    totalManager: computed
})
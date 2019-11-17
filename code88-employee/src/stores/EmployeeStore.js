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

    employee = new Employee({});

    employees = [];

    isDetailModal = false;
    
    setEmployee(employee) {
        this.employee = employee;
    }
    
    setEmployees(employees) {
        this.employees = employees;
    }

    setDetailModal(isDetailModal) {
        this.isDetailModal = isDetailModal;
    }

    get totalManager() {
        return _.reduce(this.employees, (acc, cur) => cur.manager ? acc + 1 : acc, 0);
    }

}

decorate(EmployeeStore, {
    employee: observable,
    employees: observable,
    isDetailModal: observable,
    setEmployee: action,
    setEmployees: action,
    setDetailModal: action,
    totalManager: computed
})
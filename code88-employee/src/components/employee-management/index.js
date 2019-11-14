import React, { Component } from 'react';
import $ from 'jquery';
import EmployeeFilter from './employee-filter';
import EmployeeList from './employee-list';
import EmployeeForm from './employee-form';
import { DEFAULT_EMPLOYEE, DEFAULT_EMPLOYEES, FORM_TYPE } from '../../constants/Constant'

class EmployeeManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeFilter: DEFAULT_EMPLOYEE,
            employeeForm: DEFAULT_EMPLOYEE,
            employees: DEFAULT_EMPLOYEES
        };
    }

    componentWillMount = () => {
        let employeeFilter = JSON.parse(localStorage.getItem('employeeFilter'));
        let employeeForm = JSON.parse(localStorage.getItem('employeeForm'));
        let employees = JSON.parse(localStorage.getItem('employees'));
        if (!employeeFilter) {
            employeeFilter = this.state.employeeFilter;
        }
        if (!employeeForm) {
            employeeForm = this.state.employeeForm;
        }
        if (!employees) {
            employees = this.state.employees;
        }
        this.setState({
            employeeFilter,
            employeeForm,
            employees
        });
    }

    changeValue = (event, formType) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        switch(formType) {
            case FORM_TYPE.SEARCH:
                let employeeFilter = {...this.state.employeeFilter};
                employeeFilter[name] = value;
                this.setState({ employeeFilter });
                break;
            case FORM_TYPE.MANIPULATE:
                    let employeeForm = {...this.state.employeeForm};
                    employeeForm[name] = value;
                this.setState({ employeeForm });
                break;
        }
    }

    searchEmployee = () => {
        const { employeeFilter } = this.state;
        console.log(employeeFilter);
    }

    createEmployee = () => {
        let { employeeForm, employees } = this.state;
        employees.push(employeeForm);
        console.log(employees);
        this.setState({
            employees
        });
        localStorage.setItem("employees", JSON.stringify(employees));
        $('#employee-form').modal('hide');
    }

    render() {
        const { employeeFilter, employeeForm, employees } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="card w-100">
                        <div className="card-header">
                            <h3 className="text-center">Code88 Employees</h3>
                        </div>
                        <div className="card-body">
                            <EmployeeFilter
                                employee={employeeFilter}
                                changeValue={this.changeValue}
                                searchEmployee={this.searchEmployee}
                            />
                            <EmployeeList 
                                employees={employees} 
                            />
                            <EmployeeForm
                                employee={employeeForm}
                                changeValue={this.changeValue}
                                createEmployee={this.createEmployee}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeManagement;

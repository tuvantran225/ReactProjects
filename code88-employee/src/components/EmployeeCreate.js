import React, { Component } from 'react';
import { inject } from 'mobx-react';
import $ from 'jquery';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    createEmployee = () => {
        const { store } = this.props;
        const { employee } = store;
        let employees = JSON.parse(localStorage.getItem('employees'));
        employees.push(employee);
        store.setEmployees(employees);
        localStorage.setItem('employees', JSON.stringify(employees));
        $('#employee-form').modal('hide');
    }

    render() {
        return (
            <div className="modal fade" id="employee-form" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create New Employee</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <EmployeeForm />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.createEmployee}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('store') (EmployeeCreate);

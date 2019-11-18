import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import $ from 'jquery';
import Employee from '../classes/Employee';
import { DEPARTMENT, GENDER, STATUS } from '../constants/EmployeeConstant';

class EmployeeModal extends Component {

    changeValue = (event) => {
        const { store } = this.props;
        let { employee, isDetails } = store.modal;
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        employee[name] = value;
        this.setState({employee});
        store.setModal(employee, isDetails);
    }

    createEmployee = () => {
        const { store } = this.props;
        const { employee, isDetails } = store.modal;
        let employees = JSON.parse(localStorage.getItem('employees'));
        employees.push(employee);
        store.setEmployees(employees);
        localStorage.setItem('employees', JSON.stringify(employees));
        $('#employee-form').modal('hide');
        store.setModal(new Employee({}), isDetails);
    }

    closeModal = () => {
        const { store } = this.props;
        store.setModal(new Employee({}), false);
    }

    render() {
        const { modal } = this.props.store;
        const { employee, isDetails } = modal;
        const { englishName, vietnameseName, department, gender, discription, status, manager} = employee;
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
                                <div className="row">
                                    <div className="form-group col-md-3">
                                        <label>English Name</label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="englishName"
                                            value={englishName}
                                            onChange={this.changeValue}
                                            disabled={isDetails}
                                        />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Vietnamese Name</label>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="vietnameseName"
                                            value={vietnameseName}
                                            onChange={this.changeValue}
                                            disabled={isDetails}
                                        />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Department</label>
                                        <select 
                                            className="form-control" 
                                            name="department"
                                            value={department}
                                            onChange={this.changeValue}
                                            disabled={isDetails}
                                        >
                                            <option value={DEPARTMENT.ALL}>All</option>
                                            <option value={DEPARTMENT.DEV}>Developer</option>
                                            <option value={DEPARTMENT.HR}>Human Resource</option>
                                            <option value={DEPARTMENT.IT}>Information Technology</option>
                                            <option value={DEPARTMENT.QA}>Quality Assurance</option>
                                            <option value={DEPARTMENT.SA}>Solution Architech</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Gender</label>
                                        <select 
                                            className="form-control" 
                                            name="gender"
                                            value={gender}
                                            onChange={this.changeValue}
                                            disabled={isDetails}
                                        >
                                            <option value={GENDER.ALL}>All</option>
                                            <option value={GENDER.FEMALE}>Female</option>
                                            <option value={GENDER.MALE}>Male</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Discription</label>
                                    <textarea 
                                        className="form-control" 
                                        name="discription"
                                        value={discription}
                                        onChange={this.changeValue}
                                        disabled={isDetails}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <div>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input 
                                                    type="radio" 
                                                    className="form-check-input" 
                                                    name="status"
                                                    value={STATUS.ACTIVE}
                                                    onChange={this.changeValue}
                                                    checked={status === STATUS.ACTIVE}
                                                    disabled={isDetails}
                                                />
                                                    Active
                                            </label>
                                        </div>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input 
                                                    type="radio" 
                                                    className="form-check-input" 
                                                    name="status"
                                                    value={STATUS.INACTIVE}
                                                    onChange={this.changeValue}
                                                    checked={status === STATUS.INACTIVE}
                                                    disabled={isDetails}
                                                />
                                                    Inactive
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input 
                                                type="checkbox" 
                                                className="form-check-input" 
                                                name="manager"
                                                onChange={this.changeValue}
                                                checked={manager}
                                                disabled={isDetails}
                                            />
                                                Manager
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.createEmployee}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('store') (observer(EmployeeModal));

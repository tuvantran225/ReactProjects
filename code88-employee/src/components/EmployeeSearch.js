import React, { Component } from 'react';
import { inject } from 'mobx-react';
import _ from 'lodash';
import Employee from '../classes/Employee';
import { DEPARTMENT, GENDER, STATUS } from '../constants/EmployeeConstant';

class EmployeeSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: new Employee({})
        }
    }

    changeValue = (event) => {
        let { employee } = this.state;
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        employee[name] = value;
        this.setState({ employee });
    }

    searchEmployee = () => {
        const { store } = this.props;
        const { employee } = this.state;
        let employees = JSON.parse(localStorage.getItem('employees'));
        let conditions = {};
        _.forOwn(employee, (value, key) => {
            if (!_.isEmpty(value) || _.isBoolean(value)) {
                conditions[key] = value;
            }
        });
        employees = _.filter(employees, conditions);
        store.setEmployees(employees);
    }

  render() {
    const { englishName, vietnameseName, department, gender, discription, status, manager } = this.state.employee;
    return (
        <form>
            <div className="row">
                <div className="form-group col-md-3">
                    <label>English Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="englishName"
                        value={englishName}
                        onChange={this.changeValue}
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
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Department</label>
                    <select 
                        className="form-control" 
                        name="department"
                        value={department}
                        onChange={this.changeValue}
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
                        />
                            Manager
                    </label>
                </div>
            </div>
            
            <div className="form-group">
                <button className="btn btn-primary" type="button" onClick={this.searchEmployee}>Search</button>&nbsp;
                <button className="btn btn-success" type="button" data-toggle="modal" data-target="#employee-form">Create</button>
            </div>
        </form>
    );
  }
}

export default inject('store') (EmployeeSearch);

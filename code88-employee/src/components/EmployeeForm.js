import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { DEPARTMENT, GENDER, STATUS } from '../constants/EmployeeConstant';
import { observer } from 'mobx-react';

class EmployeeForm extends Component {

    changeValue = (event) => {
        let { store } = this.props;
        let { employee } = store;
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        employee[name] = value;
        this.setState({ employee });
        store.setEmployee(employee);
    }

    render() {
        const { store } = this.props;
        const { isDetailModal } = store;
        const { englishName, vietnameseName, department, gender, discription, status, manager } = store.employee;
        return (
            <div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label>English Name</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="englishName"
                            value={englishName}
                            onChange={this.changeValue}
                            disabled={isDetailModal}
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
                            disabled={isDetailModal}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Department</label>
                        <select 
                            className="form-control" 
                            name="department"
                            value={department}
                            onChange={this.changeValue}
                            disabled={isDetailModal}
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
                            disabled={isDetailModal}
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
                        disabled={isDetailModal}
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
                                    disabled={isDetailModal}
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
                                    disabled={isDetailModal}
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
                                disabled={isDetailModal}
                            />
                                Manager
                        </label>
                    </div>
                </div> 
            </div>
        );
    }
}

export default inject('store') (observer(EmployeeForm));
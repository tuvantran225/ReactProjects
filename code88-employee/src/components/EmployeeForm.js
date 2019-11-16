import React, { Component } from 'react';
import { inject } from 'mobx-react';
import _ from 'lodash';
import Employee from '../classes/Employee';
import { DEPARTMENT, GENDER, STATUS } from '../constants/EmployeeConstant';

class EmployeeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: new Employee({})
        }
    }

    changeValue = (event) => {
        let { employee } = this.state;
        let { store } = this.props;
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        employee[name] = value;
        this.setState({ employee });
        store.setEmployee(employee);
    }

    renderDepartment = () => {
        return _.map(DEPARTMENT, value => {
            return <option key={value.KEY} value={value.KEY}>{value.VALUE}</option>
        });
    }

    renderGender = () => {
        return _.map(GENDER, value => {
            return <option key={value.KEY} value={value.KEY}>{value.VALUE}</option>
        });
    }

    renderStatus = () => {
        return _.map(STATUS, value => {
            return (
                <div key={value.KEY} className="form-check-inline">
                    <label className="form-check-label">
                        <input 
                            type="radio" 
                            className="form-check-input" 
                            name="status"
                            value={value.KEY}
                            onChange={this.changeValue}
                            checked={this.state.employee.status === value.KEY} />
                            {value.VALUE}
                    </label>
                </div>
            );
        });
    }

    render() {
        const { englishName, vietnameseName, department, gender, discription, manager } = this.state.employee;
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
                            onChange={this.changeValue} />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Vietnamese Name</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="vietnameseName"
                            value={vietnameseName}
                            onChange={this.changeValue} />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Department</label>
                        <select 
                            className="form-control" 
                            name="department"
                            value={department}
                            onChange={this.changeValue}
                        >
                            {this.renderDepartment()}
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
                            {this.renderGender()}    
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>Discription</label>
                    <textarea 
                        className="form-control" 
                        name="discription"
                        value={discription}
                        onChange={this.changeValue} />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <div>
                        {this.renderStatus()}
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
                                checked={manager} />
                                Manager
                        </label>
                    </div>
                </div> 
            </div>
        );
    }
}

export default inject('store') (EmployeeForm);
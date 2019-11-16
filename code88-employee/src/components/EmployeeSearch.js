import React, { Component } from 'react';
import { inject } from 'mobx-react';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';

class EmployeeSearch extends Component {

    searchEmployee = () => {
        const { store } = this.props;
        const { employee } = store;
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
    return (
        <form>
            <EmployeeForm />
            
            <div className="form-group">
                <button className="btn btn-primary" type="button" onClick={this.searchEmployee}>Search</button>&nbsp;
                <button className="btn btn-success" type="button" data-toggle="modal" data-target="#employee-form">Create</button>
            </div>
        </form>
    );
  }
}

export default inject('store') (EmployeeSearch);

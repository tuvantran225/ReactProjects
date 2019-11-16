import React, { Component } from 'react';
import EmployeeSearch from './EmployeeSearch';
import EmployeeCreate from './EmployeeCreate';
import EmployeeList from './EmployeeList';

class EmployeeManagement extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card w-100">
                        <div className="card-header">
                            <h3 className="text-center">Code88 Employees</h3>
                        </div>
                        <div className="card-body">
                            <EmployeeSearch />
                            <EmployeeCreate />
                            <EmployeeList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeManagement;

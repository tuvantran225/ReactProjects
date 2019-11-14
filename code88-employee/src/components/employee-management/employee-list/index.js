import React, { Component } from 'react';

class EmployeeList extends Component {

  render() {
    const body = this.props.employees.map((employee, index) => {
      return (
        <tr key={index}>
        <td>{index + 1}</td>
        <td>{employee.englishName}</td>
        <td>{employee.vietnameseName}</td>
        <td className="text-center">{employee.department}</td>
        <td className="text-center">{employee.gender}</td>
        <td className="text-center">
          <span className={employee.status === 'ACTIVE' ? 'badge badge-success' : 'badge badge-danger'}>{employee.status}</span>
        </td>
      <td className="text-center">{employee.manager ? 'Yes' : 'No'}</td>
        <td className="text-center">
          <a href="#" className="table-link info">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#" className="table-link warning">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-pencil fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#" className="table-link danger">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
              </span>
            </a>
        </td>
    </tr> 
      );
    });
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>English Name</th>
                    <th>Vietnamese Name</th>
                    <th className="text-center">Department</th>
                    <th className="text-center">Gender</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Manager</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
            {body}
            </tbody>
        </table>
    );
  }
}

export default EmployeeList;

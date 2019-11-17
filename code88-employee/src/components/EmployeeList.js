import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';
import $ from 'jquery';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { STATUS, TABLE_HEADER } from '../constants/EmployeeConstant';

class EmployeeList extends Component {

  detailEmployee = (row) => {
    const { store } = this.props;
    const employee = {
      englishName: row.englishName,
      vietnameseName: row.vietnameseName,
      department: row.department,
      gender: row.gender,
      discription: row.discription,
      status: row.status,
      manager: row.manager
    };
    store.setEmployee(employee);
    store.setDetailModal(true);
    $('#employee-form').modal('show');
  }

  renderBody = () => {
    const { employees } = this.props.store;
    return  _.map(employees, (employee, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{employee.englishName}</td>
          <td>{employee.vietnameseName}</td>
          <td className="text-center">{employee.department}</td>
          <td className="text-center">{employee.gender}</td>
          <td className="text-center">
            <span className={employee.status === STATUS.ACTIVE ? 'badge badge-success' : 'badge badge-danger'}>{employee.status}</span>
          </td>
          <td className="text-center">{employee.manager ? 'Yes' : 'No'}</td>
            <td className="text-center">
              <a href="#a" className="table-link info" onClick={original => this.detailEmployee(original)}>
                  <span className="fa-stack">
                    <i className="fa fa-square fa-stack-2x" />
                    <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                  </span>
                </a>
                <a href="#b" className="table-link warning">
                  <span className="fa-stack">
                    <i className="fa fa-square fa-stack-2x" />
                    <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                  </span>
                </a>
                <a href="#c" className="table-link danger">
                  <span className="fa-stack">
                    <i className="fa fa-square fa-stack-2x" />
                    <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                  </span>
                </a>
            </td>
        </tr> 
      );
    });
  }

  renderTableHeader = () => {
    return _.map(TABLE_HEADER, header => {
      return {
        Header: header.TEXT,
        accessor: header.ACCESSOR,
        Cell: original => this.renderCell(original)
      }
    });
  }

  renderCell = (original) => {
    switch(original.column.id) {
      case TABLE_HEADER.DEPARTMENT.ACCESSOR:
        return (
          <div className="text-center">
            {original.row.department}
          </div>
        );
      case TABLE_HEADER.STATUS.ACCESSOR:
          return (
            <div className="text-center">
              <span className={original.row.status === STATUS.ACTIVE ? 'badge badge-success' : 'badge badge-danger'}>{original.row.status}</span>
            </div>
          );
      case TABLE_HEADER.IS_MANAGER.ACCESSOR:
        return (
          <div className="text-center">
            {original.row.manager ? 'Yes' : 'No'}
          </div>
        );
      case TABLE_HEADER.ACTION.ACCESSOR:
        return (
          <div className="text-center">
            <a href="#a" className="table-link info" onClick={() => this.detailEmployee(original.row)}>
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#b" className="table-link warning">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-pencil fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#c" className="table-link danger">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
              </span>
            </a>
          </div>
        );
      default:
        return original.value;
    }
  }

  renderTable = () => {
    const { totalManager } = this.props.store;
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
              {this.renderBody()}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" className="text-right">Total Manager:</td>
                <td colSpan="2">{totalManager}</td>
              </tr>
            </tfoot>
        </table>
    );
  }

  render() {
    
    return (
      <ReactTable 
        columns={this.renderTableHeader()}
        data={this.props.store.employees}
      />
      // this.renderTable()  
    );

  }
}

export default inject('store') (observer(EmployeeList));
